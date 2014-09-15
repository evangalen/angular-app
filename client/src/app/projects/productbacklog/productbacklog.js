'use strict';

var angular = require('angular');


module.exports =
  angular.module('productbacklog', [
    require('../../../common/resources/backlog').name,
    require('../../../common/services/crud').name
  ])

  .config(['crudRouteProvider', function(crudRouteProvider){
  
  
    // projectId is a helper method wrapped with DI annotation that will be used in
    // route resolves in this file.
    var projectId = ['$route', function($route) {
      return $route.current.params.projectId;
    }];
  
  
    // Create the CRUD routes for editing the product backlog
    crudRouteProvider.routesFor('ProductBacklog', 'projects', 'projects/:projectId')
      // How to handle the "list product backlog items" route
      .whenList({
        projectId: projectId,
        backlog : ['$route', 'ProductBacklog', function($route, ProductBacklog){
          return ProductBacklog.forProject($route.current.params.projectId);
        }]
      })
      
      // How to handle the "create a new product backlog item" route
      .whenNew({
        projectId: projectId,
        backlogItem : ['$route', 'ProductBacklog', function($route, ProductBacklog){
          return new ProductBacklog({projectId:$route.current.params.projectId});
        }]
      })
    
      // How to handle the "edit a product backlog item" route
      .whenEdit({
        projectId: projectId,
        backlogItem : ['$route', 'ProductBacklog', function($route, ProductBacklog){
          return ProductBacklog.getById($route.current.params.itemId);
        }]
      });
  }])


  // The controller for listing product backlog items
  .controller('ProductBacklogListCtrl', require('./product-backlog-list-ctrl'))

  
  // The controller for editing a product backlog item
  .controller('ProductBacklogEditCtrl', require('./product-backlog-edit-ctrl'));
