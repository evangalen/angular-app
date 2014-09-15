'use strict';

ProductBacklogEditCtrl.$inject = ['$scope', '$location', 'projectId', 'backlogItem'];

/** @constructor */
function ProductBacklogEditCtrl($scope, $location, projectId, backlogItem) {

  $scope.backlogItem = backlogItem;

  $scope.onSave = function () {
    //TODO: missing message
    $location.path('/projects/'+projectId+'/productbacklog');
  };

  $scope.onError = function () {
    //TODO: missing message
    $scope.updateError = true;
  };

}


module.exports = ProductBacklogEditCtrl;
