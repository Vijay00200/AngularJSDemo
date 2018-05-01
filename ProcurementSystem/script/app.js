(function () {
    var app = angular.module('myApp', ['ngRoute']);

    app.config(function ($routeProvider) {
        $routeProvider

            .when('/', {
                templateUrl: '../Pages/Home.html',
                controller: 'homeController'
            })

            .when('/myRequest', {
                templateUrl: '../Pages/MyRequest.html',
                controller: 'myRequestController'
            })

            .when('/newRequest', {
                templateUrl: '../Pages/NewRequest.html',
                controller: 'newRequestController'
            })

            .when('/approvals', {
                templateUrl: '../Pages/Approval.html',
                controller: 'approvalController'
            })
            
            .otherwise({redirectTo: '/Pages/Error.html'});
    });

})();


