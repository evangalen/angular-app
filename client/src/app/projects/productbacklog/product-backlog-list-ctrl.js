'use strict';

var angular = require('angular');


ProductBacklogListCtrl.$inject = ['$scope', 'crudListMethods', 'projectId', 'backlog'];

/** @constructor */
function ProductBacklogListCtrl($scope, crudListMethods, projectId, backlog) {

  $scope.backlog = backlog;

  angular.extend($scope, crudListMethods('/projects/'+projectId+'/productbacklog'));

}


module.exports = ProductBacklogListCtrl;
