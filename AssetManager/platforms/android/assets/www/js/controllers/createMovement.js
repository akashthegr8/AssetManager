

angular.module('starter.controllers2', [])



.controller('CreateMovementCtrl', function ($scope, $cordovaBarcodeScanner, $ionicPlatform, $assetmanagerservice, $state, $rootScope, $ionicPopup, $ionicSideMenuDelegate, $ionicLoading, $timeout, $http) {


    ////////// SEARCH CONTROLLER BELOW ////////////
    $scope.mySearch = {}; // create empty object for search params
    // $rootScope.userSettings = {}; // store global user settings
    $scope.imag = "";
    /// Core Search Function

    $scope.ctrl = [];
  $scope.createMovement = function(){
      
  /*  $http.get("/assetManagement/createMovement")
            .success(function(data) {
               console.log("Data " + data);
            $ctrl.data = json.signify(data);
            })
            .error(function(data) {
                alert("ERROR");
            });*/
      
      
      ctrl = [/*{ID:'ID',
              ProductType:'Product Type',
              Quantity:'Quantity',
              Cost:'Cost',
              Status:'Status'
             }*/]
      
      $ionicLoading.show({
          template: "Loading data..."
      })
      
      console.log("hey")
      $state.go("app.createMovement")
       $ionicLoading.hide();
    $ionicSideMenuDelegate.isOpen() ? $ionicSideMenuDelegate.toggleLeft() : null; /// close side menu
  }
  
 
  $rootScope.$on("CallParentMethod", function(barcodeData){
           $scope.getCall(barcodeData);
        });

              
        
  $scope.getCall = function(barcodeData){
         $http.get("http://10.207.112.134:8080/assetManagement/assets/manageEquipment/details/" + barcodeData.text).success(function(result){
              var alertPopup = $ionicPopup.alert({
                 title: 'BarcodeData',
                 template: "vendor"
               });
           
              
          }); 
         
     }
     
});