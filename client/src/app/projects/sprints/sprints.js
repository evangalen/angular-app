'use strict';

var angular = require('angular');


module.exports = angular.module('sprints', [
  require('../../../common/resources/sprints').name,
  require('../../../common/services/crud').name,
  require('./tasks/tasks').name
])

.config(['crudRouteProvider', function(crudRouteProvider){

  var projectId = ['$route', function($route) {
    return $route.current.params.projectId;
  }];

  var productBacklog = ['$route', 'ProductBacklog', function ($route, ProductBacklog) {
    return ProductBacklog.forProject($route.current.params.projectId);
  }];

  crudRouteProvider.routesFor('Sprints', 'projects', 'projects/:projectId')
  .whenList({
    projectId: projectId,
    sprints: ['$route', 'Sprints', function($route, Sprints){
      return Sprints.forProject($route.current.params.projectId);
    }]
  })

  .whenNew({
    projectId: projectId,
    sprint: ['$route', 'Sprints', function($route, Sprints){
      return new Sprints({projectId:$route.current.params.projectId});
    }],
    productBacklog : productBacklog
  })

  .whenEdit({
    projectId: projectId,
    sprint: ['$route', 'Sprints', function($route, Sprints){
      return Sprints.getById($route.current.params.itemId);
    }],
    productBacklog : productBacklog
  });

}])

.controller('SprintsListCtrl', require('./sprintsListCtrl'))

.controller('SprintsEditCtrl', require('./sprintsEditCtrl'));