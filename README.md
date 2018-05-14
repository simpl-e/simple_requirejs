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

#### Configure app.buils.js file:
Copy `src/app.buils.js` for full bundle or `src/cdn.app.buils.js` for keep CDN imports to your root project

#### Run r.js bundle:
```sh
r.js -o app.build.js
```
