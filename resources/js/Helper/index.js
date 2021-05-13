export default params => {
    const helperFile = __parseHelper(require.context("./", false, /.*\.js$/));
    const loaded = params.config.helper.map(f => {
        const helpers = helperFile[f];
        if (typeof helpers === "function") {
            return helpers(params);
        } else {
            throw Error(`Undefined helper [${f}]`);
        }
    });
};

function __parseHelper(requireContext) {
    return requireContext
        .keys()
        .map(file => [
            file.replace(/(^.\/)|(\.js$)/g, ""),
            requireContext(file)
        ])
        .reduce(
            (guards, [name, guard]) => ({ ...guards, [name]: guard.default }),
            {}
        );
}
