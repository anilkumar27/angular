(function () {
  'use strict';

  angular.module('public')
  .service('ShortNameFinderService', ShortNameFinderService)
  .constant('MenuItemsPath', 'https://serverdemosetup.herokuapp.com/menu_items/');

  ShortNameFinderService.$inject = ['$http', 'MenuItemsPath'];
  function ShortNameFinderService($httpService, menuPath) {
    var finder = this;

    finder.checkShortName = function (shortName) {
      var promise = $httpService({
        method: 'GET',
        url: menuPath + shortName + '.json'
      });

      return promise;
    }

  }


})();
