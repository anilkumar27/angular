(function () {
  'use strict';

  angular.module('public')
  .controller('SignupController', SignupController);

  SignupController.$inject = ['ShortNameFinderService', 'UserDataService'];
  function SignupController(shortNameFinderService, userDataService) {
    var ctrl = this;

    ctrl.shortNameError = "";
    ctrl.saved = false;

    ctrl.submit = function () {
      var promise = shortNameFinderService.checkShortName(ctrl.menuNumber);
      promise.then(function (response) {
        ctrl.shortNameError = "";
        ctrl.saved = true;
        ctrl.message = "Your data was successfully saved!";
        userDataService.saveUserData(ctrl.firstName, ctrl.lastName, ctrl.emailAddress, ctrl.phoneNumber, response.data);
      }, function (response) {
        ctrl.shortNameError = "Dish number is not valid";
      });
    };
  }

})();
