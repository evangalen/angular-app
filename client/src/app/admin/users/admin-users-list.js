'use strict';

var angular = require('angular');


module.exports = angular.module('admin-users-list', [
  require('../../../common/services/crud').name,
  require('../../../common/services/i18nNotifications').name
])

.controller('UsersListCtrl', require('./usersListCtrl'));
