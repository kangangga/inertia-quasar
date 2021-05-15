const path = require("path");
const fs = require("fs-extra");
const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js("resources/js/app.js", "public/js").vue({ version: 2 });
// .browserSync("inertia.test");
// mix.autoload({
//     jquery: ["$", "window.jQuery"]
// });

mix.sass("resources/css/app.scss", "public/css");
mix.alias({
    ziggy: path.resolve("vendor/tightenco/ziggy/dist"),
    "~": path.join(__dirname, "./resources/js"),
    quasar: path.join(__dirname, "./resources/js/Plugins/Quasar")
});
// mix.webpackConfig({
//     resolve: {
//         extensions: [".js", ".json", ".vue"],
//         alias: {
//             "~": path.join(__dirname, "./resources/js")
//         },
//         modules: ["node_modules"]
//     }
// });
