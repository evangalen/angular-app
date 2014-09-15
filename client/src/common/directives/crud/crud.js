'use strict';

var angular = require('angular');


module.exports = angular.module('directives.crud', [require('./crudButtons').name, require('./edit').name]);
