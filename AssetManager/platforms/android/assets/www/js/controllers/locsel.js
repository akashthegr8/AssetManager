angular.module('starter.controllers2', [])

.controller('LocselCtrl', function ($scope, $ionicPlatform, $assetmanagerservice, $state, $rootScope, $ionicSideMenuDelegate, $ionicLoading, $timeout, $http) {

 $scope.myCity = {
      'selected': 'Bangalore'
  };
  
     $scope.BranchSel = function(){
    
    $ionicLoading.show({
          template: "Loading data..."
      })
      console.log("hey")
      $state.go("app.BranchSel")
       $ionicLoading.hide();
    $ionicSideMenuDelegate.isOpen() ? $ionicSideMenuDelegate.toggleLeft() : null; /// close side menu
  }
  
    
  
    $scope.launchcityassets= function(){
      
      $state.go("app.CityAssets")
  }
    
  $scope.locSelected= function(city){
      $scope.myCity={
          'selected': city
      }
      console.log("mycity "+  $scope.myCity.selected)
      $state.go("app.BranchSel")
  }
  
    $scope.launchcityassets= function(){
      
      $state.go("app.CityAssets")
  }
    
  

});