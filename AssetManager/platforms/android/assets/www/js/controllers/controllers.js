angular.module('starter.controllers', ['ionic', 'ngCordova'])

.controller('AboutCtrl', function ($scope, $ionicPlatform, $assetmanagerservice, $state, $rootScope, $ionicSideMenuDelegate, $ionicLoading, $timeout, $http) {

    
     $scope.About = function(){
    
    $ionicLoading.show({
          template: "Loading data..."
      })
      console.log("hey")
      $state.go("app.About")
       $ionicLoading.hide();
    $ionicSideMenuDelegate.isOpen() ? $ionicSideMenuDelegate.toggleLeft() : null; /// close side menu
  }
 
})




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
 
})





.controller('CheckAssetsCtrl', function ($scope, $cordovaBarcodeScanner, $ionicPlatform, $assetmanagerservice, $state, $rootScope, $ionicPopup, $ionicSideMenuDelegate, $ionicLoading, $timeout, $http) {


    ////////// SEARCH CONTROLLER BELOW ////////////
    $scope.mySearch = {}; // create empty object for search params
    // $rootScope.userSettings = {}; // store global user settings
    $scope.imag = "";
    /// Core Search Function

    $scope.ctrl = [];

  

    $scope.checkAssets = function () {


            $http.get("http://10.207.112.134:8080/assetManagement/testService")
                .success(function (data) {
                    console.log("Data " + data);
                    $scope.data11 = data;
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
    
    $scope.openCity = function (evt, selectedTab) {


        // Declare all variables
        var i, tabcontent, tablinks;

        // Get all elements with class="tabcontent" and hide them
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tabcontent.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }



        if (selectedTab == "see_report") {
            document.getElementById("see_report").style.display = "block";
            google.charts.load('current', {
                'packages': ['corechart']
            });
            google.charts.setOnLoadCallback(
                function () {

                    var a = 12;
                    var b = 28;
                    var c = 43;
                    var d = 25;
                    var e = 91;

                    var data = google.visualization.arrayToDataTable([
          ['Center', 'Total Items'],
          ['Bangalore', a],
          ['Delhi', b],
          ['Chennai', c],
          ['Kochi', d],
          ['Mysore', e]
        ]);

                    var options = {
                        title: 'Asset Details',
                        is3D: true
                    };

                    var chart = new google.visualization.PieChart(document.getElementById('see_report'));
                    chart.draw(data, options);

                    /*// orgChart is my global orgchart chart variable.
            google.visualization.events.addListener(chart, 'select', selectHandler);
            // Notice that e is not used or needed.
            function selectHandler(e) {
                alert('The user selected' + chart.getSelection().length + ' items.');
      }*/
                }
            );
        } else {
            document.getElementById("see_report").style.display = "none";
        }

        // Show the current tab, and add an "active" class to the link that opened the tab
        document.getElementById(selectedTab).style.display = "block";
        //  evt.currentTarget.className += " active";


    }

})






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
     
})





.controller('DonorCtrl', function ($scope, $cordovaBarcodeScanner, $ionicPlatform, $assetmanagerservice, $state, $rootScope, $ionicPopup, $ionicSideMenuDelegate, $ionicLoading, $timeout, $http) {


    ////////// SEARCH CONTROLLER BELOW ////////////
    $scope.mySearch = {}; // create empty object for search params
    // $rootScope.userSettings = {}; // store global user settings
    $scope.imag = "";
    /// Core Search Function
   
 $scope.addDonor = function(){
    $ionicLoading.show({
          template: "Loading data..."
      })
      console.log("hey")
      $state.go("app.addDonor")
       $ionicLoading.hide();
    $ionicSideMenuDelegate.isOpen() ? $ionicSideMenuDelegate.toggleLeft() : null; /// close side menu
     
     
  }    
})








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

     
})









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
 
})








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
    
  

})





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
 
})








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
})





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
  
     
})





.controller('AppCtrl', function ($scope, $cordovaBarcodeScanner, $ionicPlatform, $assetmanagerservice, $state, $rootScope, $ionicPopup, $ionicSideMenuDelegate, $ionicLoading, $timeout, $http) {


    ////////// SEARCH CONTROLLER BELOW ////////////
    $scope.mySearch = {}; // create empty object for search params
    // $rootScope.userSettings = {}; // store global user settings
    $scope.imag = "";
    /// Core Search Function

    $scope.ctrl = [];

  
    
    
    
    
  $scope.addData = function(){
      var dataValue = {
          ID: $scope.ID,
          ProductType:$scope.ProductType,
          Quantity:$scope.Quantity,
          Cost:$scope.Cost,
          Status:$scope.Status
      };
          
      $scope.ctrl.push(dataValue);
          
          
      }

    
    
    $scope.movFilterSelVal = function (mySelect) {
        console.log("temp" + mySelect);
    }


    $scope.mySelect = {
        'selected': 'Any'
    }

    $scope.CityAssets = function () {

        $ionicLoading.show({
            template: "Loading data..."
        })
        console.log("hey")
        $state.go("app.allMovement")
        $ionicLoading.hide();
        $ionicSideMenuDelegate.isOpen() ? $ionicSideMenuDelegate.toggleLeft() : null; /// close side menu
    }
 
})



.controller('BarcodeCtrl', ['$scope', '$rootScope', '$cordovaBarcodeScanner','$ionicPlatform',function($scope,$rootScope, $cordovaBarcodeScanner,$ionicPlatform) {

  $scope.scan = function(){
      
   
      
      
    $ionicPlatform.ready(function() {
      $cordovaBarcodeScanner.scan().then(function(barcodeData) {
          
          
           $rootScope.$emit("CallParentMethod", barcodeData);
          
           
           
           
      });
    
  });
  }
}]);