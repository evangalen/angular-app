'use strict';

ProjectsEditCtrl.$inject = ['$scope', '$location', 'i18nNotifications', 'users', 'project'];

/** @constructor */
function ProjectsEditCtrl($scope, $location, i18nNotifications, users, project) {

  $scope.project = project;
  $scope.users = users;

  $scope.onSave = function(project) {
    i18nNotifications.pushForNextRoute('crud.project.save.success', 'success', {id : project.$id()});
    $location.path('/admin/projects');
  };

  $scope.onError = function() {
    i18nNotifications.pushForCurrentRoute('crud.project.save.error', 'error');
  };

}


module.exports = ProjectsEditCtrl;
