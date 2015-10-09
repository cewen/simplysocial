(function() {
    'use strict';

    angular
        .module('app.landing')
        .controller('LandingController', LandingController);

    LandingController.$inject = ['$scope', '$http'];
    /* @ngInject */
    function LandingController($scope, $http) {
        var vm = this;

        vm.posts = [];

        // Get data for posts
        $http.get('/data/posts.json').then(function(response) {
            vm.posts = response.data;
        });

        $scope.$on('addNewPost', addNewPost);
        
        function addNewPost(event, post) {
            vm.posts.unshift(post);
        }
    }
})();
