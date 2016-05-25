angular.module('starter.controllers2', [])




.controller('MovementDetailsCtrl', function ($scope, $cordovaBarcodeScanner, $ionicPlatform, $assetmanagerservice, $state, $rootScope, $ionicPopup, $ionicSideMenuDelegate, $ionicLoading, $timeout, $http) {

  
    $scope.movementDetails = function (id) {
        $http.get("http://10.207.112.134:8080/assetManagement/assets/manageDonor")
            .success(function (movDetail) {
                console.log("Data! " + movDetail);
                $scope.movement = JSON.parse(JSON.stringify(movDetail));
                console.log(JSON.stringify($scope.movement));
            })
            .error(function (data) {
                alert("ERROR");
            });

    
    
    $ionicLoading.show({
          template: "Loading data..."
      })
      console.log("hey")
      $state.go("app.checkAssets")
       $ionicLoading.hide();
    $ionicSideMenuDelegate.isOpen() ? $ionicSideMenuDelegate.toggleLeft() : null; /// close side menu
        
 
   
  }
 
});