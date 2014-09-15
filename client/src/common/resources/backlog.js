'use strict';

var angular = require('angular');


module.exports = angular.module('resources.productbacklog', [require('mongolab-resource').name])
.factory('ProductBacklog', ['mongolabResource', function (mongolabResource) {
  var ProductBacklog = mongolabResource('productbacklog');

  ProductBacklog.forProject = function (projectId) {
    return ProductBacklog.query({projectId:projectId});
  };

  return ProductBacklog;
}]);
