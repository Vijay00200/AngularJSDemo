(function () {
    "use strict";
    angular
        .module("myApp")
        .controller('approvalController', approvalController);

    approvalController.$inject = ["$scope", "$rootScope"];

    function approvalController($scope, $rootScope) {
        $scope.message = 'approval controller';
    }


})();