'use strict';

var angular = require('angular');


module.exports = angular.module('projects', [
  require('../../common/resources/projects').name,
  require('./productbacklog/productbacklog').name,
  require('./sprints/sprints').name,
  require('../../common/security/authorization').name
])

.config(['$routeProvider', 'securityAuthorizationProvider', function ($routeProvider, securityAuthorizationProvider) {
  $routeProvider.when('/projects', {
    templateUrl:'projects/projects-list.tpl.html',
    controller:'ProjectsViewCtrl',
    resolve:{
      projects:['Projects', function (Projects) {
        //TODO: fetch only for the current user
        return Projects.all();
      }],
      authenticatedUser: securityAuthorizationProvider.requireAuthenticatedUser
    }
  });
}])

.controller('ProjectsViewCtrl', require('./projectsViewCtrl'));
