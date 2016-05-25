angular.module('starter.controllers2', [])




.controller('listDsCtrl', function ($scope, $cordovaBarcodeScanner, $ionicPlatform, $assetmanagerservice, $state, $rootScope, $ionicPopup, $ionicSideMenuDelegate, $ionicLoading, $timeout, $http) {

    $scope.listDonors = function () {
       
$http.get("http://10.207.112.134:8080/assetManagement/assets/manageDonor")
            .success(function (list) {
                console.log("Data! " + list);
                $scope.donorList = JSON.parse(JSON.stringify(list));
                console.log(JSON.stringify($scope.supplierList));
            })
            .error(function (data) {
                alert("ERROR");
            });
        console.log("hey")
        $state.go("app.donorList")
        $ionicLoading.hide();
        $ionicSideMenuDelegate.isOpen() ? $ionicSideMenuDelegate.toggleLeft() : null; /// close side menu

    }

    $scope.listSupplier = function () {
      

        $ionicLoading.show({
            template: "Loading data..."
        })
        console.log("hey")
        $state.go("app.supplier")
        $ionicLoading.hide();
        $ionicSideMenuDelegate.isOpen() ? $ionicSideMenuDelegate.toggleLeft() : null; /// close side menu
    }
 
});