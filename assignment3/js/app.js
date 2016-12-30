(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', foundItemsDirective);


function foundItemsDirective() {
  var ddo = {
    templateUrl: 'shoppingList.html',
    scope: {
      items: '<',
      myTitle: '@title',
      badRemove: '=',
      onRemove: '&'
    },
    controller: ShoppingListDirectiveController,
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;
}

function ShoppingListDirectiveController() {
  var list = this;

  list.cookiesInList = function () {
    for (var i = 0; i < list.items.length; i++) {
      var name = list.items[i].name;
      if (name.toLowerCase().indexOf("cookie") !== -1) {
        return true;
      }
    }

    return false;
  };
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var list = this;
  var searchText ;
  //var Items=[];

  list.title = "Matched Items";
  
  list.getMatchedItems = function (shortName) {
    var promise = MenuSearchService.getMatchedMenuItems(shortName);

    promise.then(function (response) {
      
      list.Items= response;
      console.log(list.Items);
    })
    .catch(function (error) {
      console.log(error);
    })
  };

  list.removeItem = function (itemIndex) {
    //console.log("'this' is: ", this);
    //Items.removeItem(itemIndex);

    list.Items.splice(itemIndex, 1);
  };
}


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function(searchTerm){
    //console.log(searchTerm)
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }).then(function (result) {
        // process result and only keep items that match
        var foundItems = [] ;
        // return processed items

        angular.forEach(result.data, function(value, key){                    
            angular.forEach(value, function(v, key){
             if(v.description.indexOf(searchTerm) !== -1){
                foundItems.push(v);
                //console.log(v.description)
             }              
            });
         });
        
        return foundItems;
    });
  }
}

})();
