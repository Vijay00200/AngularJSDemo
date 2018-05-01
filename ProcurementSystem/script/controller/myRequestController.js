(function () {
    "use strict";

    angular
        .module("myApp")
        .controller('myRequestController', myRequestController);

    myRequestController.$inject = ["$scope", "$rootScope"];

    function myRequestController($scope, $rootScope) {
        $scope.message = 'My request Controller';
    }


})();