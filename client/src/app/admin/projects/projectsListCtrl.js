'use strict';

var angular = require('angular');


ProjectsListCtrl.$inject = ['$scope', 'crudListMethods', 'projects'];

/** @constuctor */
function ProjectsListCtrl($scope, crudListMethods, projects) {
  $scope.projects = projects;

  angular.extend($scope, crudListMethods('/admin/projects'));
}


module.exports = ProjectsListCtrl;
