'use strict';

var angular = require('angular');


module.exports = angular.module('admin', [
    require('./projects/admin-projects').name, require('./users/admin-users').name
]);
