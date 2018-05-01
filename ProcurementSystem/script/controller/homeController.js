(function () {
    "use strict";

    angular
        .module("myApp")
        .controller('homeController', homeController);

    homeController.$inject = ["$scope", "$rootScope"];

    function homeController($scope, $rootScope) {
        $scope.message = 'Home Controller';

        init();

        function init() {

            initEvents();
        }

        function initEvents() {
            $('.card')
                // if a direction if specified it will be obeyed
                .transition('horizontal flip in')
                ;
        }

    }


})();

