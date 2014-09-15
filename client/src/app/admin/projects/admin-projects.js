'use strict';

var angular = require('angular');


module.exports = angular.module('admin-projects', [
  require('../../../common/resources/projects').name,
  require('../../../common/resources/users').name,
  require('../../../common/services/crud').name,
  require('../../../common/security/authorization').name
])

.config(['crudRouteProvider', 'securityAuthorizationProvider', function (crudRouteProvider, securityAuthorizationProvider) {

  var getAllUsers = ['Projects', 'Users', function(Projects, Users){
    return Users.all();
  }];

  crudRouteProvider.routesFor('Projects', 'admin')
    .whenList({
      projects: ['Projects', function(Projects) { return Projects.all(); }],
      adminUser: securityAuthorizationProvider.requireAdminUser
    })
    .whenNew({
      project: ['Projects', function(Projects) { return new Projects(); }],
      users: getAllUsers,
      adminUser: securityAuthorizationProvider.requireAdminUser
    })
    .whenEdit({
      project: ['Projects', 'Users', '$route', function(Projects, Users, $route) { return Projects.getById($route.current.params.itemId); }],
      users: getAllUsers,
      adminUser: securityAuthorizationProvider.requireAdminUser
    });
}])

.controller('ProjectsListCtrl', require('./projectsListCtrl'))

.controller('ProjectsEditCtrl', require('./projectsEditCtrl'))

.controller('TeamMembersController', require('./teamMembersController'));
