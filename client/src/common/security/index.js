'use strict';

var angular = require('angular');


// Based loosely around work by Witold Szczerba - https://github.com/witoldsz/angular-http-auth
module.exports = angular.module('security', [
  require('./security').name,
  require('./interceptor').name,
  require('./login/login').name,
  require('./authorization').name
]);
