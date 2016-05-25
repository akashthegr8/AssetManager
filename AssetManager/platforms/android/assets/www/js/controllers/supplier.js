angular.module('starter.controllers2', [])

.controller('SupplierCtrl', function ($scope, $cordovaBarcodeScanner, $ionicPlatform, $assetmanagerservice, $state, $rootScope, $ionicPopup, $ionicSideMenuDelegate, $ionicLoading, $timeout, $http) {


    ////////// SEARCH CONTROLLER BELOW ////////////
    $scope.mySearch = {}; // create empty object for search params
    // $rootScope.userSettings = {}; // store global user settings
    $scope.imag = "";
    /// Core Search Function

 
    $scope.supplierList = [{
        'id': 10001,
        'name': 'Akash'
    }, {
        'id': 10002,
        'name': 'Abhishek'
    }];
   
    
  $scope.addSupplier = function(){
    $ionicLoading.show({
          template: "Loading data..."
      })
      console.log("hey")
      $state.go("app.addSupplier")
       $ionicLoading.hide();
    $ionicSideMenuDelegate.isOpen() ? $ionicSideMenuDelegate.toggleLeft() : null; /// close side menu
  }
  
     
});