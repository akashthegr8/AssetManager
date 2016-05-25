angular.module('starter.controllers', [])




.controller('AllMovementCtrl', function ($scope, $cordovaBarcodeScanner, $ionicPlatform, $assetmanagerservice, $state, $rootScope, $ionicPopup, $ionicSideMenuDelegate, $ionicLoading, $timeout, $http) {


    ////////// SEARCH CONTROLLER BELOW ////////////
    $scope.mySearch = {}; // create empty object for search params
    // $rootScope.userSettings = {}; // store global user settings
    $scope.imag = "";
    /// Core Search Function

    $scope.ctrl = [];
    
    $scope.launchNewMove = function () {

        $ionicLoading.show({
            template: "Loading data..."
        })

        $state.go("app.createMovement")
        $ionicLoading.hide();
        $ionicSideMenuDelegate.isOpen() ? $ionicSideMenuDelegate.toggleLeft() : null; /// close side menu
    }
    
    $scope.allMovement = function(){
    
      $state.go("app.allMovement")
          if($scope.mySelect.selected == 'Any'){              $http.get("http://10.207.112.134:8080/assetManagement/assets/manageMovement")
            .success(function(allMovList) {
              console.log("Any " + JSON.stringify(allMovList));
            $scope.data11 = allMovList;
            })
            .error(function(data) {
                alert("ERROR");
            });
          }else{              $http.get("http://10.207.112.134:8080/assetManagement/assets/manageMovement/byStatus/"+$scope.mySelect.selected)
            .success(function(allMovList) {
              console.log("not any " + $scope.mySelect.selected);
              console.log("not any " + allMovList);
            $scope.data11 = allMovList;
            })
            .error(function(data) {
                alert("ERROR");
            });
          } 
            
  }
 
});