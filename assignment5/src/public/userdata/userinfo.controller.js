(function () {
  'use strict';

  angular.module('public')
  .controller('UserInfoController', UserInfoController);

  UserInfoController.$inject = ['UserDataService'];
  function UserInfoController(userDataService) {
    var ctrl = this;

    ctrl.userInfo = userDataService.userData;
  }
})();
