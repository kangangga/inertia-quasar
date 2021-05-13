import { InertiaProgress } from "@inertiajs/progress";
export default ({ config }) => {
    if (config.app.loading !== false) {
        InertiaProgress.init(config.app.loading);
    }
};
