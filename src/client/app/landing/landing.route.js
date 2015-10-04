(function() {
    'use strict';

    angular
        .module('app.landing')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'landing',
                config: {
                    url: '/',
                    templateUrl: 'app/landing/landing.html',
                    controller: 'LandingController',
                    controllerAs: 'vm',
                    title: 'landing',
                    settings: {}
                }
            }
        ];
    }
})();
