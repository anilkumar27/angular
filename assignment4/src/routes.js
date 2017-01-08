(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'html/home.html'
  })

  .state('categories',{
            url:'/categories',
            templateUrl:'html/categories.html',
            controller:'CategoryController as categoryList',
            resolve: {
                categories:['MenuDataService',
                function(MenuDataService){
                    return MenuDataService.getAllCategories();
                }]
            }
        })
        .state('items',{
            url:'/items/{categoryId}',
            templateUrl:'html/items_details.html',
            controller:'ItemsController as itemList',
            resolve: {
                items:['$stateParams','MenuDataService',
                function($stateParams,MenuDataService){
                    return MenuDataService.getItemsForCategory($stateParams.categoryId);
                }],
            }
        });

}

})();
