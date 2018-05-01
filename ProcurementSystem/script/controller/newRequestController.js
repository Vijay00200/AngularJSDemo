(function () {
    "use strict";

    angular
        .module("myApp")
        .controller('newRequestController', newRequestController);

    newRequestController.$inject = ["$scope", "$rootScope"];

    function newRequestController($scope, $rootScope) {
        $scope.message = 'new request controller';
    }


})();