'use strict';

var angular = require('angular');


module.exports = angular.module('security.login', [
  require('./LoginFormController').name,
  require('./toolbar').name
]);