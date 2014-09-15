'use strict';

var angular = require('angular');


module.exports = angular.module('app', [
  require('angular-route').name,
  require('./projectsinfo/projectsinfo').name,
  require('./dashboard/dashboard').name,
  require('./projects/projects').name,
  require('./admin/admin').name,
  require('../common/services/breadcrumbs').name,
  require('../common/services/i18nNotifications').name,
  require('../common/services/httpRequestTracker').name,
  require('../common/security/security').name,
  require('../common/directives/crud/crud').name,
  'templates.app',
  'templates.common'
])

.constant('MONGOLAB_CONFIG', {
  baseUrl: '/databases/',
  dbName: 'ascrum'
})

//TODO: move those messages to a separate module
.constant('I18N.MESSAGES', require('./i18n-messages'))

.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider.otherwise({redirectTo:'/projectsinfo'});
}])

.run(['security', function(security) {
  // Get the current user when the application starts
  // (in case they are still logged in from a previous session)
  security.requestCurrentUser();
}])

.controller('AppCtrl', require('./app-ctrl'))

.controller('HeaderCtrl', require('./header-ctrl'));
