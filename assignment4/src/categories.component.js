(function () {
    'use strict';

    angular.module('data')
        .component('categories', {
            templateUrl: 'html/cat_items.html',
            bindings: {
                categories: '<'
            }
        });
})();