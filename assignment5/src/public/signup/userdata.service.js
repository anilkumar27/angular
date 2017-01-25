(function () {
  'use strict';

  angular.module('public')
  .service('UserDataService', UserDataService);

  function UserDataService() {
    var userService = this;

    userService.userData = {
      firstName: "",
      lastName: "",
      emailAddress: "",
      phoneNumber: "",
      favoriteDish: ""
    };

    userService.saveUserData = function (firstName, lastName, emailAddress, phoneNumber, favoriteDish) {
      userService.userData.firstName = firstName;
      userService.userData.lastName = lastName;
      userService.userData.emailAddress = emailAddress;
      userService.userData.phoneNumber = phoneNumber;
      userService.userData.favoriteDish = favoriteDish;
    }
  }
})();
