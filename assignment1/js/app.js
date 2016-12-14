(function () {
'use strict';

  angular.module('LunchChecker', [])
  .controller('LunchCheckerController', function($scope){

    $scope.CheckFoodlimit = function () {
      
      if(!angular.isUndefined($scope.lunchmenu) && $scope.lunchmenu != ""){

        $scope.customStyle = {color: 'green'};
        if($scope.lunchmenu.split(',').length > 3){
          $scope.message = "Too much!";
        }else{
          $scope.message = "Enjoy!";
        }
      }else{
        $scope.customStyle = {color: 'red'};
        $scope.message = "Please enter data first";
      }
            
    };

  }); 

})();
