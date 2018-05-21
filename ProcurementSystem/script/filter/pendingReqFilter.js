(function () {

    angular
        .module("myApp")
        .filter('pendingReqFilter', pendingReqFilter);

    function pendingReqFilter() {

        return function (x) {
            var i = 0,
                filteredItems = [];
            for (i = 0; i < x.length; i++) {
                if (x[i].status === 'Pending') {
                    filteredItems.push(x[i]);
                }
            };
            return filteredItems;
        };
    }
})()