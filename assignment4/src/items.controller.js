(function () {
    'use strict';

    angular.module('data')
        .controller('ItemsController', ItemsController);

    ItemsController.$inject = ['items'];

    function ItemsController(items) {

        var itemList = this;
        //var Items = [];

        itemList.details = items.map(function (itemObject) {
            return itemObject.short_name +" , "+itemObject.name +" , "+itemObject.description ;
        });

        
    }
})();