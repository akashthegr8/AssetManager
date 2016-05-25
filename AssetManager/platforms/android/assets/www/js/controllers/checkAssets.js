angular.module('starter.controllers', [])




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

});