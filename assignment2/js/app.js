(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListService', ShoppingListService);

AlreadyBoughtController.$inject = ['ShoppingListService'];
function AlreadyBoughtController(ShoppingListService) {
  var itemAdder = this;

  itemAdder.items = ShoppingListService.getBoughtItems();

}


ToBuyController.$inject = ['ShoppingListService'];
function ToBuyController(ShoppingListService) {
  var showList = this;

  showList.items = ShoppingListService.getItemsToBuy();

  showList.bought = function (itemIndex) {
    ShoppingListService.removeItem(itemIndex);
  };
}


function ShoppingListService() {
  var service = this;

  // List of shopping items
  var itemsBought = [];
  var itemsToBuy = [{name: "apple",quantity:"10"},{name: "mango",quantity:"7"},{name: "grapes",quantity:"10"},
  {name: "banana",quantity:"1"},{name: "fruits",quantity:"15"}];


  service.removeItem = function (itemIdex) {
    itemsBought.push(itemsToBuy[itemIdex]);
    itemsToBuy.splice(itemIdex, 1);
  };

  service.getItemsToBuy = function () {
    return itemsToBuy;
  };

  service.getBoughtItems = function () {
    return itemsBought;
  };
}

})();
