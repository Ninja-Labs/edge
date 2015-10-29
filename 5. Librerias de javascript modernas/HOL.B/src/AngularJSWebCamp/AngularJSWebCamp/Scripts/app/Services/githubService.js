(function () {
    'use strict';

    angular
        .module('app')
        .factory('githubService', githubService);

    githubService.$inject = ['$http'];

    function githubService($http) {
        var service = {
            getData: getDataGitHub
        };

        return service;

        function getDataGitHub(topic, page, pageSize) {
            return $http.get("https://api.github.com/search/repositories?q=" + topic + "&page=" + page + "&per_page=" + pageSize)
                .then(function (response) {
                    return response.data;
                });
        }
    }
})();