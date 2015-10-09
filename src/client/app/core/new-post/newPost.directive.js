(function() {
    'use strict';

    angular
        .module('app.newPost')
        .directive('ssNewPost', ssNewPost);

    function ssNewPost() {
        var directive = {
            restrict: 'E',
            controller: SsNewPostController,
            controllerAs: 'vm',
            bindToController: {},
            scope: {},
            templateUrl: 'app/core/new-post/newPost.html'
        };

        return directive;
    }

    SsNewPostController.$inject = ['$scope'];

    function SsNewPostController($scope) {
        var vm = this;

        vm.newPostOverlayOpen = false;

        vm.closeNewPostOverlay = closeNewPostOverlay;

        $scope.$on('openNewPostOverlay', openNewPostOverlay);

        function openNewPostOverlay() {
            vm.newPostOverlayOpen = true;

            angular.element('.page-content').addClass('overlay-open');
        }

        function closeNewPostOverlay() {
            vm.newPostOverlayOpen = false;
            angular.element('.page-content').removeClass('overlay-open');
        }
    }
})();
