'use strict';

var angular = require('angular');


angular.module('admin', [require('./projects/admin-projects').name, require('./users/admin-users').name]);
