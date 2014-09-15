'use strict';

var angular = require('angular');


module.exports = angular.module('admin-users-edit',[
  require('../../../common/services/crud').name,
  require('../../../common/services/i18nNotifications').name,
  require('./uniqueEmail').name,
  require('./validateEquals').name
])

.controller('UsersEditCtrl', require('./usersEditCtrl'));