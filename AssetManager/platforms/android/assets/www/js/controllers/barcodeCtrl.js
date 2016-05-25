angular.module('starter.controllers', [])


.controller('BarcodeCtrl', ['$scope', '$rootScope', '$cordovaBarcodeScanner','$ionicPlatform',function($scope,$rootScope, $cordovaBarcodeScanner,$ionicPlatform) {

  $scope.scan = function(){
      
   
      
      
    $ionicPlatform.ready(function() {
      $cordovaBarcodeScanner.scan().then(function(barcodeData) {
          
          
           $rootScope.$emit("CallParentMethod", barcodeData);
          
           
           
           
      });
    
  });
  }
}]);


