'use strict';

require('angular/angular');
require('angular-route');
require('angular-sanitize');
require('./style.js');

var seedToTableApp = angular.module('seedToTableApp', ['ngRoute', 'ngSanitize']);

//controllers
require('./controllers/main_controller')(seedToTableApp);

//directives
require('./directives/nav_directive')(seedToTableApp);
require('./directives/footer_directive')(seedToTableApp);
require('./directives/sponsor_bar_directive')(seedToTableApp);

//routes
seedToTableApp.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'MainController'
    })
    .when('/join', {
      templateUrl: 'views/join.html',
      controller: 'MainController'
    })
    .when('/meetus', {
      templateUrl: 'views/meetus.html',
      controller: 'MainController'
    })
    .when('/sponsors', {
      templateUrl: 'views/sponsors.html',
      controller: 'MainController'
    })
    .when('/join', {
      templateUrl: 'views/join.html',
      controller: 'MainController'
    })
    .otherwise({redirectTo:'/'});
}]);
