angular.module('starter.controllers', [])

.controller('AboutCtrl', function ($scope, $cordovaBarcodeScanner, $ionicPlatform, $assetmanagerservice, $state, $rootScope, $ionicPopup, $ionicSideMenuDelegate, $ionicLoading, $timeout, $http) {

    
     $scope.About = function(){
    
    $ionicLoading.show({
          template: "Loading data..."
      })
      console.log("hey")
      $state.go("app.About")
       $ionicLoading.hide();
    $ionicSideMenuDelegate.isOpen() ? $ionicSideMenuDelegate.toggleLeft() : null; /// close side menu
  }
 
});