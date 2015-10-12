(function() {
    'use strict';

    angular
        .module('app.uniform')
        .directive('ssUniform', ssUniform);

    function ssUniform() {
        var directive = {
            restrict: 'A',
            link: ssUniformLink
        };

        return directive;
    }

    function ssUniformLink(scope, element, attrs) {
        element.uniform();
    }
})();
