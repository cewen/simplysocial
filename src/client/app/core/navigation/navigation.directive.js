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
        var vm = this;

        vm.profileNavOpen = false;
        vm.openProfileNav = openProfileNav;
        vm.closeProfileNav = closeProfileNav;

        vm.profileLinks = [
            { title: 'Profile', path: 'landing' },
            { title: 'Followers', path: 'landing' },
            { title: 'Following', path: 'landing' },
            { title: 'Settings', path: 'settings' }
        ];

        function openProfileNav() {
            vm.profileNavOpen = true;
        }

        function closeProfileNav() {
            vm.profileNavOpen = false;
        }
    }
})();
