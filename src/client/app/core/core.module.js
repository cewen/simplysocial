(function() {
    'use strict';

    angular
        .module('app.core', [
            'ngAnimate',
            'ngSanitize',
            'blocks.exception',
            'blocks.logger',
            'blocks.router',
            'ui.router',
            'app.navigation',
            'app.footer',
            'app.newPost'
        ]);
})();
