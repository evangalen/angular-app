'use strict';

DashboardCtrl.$inject = ['$scope', '$location', 'projects', 'tasks'];

/** @constructor */
function DashboardCtrl($scope, $location, projects, tasks) {
  $scope.projects = projects;
  $scope.tasks = tasks;

  $scope.manageBacklog = function (projectId) {
    $location.path('/projects/' + projectId + '/productbacklog');
  };

  $scope.manageSprints = function (projectId) {
    $location.path('/projects/' + projectId + '/sprints');
  };
}

module.exports = DashboardCtrl;
