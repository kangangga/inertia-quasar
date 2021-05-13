module.exports = function() {
    return {
        // Params : Vue, router, Inertia, setting, config
        helper: ["loading"],
        app: {
            // https://inertiajs.com/progress-indicators
            loading: {
                delay: 0,
                color: "#29d",
                includeCSS: true,
                showSpinner: true
            },
            defaultLayout: "default"
        }
    };
};
