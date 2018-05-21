(function () {
    "use strict";
    angular
        .module("myApp")
        .controller('newRequestController', newRequestController);

    newRequestController.$inject = ["$scope", "$rootScope"];

    function newRequestController($scope, $rootScope) {

        $scope.request = {};
        $scope.submitRequest = function () {
            var _id = $rootScope.formData.length + 1;
            $rootScope.formData.push(angular.extend($scope.request, {
                status: 'Pending',
                id: _id
            }));
            // $rootScope.$apply();
            console.log($rootScope.formData);
            //reset the scope;
            alert('Your request has been submit successfully');
            $scope.request = {};
        }

    }


})();