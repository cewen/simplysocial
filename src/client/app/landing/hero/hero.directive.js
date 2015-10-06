(function() {
    'use strict';

    angular
        .module('app.hero')
        .directive('ssHero', ssHero);

    function ssHero() {
        var directive = {
            restrict: 'E',
            controller: SsHeroController,
            controllerAs: 'vm',
            bindToController: {},
            scope: {},
            templateUrl: 'app/landing/hero/hero.html'
        };

        return directive;
    }

    SsHeroController.$inject = [];

    function SsHeroController() {
        // var vm = this;
    }
})();
