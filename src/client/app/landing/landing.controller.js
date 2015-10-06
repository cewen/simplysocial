(function() {
    'use strict';

    angular
        .module('app.landing')
        .controller('LandingController', LandingController);

    LandingController.$inject = ['$http'];
    /* @ngInject */
    function LandingController($http) {
        var vm = this;

        vm.posts = [];

        // Get data for posts
        $http.get('/data/posts.json').then(function(response) {
            vm.posts = response.data;
        });
    }
})();
