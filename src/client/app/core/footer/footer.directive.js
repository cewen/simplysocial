(function() {
    'use strict';

    angular
        .module('app.footer')
        .directive('ssFooter', ssFooter);

    function ssFooter() {
        var directive = {
            restrict: 'E',
            controller: SsFooterController,
            controllerAs: 'vm',
            bindToController: {},
            scope: {},
            templateUrl: 'app/core/footer/footer.html'
        };

        return directive;
    }

    SsFooterController.$inject = [];

    function SsFooterController() {
        var vm = this;

        vm.links = [
            { title: 'About Us' },
            { title: 'Support' },
            { title: 'Privacy' },
            { title: 'Terms' }
        ];
    }
})();
