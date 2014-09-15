'use strict';

HeaderCtrl.$inject =
    ['$scope', '$location', 'security', 'breadcrumbs', 'httpRequestTracker'];

function HeaderCtrl($scope, $location, security, breadcrumbs, httpRequestTracker) {
    $scope.location = $location;
    $scope.breadcrumbs = breadcrumbs;

    $scope.isAuthenticated = security.isAuthenticated;
    $scope.isAdmin = security.isAdmin;

    $scope.home = function () {
        if (security.isAuthenticated()) {
            $location.path('/dashboard');
        } else {
            $location.path('/projectsinfo');
        }
    };

    $scope.isNavbarActive = function (navBarPath) {
        return navBarPath === breadcrumbs.getFirst().name;
    };

    $scope.hasPendingRequests = function () {
        return httpRequestTracker.hasPendingRequests();
    };
}


module.exports = HeaderCtrl;
