angular.module('starter.controllers', [])

.controller('equipCtrl', function ($scope, $ionicPlatform, $assetmanagerservice, $state, $rootScope, $ionicSideMenuDelegate, $ionicLoading, $timeout, $http) {


    $scope.equipment = {
        /*     'vendor':"",
             'donor':"",
             'cost':"",
             'type': "",
             'acquisition':""
        */
    }
    $scope.createEquip = function () {

        $scope.qr = "";
        payload = JSON.stringify($scope.equipment);
        console.log(payload);

         $http.post('http://10.207.112.134:8080/assetManagement/assets/manageEquipment/addEquipment', payload).then(function(result){
             
             console.log(result)
            $rootScope.qr= result.data; 
             
             console.log($rootScope.qr);
             
             $state.go("app.showQR")
              });
         
    }
     
 
   $scope.addEquip = function(){
      
    $ionicLoading.show({
          template: "Loading data..."
      })
      console.log("hey")
      $state.go("app.addEquip")
       $ionicLoading.hide();
    $ionicSideMenuDelegate.isOpen() ? $ionicSideMenuDelegate.toggleLeft() : null; /// close side menu
  }

     
});

 