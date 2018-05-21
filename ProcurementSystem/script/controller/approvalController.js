(function () {
    "use strict";
    angular
        .module("myApp")
        .controller('approvalController', approvalController);

    approvalController.$inject = ["$scope", "$rootScope"];

    function approvalController($scope, $rootScope) {
        //$scope.message = 'approval controller';

        $scope.reject = function (id) {
            var i;
            for (i = 0; i < $rootScope.formData.length; i++) {
                if ($rootScope.formData[i].id == id) {
                    $rootScope.formData[i].status = 'Rejected';
                }
            }

        };

        $scope.approve = function (id) {
            var i;
            for (i = 0; i < $rootScope.formData.length; i++) {
                if ($rootScope.formData[i].id == id) {
                    $rootScope.formData[i].status = 'Approved';
                }
            }
        }
    }


})();