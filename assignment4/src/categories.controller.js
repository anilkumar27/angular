(function() {
    'use strict';

    angular.module('data')
        .controller('CategoryController', CategoryController);

    CategoryController.$inject = ['categories'];

    function CategoryController(categories) {

        var categoryList = this;
        categoryList.items = categories;
    }
})();