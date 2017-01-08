(function () {
    'use strict';

    angular.module('data')
        .component('item', {
            url: 'html/items-details',
            bindings: {
                items: '<'
            }
        })
})();