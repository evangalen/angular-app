'use strict';

var angular = require('angular');


module.exports = angular.module('resources.sprints', [require('mongolab-resource').name])
.factory('Sprints', ['mongolabResource', function (mongolabResource) {

  var Sprints = mongolabResource('sprints');
  Sprints.forProject = function (projectId) {
    return Sprints.query({projectId:projectId});
  };
  return Sprints;
}]);