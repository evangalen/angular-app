'use strict';

var angular = require('angular');


module.exports = angular.module('resources.users', [require('mongolab-resource').name])
.factory('Users', ['mongolabResource', function (mongoResource) {

  var userResource = mongoResource('users');
  userResource.prototype.getFullName = function () {
    return this.lastName + " " + this.firstName + " (" + this.email + ")";
  };

  return userResource;
}]);
