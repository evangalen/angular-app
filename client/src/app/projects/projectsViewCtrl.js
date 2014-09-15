'use strict';

ProjectsViewCtrl.$inject = ['$scope', '$location', 'projects', 'security'];

/** @constructor */
function ProjectsViewCtrl($scope, $location, projects, security) {
    $scope.projects = projects;

    $scope.viewProject = function (project) {
        $location.path('/projects/'+project.$id());
    };

    $scope.manageBacklog = function (project) {
        $location.path('/projects/'+project.$id()+'/productbacklog');
    };

    $scope.manageSprints = function (project) {
        $location.path('/projects/'+project.$id()+'/sprints');
    };

    $scope.getMyRoles = function(project) {
        if ( security.currentUser ) {
            return project.getRoles(security.currentUser.id);
        }
    };
}


module.exports = ProjectsViewCtrl;