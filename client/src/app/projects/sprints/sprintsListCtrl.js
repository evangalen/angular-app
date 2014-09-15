'use strict';

var angular = require('angular');


SprintsListCtrl.$inject = ['$scope', '$location', 'crudListMethods', 'projectId', 'sprints'];

/** @constructor */
function SprintsListCtrl($scope, $location, crudListMethods, projectId, sprints){
  $scope.sprints = sprints;

  angular.extend($scope, crudListMethods('/projects/'+projectId+'/sprints'));

  $scope.tasks = function (sprint) {
    $location.path('/projects/'+projectId+'/sprints/'+sprint.$id()+'/tasks');
  };
}


module.exports = SprintsListCtrl;
