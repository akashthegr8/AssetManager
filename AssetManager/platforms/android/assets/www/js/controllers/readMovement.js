angular.module('starter.controllers2', [])




.controller('ReadMovementCtrl', function ($scope, $cordovaBarcodeScanner, $ionicPlatform, $assetmanagerservice, $state, $rootScope, $ionicPopup, $ionicSideMenuDelegate, $ionicLoading, $timeout, $http) {


    $scope.ruMovement = function () {

        $ionicLoading.show({
            template: "Loading data..."
        })
        console.log("hey")
        $state.go("app.ruMovement")
        $ionicLoading.hide();
        $ionicSideMenuDelegate.isOpen() ? $ionicSideMenuDelegate.toggleLeft() : null; /// close side menu
    }
});