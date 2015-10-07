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

    SsPostsController.$inject = ['$sce'];

    function SsPostsController($sce) {
        var vm = this;

        vm.getIframeSrc = getIframeSrc;

        function getIframeSrc(videoId) {
            return $sce.trustAsResourceUrl('https://player.vimeo.com/video/' + videoId + '?color=ffffff&badge=0');
        }
    }
})();
