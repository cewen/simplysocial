(function() {
    'use strict';

    angular
        .module('app.posts')
        .directive('ssPosts', ssPosts);

    function ssPosts() {
        var directive = {
            restrict: 'E',
            controller: SsPostsController,
            controllerAs: 'vm',
            bindToController: {
                posts: '='
            },
            scope: {},
            templateUrl: 'app/landing/posts/posts.html'
        };

        return directive;
    }

    SsPostsController.$inject = ['$sce', '$rootScope'];

    function SsPostsController($sce, $rootScope) {
        var vm = this;

        vm.postType = 'all';
        vm.postLayout = 'list';
        vm.showComments = false;

        vm.getIframeSrc = getIframeSrc;
        vm.setPostType = setPostType;
        vm.setPostLayout = setPostLayout;
        vm.toggleComments = toggleComments;

        function setPostType(postType) {
            vm.postType = postType;

            // Masonry doesn't reload properly, even when calling $rootScope.$broadcast('masonry.reload')
            // as described here: http://stackoverflow.com/questions/23710217/how-do-you-trigger-a-reload-in-angular-masonry
            // So we force it to list view
            if (postType !== 'all') {
                vm.postLayout = 'list';
            }
        }

        function setPostLayout(postLayout) {
            vm.postLayout = postLayout;

            // Masonry doesn't reload properly, even when calling $rootScope.$broadcast('masonry.reload')
            // as described here: http://stackoverflow.com/questions/23710217/how-do-you-trigger-a-reload-in-angular-masonry
            // So we force it to show all posts in grid view
            if (postLayout === 'grid') {
                vm.postType = 'all';
            }
        }

        function getIframeSrc(videoId) {
            return $sce.trustAsResourceUrl('https://player.vimeo.com/video/' + videoId + '?color=ffffff&badge=0');
        }

        function toggleComments() {
            vm.showComments = !vm.showComments;
            $rootScope.$broadcast('masonry.reload');
        }
    }
})();
