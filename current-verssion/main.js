requirejs.config({

    baseUrl: 'bower_components',

    paths: {
        "angular": "angular/angular",
        "textAngular": "textAngular/dist/textAngular.umd",
        "textAngularRangy": "textAngular/dist/textAngular-rangy.min",
        "textAngularSanitize": "textAngular/dist/textAngular-sanitize.min"
    },

    shim: {
        textAngular: {
            deps: ['angular']
        }
    }
});


require(['../app']);