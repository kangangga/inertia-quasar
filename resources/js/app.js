import "~/bootstrap";

import { App, plugin } from "@inertiajs/inertia-vue";
import { Inertia } from "@inertiajs/inertia";

import Vue from "vue";
import route from "ziggy";
import Helper from "helper";
import configApp from "~/config.app";

import Quasar from "quasar";
import iconSet from "quasar/icon-set/material-icons";
import "quasar/dist/quasar.ie.polyfills.js";
Vue.use(Quasar, {
    config: {
        loadingBar: {
            color: "primary",
            size: "4px",
            skipHijack: true
        }
    },
    iconSet
});

Vue.use(plugin);
async function startApp() {
    //Define setting
    const el = document.getElementById("app");
    var setting = {
        el,
        config: configApp({ Vue, Inertia })
    };
    // Load router
    const { data } = await window.axios.post("/api/routers");
    const router = (name, params, absolute, config = data) =>
        route(name, params, absolute, config);
    Vue.prototype.$route = router;

    //Load Helper
    Helper({
        Vue,
        router,
        Inertia,
        setting,
        config: setting.config
    });

    // Init Vue
    return new Vue({
        render: h =>
            h(App, {
                props: {
                    initialPage: JSON.parse(el.dataset.page),
                    resolveComponent: async function(name) {
                        const layouts = parseLayout();

                        return import(`pages/${name}`).then(
                            ({ default: page }) => {
                                if (page.layout !== "undefined") {
                                    page.layout = layouts["default"];
                                } else {
                                    if (page.layout === "no-layout") {
                                        page.layout = null;
                                    } else {
                                        page.layout = layouts[page.layout];
                                    }
                                }
                                return page;
                            }
                        );
                    }
                    // transformProps: props => props
                }
            })
    }).$mount(el);
}

function parseLayout() {
    const requireContext = require.context("./Layout", false, /.*\.vue$/);
    return requireContext
        .keys()
        .map(file => [
            file.replace(/(^.\/)|(\.vue$)/g, ""),
            requireContext(file)
        ])
        .reduce((components, [name, component]) => {
            components[name] = component.default || component;
            return components;
        }, {});
}

startApp();
