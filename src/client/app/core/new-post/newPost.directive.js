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

    SsNewPostController.$inject = ['$scope', '$rootScope', '$timeout'];

    function SsNewPostController($scope, $rootScope, $timeout) {
        var vm = this;

        vm.newPostOverlayOpen = false;

        vm.closeNewPostOverlay = closeNewPostOverlay;
        vm.addNewPost = addNewPost;
        vm.newPost = {
            type: 'text',
            user: 'Jessica Tuan',
            userImage: '/images/user.jpg',
            media: '',
            time: '1s'
        };

        $scope.$on('openNewPostOverlay', openNewPostOverlay);

        function openNewPostOverlay() {
            vm.newPostOverlayOpen = true;
            angular.element('.page-content').addClass('overlay-open');
            $timeout(function(){ angular.element('.new-post__textarea').trigger('focus'); }, 50);
        }

        function closeNewPostOverlay() {
            vm.newPostOverlayOpen = false;
            angular.element('.page-content').removeClass('overlay-open');
        }

        function addNewPost() {
            var post = {};
            _.assign(post, vm.newPost);
            $rootScope.$broadcast('addNewPost', post);

            // Clear and close overlay
            vm.newPost.text = '';
            closeNewPostOverlay();
        }
    }
})();
