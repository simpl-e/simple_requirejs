/* globals define, requirejs */

define(function () {

    requirejs.config({
        waitSeconds: 0, //prevent timeout by requirejs
        paths: {
            // REQUIREJS PLUGINS
            text: "https://cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text.min",
            css: "https://cdnjs.cloudflare.com/ajax/libs/require-css/0.1.10/css",
            vue: "https://cdn.rawgit.com/edgardleal/require-vuejs/aeaff6db/dist/require-vuejs",
            // JS
            Vue: "https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.13/vue"
        },
        map: {
            "*": {
                css: "css"
            }
        },
        exclude: ["css/normalize"]
    });

    // DEFFINITIONS
    window.module = ""; //prevent import bugs
    define("vue-global", ["Vue"], function (Vue) {
        window.Vue = Vue;
    });

    define("boot", [
        "vue-global"
    ]);

    // NOT ESSENTIAL AND/OR DELAYABLE LIBS
    requirejs([
        "text",
        "css",
        "vue"
    ]);

});
