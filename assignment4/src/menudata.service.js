(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath1', "https://davids-restaurant.herokuapp.com/categories.json")
.constant('ApiBasePath2', "https://davids-restaurant.herokuapp.com/menu_items.json?category=");


MenuDataService.$inject = ['$http', 'ApiBasePath1', 'ApiBasePath2']
function MenuDataService($http, ApiBasePath1, ApiBasePath2) {
	var service = this;

	service.getAllCategories = function () {
      // store the categories returned in this object
      var categories = [];

      return $http({
        method: 'GET',
        url: ApiBasePath1
      })
        .then(function success(response) {
          angular.forEach(response.data, function (category) {
            this.push(category);
          }, categories);

          return categories;
        });
    };

	service.getItemsForCategory = function (shortName) {

      var Items = [];

      return $http({
        method: 'GET',
        url: (ApiBasePath2+ shortName)
      })
      //send only menuitems and not categorty items object
        .then(function success(response) {
          angular.forEach(response.data.menu_items, function (item) {
            this.push(item);
          }, Items);
          
          return Items;
        });
    };
}

})();