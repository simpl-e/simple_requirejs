# simple_ Requirejs Configurations

## Dynamic usage

#### main.js file:
```js
require(['main-remote.js'], function () {

    // BOOT
    require([
        "custom/start",
        "custom/lib",
        "boot",
    ], function (start) {
        start();
    });
});

// DELAYED
require([
    "bootstrapMD"
]);
```

## Bundle usage

#### app.buils.js file:
```js
({
    baseUrl: "src",
    name: "main",
    out: "main-built.js",
    preserveLicenseComments: false,
    findNestedDependencies: true,
    paths: {
        text: "../node_modules/requirejs-text/text",
        vue: "../node_modules/require-vuejs/dist/require-vuejs",
        css: "../node_modules/require-css/css",
        'css-builder': "../node_modules/require-css/css-builder",
        normalize: "../node_modules/require-css/normalize",
        jquery: "../node_modules/jquery/dist/jquery",
        Vue: "../node_modules/vue/dist/vue",
        axios: "../node_modules/axios/dist/axios",
        bootstrap: "../node_modules/bootstrap/dist/js/bootstrap.bundle",
        bootstrapMD: "../node_modules/bootstrap-material-design/dist/js/bootstrap-material-design",
        popper: "../node_modules/popper.js/dist/popper",
        bootstrap_notify: "../node_modules/bootstrap-notify/bootstrap-notify",
        sweetalert: "../node_modules/sweetalert/dist/sweetalert.min"
        ,
        bootstrapMD_css: "../node_modules/bootstrap-material-design/dist/css/bootstrap-material-design",
        'font-awesome': "../node_modules/font-awesome/css/font-awesome",
        animate: "../node_modules/animate.css/animate"
    }
})
```

#### r.js bundle:
```js
r.js -o app.build.js
```
