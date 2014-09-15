'use strict';

ProjectsInfoListCtrl.$inject = ['$scope', 'projects'];

/** @constructor */
function ProjectsInfoListCtrl($scope, projects){
  $scope.projects = projects;
}


module.exports = ProjectsInfoListCtrl;