'use strict';

TasksEditCtrl.$inject = ['$scope', '$location', 'Tasks', 'sprintBacklogItems', 'teamMembers', 'task'];

/** @constructor */
function TasksEditCtrl($scope, $location, Tasks, sprintBacklogItems, teamMembers, task) {
    $scope.task = task;
    $scope.statesEnum = Tasks.statesEnum;
    $scope.sprintBacklogItems = sprintBacklogItems;
    $scope.teamMembers = teamMembers;

    $scope.onSave = function () {
        $location.path('/admin/users');
    };
    $scope.onError = function() {
        $scope.updateError = true;
    };
}


module.exports = TasksEditCtrl;
