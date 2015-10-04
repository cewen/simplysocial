(function() {
    'use strict';

    angular
        .module('app.landing')
        .controller('LandingController', LandingController);

    LandingController.$inject = ['logger'];
    /* @ngInject */
    function LandingController(logger) {
        var vm = this;
        vm.title = 'Landing';
    }
})();
