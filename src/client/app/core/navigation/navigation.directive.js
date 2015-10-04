(function() {
    'use strict';

    angular
        .module('app.navigation')
        .directive('ssNavigation', ssNavigation);

    function ssNavigation() {
        var directive = {
            restrict: 'E',
            controller: SsNavigationController,
            controllerAs: 'vm',
            bindToController: {},
            scope: {},
            templateUrl: 'app/core/navigation/navigation.html'
        };

        return directive;
    }

    SsNavigationController.$inject = [];

    function SsNavigationController() {
        // var vm = this;
    }
})();
