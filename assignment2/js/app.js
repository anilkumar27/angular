(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var itemAdder = this;

  itemAdder.items = ShoppingListCheckOffService.getBoughtItems();

}


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var showList = this;

  showList.items = ShoppingListCheckOffService.getItemsToBuy();

  showList.bought = function (itemIndex) {
    ShoppingListCheckOffService.removeItem(itemIndex);
  };
}


function ShoppingListCheckOffService() {
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
