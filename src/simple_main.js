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
            jquery: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery",
            Vue: "https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.13/vue",
            //bootstrap: "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/js/bootstrap.bundle",
            bootstrapMD: "https://unpkg.com/bootstrap-material-design@4.1.1/dist/js/bootstrap-material-design",
            axios: "https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.min",
            'popper.js': "https://unpkg.com/popper.js@1.12.6/dist/umd/popper",
            bootstrap_notify: "https://cdnjs.cloudflare.com/ajax/libs/mouse0270-bootstrap-notify/3.1.7/bootstrap-notify.min",
            sweetalert: "https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.0/sweetalert.min",
            // CSS
            //bootstrap_css: "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.1/css/bootstrap-grid.min",
            bootstrapMD_css: "https://unpkg.com/bootstrap-material-design@4.1.1/dist/css/bootstrap-material-design.min",
            'font-awesome': "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome",
            animate: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min",
        },
        map: {
            "*": {
                css: "css"
            }
        },
        config: {
            text: {
                useXhr: function () {
                    // allow cross-domain requests - remote server allows CORS
                    return true;
                }
            }
        },
        shim: {
            notify: ["jquery"]
        },
        exclude: ["css/normalize"],
        catchError: true
    });

    // PRE-LOADINGS
    define("notify", ["bootstrap_notify", "sweetalert"]); //(LOAD WITHOUT WAIT 'jquery')

    // DEFFINITIONS
    window.module = ""; //prevent import bugs
    define("vue-global", ["Vue"], function (Vue) {
        window.Vue = Vue;
    });
    define("axios-global", ["axios"], function (axios) {
        window.axios = axios;
    });

    define("boot", [
        // CSS
        "css!bootstrapMD_css",
        "css!font-awesome",
        "css!animate", //"bootstrap_notify" NEED
        // JS
        "jquery",
        "vue-global",
        "axios-global",
        "notify"
    ]);

    // NOT ESSENTIAL AND/OR DELAYABLE LIBS
    requirejs([
        "text",
        "css",
        "vue",
        //"bootstrap"
        "bootstrapMD"
    ]);

});
