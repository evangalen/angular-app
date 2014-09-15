'use strict';

AppCtrl.$inject = ['$scope', 'i18nNotifications'];

/** @constructor */
function AppCtrl($scope, i18nNotifications) {

    $scope.notifications = i18nNotifications;

    $scope.removeNotification = function (notification) {
        i18nNotifications.remove(notification);
    };

    $scope.$on('$routeChangeError', function(event, current, previous, rejection){
        i18nNotifications.pushForCurrentRoute('errors.route.changeError', 'error', {}, {rejection: rejection});
    });
}


module.exports = AppCtrl;
