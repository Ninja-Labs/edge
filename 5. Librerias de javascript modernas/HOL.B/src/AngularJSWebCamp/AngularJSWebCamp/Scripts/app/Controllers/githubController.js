(function () {
    'use strict';

    angular
        .module('app')
        .controller('githubController', githubController);

    githubController.$inject = ['$scope', 'githubService'];

    function githubController($scope, githubService) {
        $scope.title = 'githubController';
        $scope.topic = '';
        $scope.order = '+owner.login';
        $scope.page = 1;
        $scope.pageSize = 30;
        $scope.totalResults = 0;

        var onSearchComplete = function (data) {
            $scope.list = data.items;
            if (data.total_count > 1000)
                $scope.totalResults = 1000;
            else
                $scope.totalResults = data.total_count;

            $scope.totalPage = $scope.totalResults / $scope.pageSize;
            $scope.pages = [];
            for (var i = 1; i <= $scope.totalPage; i++) {
                $scope.pages.push(i);
            }
        };

        var onError = function (err) {
            console.log(err);
        };

        $scope.search = function (topic) {
            githubService
                        .getData(topic, $scope.page, $scope.pageSize)
                        .then(onSearchComplete, onError);
        };
    }
})();
