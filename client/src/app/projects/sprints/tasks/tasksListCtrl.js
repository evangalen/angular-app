'use strict';

var angular = require('angular');


TasksListCtrl.$inject = ['$scope', 'crudListMethods', '$route', 'tasks'];

/** @constructor */
function TasksListCtrl($scope, crudListMethods, $route, tasks) {
  $scope.tasks = tasks;

  var projectId = $route.current.params.projectId;
  var sprintId = $route.current.params.sprintId;
  angular.extend($scope, crudListMethods('/projects/' + projectId + '/sprints/' + sprintId + '/tasks'));
}


module.exports = TasksListCtrl;
