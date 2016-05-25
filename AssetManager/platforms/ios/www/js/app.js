
angular.module('starter', ['ionic', 'ngCordova', 'starter.controllers','starter.services','highcharts-ng'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  /// parent route and side menu
  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
  
   .state('app.addEquip', {
    url: '/addEquip',
    views: {
      'menuContent': {
        templateUrl: 'templates/files/addEquip.html',
        controller: 'AppCtrl'
      }
    }
  })
  .state('app.supplier', {
    url: '/supplier',
    views: {
      'menuContent': {
        templateUrl: 'templates/files/supplier.html',
        controller: 'AppCtrl'
      }
    }
  })
  .state('app.donorList', {
    url: '/donorList',
    views: {
      'menuContent': {
        templateUrl: 'templates/files/donorList.html',
        controller: 'AppCtrl'
      }
    }
  })
  .state('app.movementDetail', {
    url: '/movementDetail/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/files/movementDetails.html',
        controller: 'AppCtrl'
      }
    }
  })
  .state('app.addDonor', {
    url: '/addDonor',
    views: {
      'menuContent': {
        templateUrl: 'templates/files/addDonor.html',
        controller: 'AppCtrl'
      }
    }
  })
  .state('app.showQR', {
    url: '/showQR',
    views: {
      'menuContent': {
        templateUrl: 'templates/files/showQR.html',
        controller: 'AppCtrl'
      }
    }
  })
  .state('app.addSupplier', {
    url: '/addSupplier',
    views: {
      'menuContent': {
        templateUrl: 'templates/files/addSupplier.html',
        controller: 'AppCtrl'
      }
    }
  })
  
  /// child route
  .state('app.createMovement', {
    url: '/createMovement',
    views: {
      'menuContent': {
        templateUrl: 'templates/files/createMovement.html',
        controller: 'AppCtrl'
      }
    }
  })
  
  /// child route
  .state('app.ruMovement', {
    url: '/ruMovement',
    views: {
      'menuContent': {
        templateUrl: 'templates/files/ruMovement.html',
        controller: 'AppCtrl'
      }
    }
  })
  
  /// child route
  .state('app.allMovement', {
    url: '/allMovement',
    views: {
      'menuContent': {
        templateUrl: 'templates/files/allMovement.html',
        controller: 'AppCtrl'
      }
    }
  })

  /// child route
  .state('app.checkAssets', {
    url: '/checkAssets',
    views: {
      'menuContent': {
        templateUrl: 'templates/files/checkAssets.html',
        controller: 'AppCtrl'
      }
    }
  })
  
    /// child route
  .state('app.BranchSel', {
    url: '/BranchSel',
    views: {
      'menuContent': {
        templateUrl: 'templates/files/BranchSel.html',
        controller: 'AppCtrl'
      }
    }
  })
  
    .state('app.CityAssets', {
    url: '/CityAssets',
    views: {
      'menuContent': {
        templateUrl: 'templates/files/CityAssets.html',
        controller: 'AppCtrl'
      }
    }
  })
  
    .state('app.About', {
    url: '/About',
    views: {
      'menuContent': {
        templateUrl: 'templates/files/About.html',
        controller: 'AppCtrl'
      }
    }
  })
 

  /// child route
  .state('app.results', {
    url: '/results',
    views: {
      'menuContent': {
        templateUrl: 'templates/results.html',
        controller: 'AppCtrl'
      }
    }
  })
  
  /// details view
  .state('app.details', {
    url: '/details/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/details.html',
        controller: 'DetailsCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/results');
});
