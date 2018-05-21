(function () {
    var app = angular.module('myApp', ['ngRoute']);

    app.run(function ($rootScope) {
        $rootScope.formData = [{
            id: 1,
            status: 'Pending',
            approver: "Abhirup",
            cost: "50000",
            department: "Information Technology",
            itemDescription: "Additional Monitor",
            purpose: "Developement purpose",
            requesterName: "vijay kumar"
        }];

        $rootScope.departments = [{
            id: 1,
            desc: 'Information Technology'
        }, {
            id: 2,
            desc: 'Blast Furnence'
        }, {
            id: 3,
            desc: 'Security'
        }];

        $rootScope.approvers = [{
            id: 1,
            desc: 'Vijay Kumar'
        }, {
            id: 2,
            desc: 'Abhirup'
        }]
    });

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

            .otherwise({
                redirectTo: '/Pages/Error.html'
            });
    });

})();