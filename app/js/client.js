'use strict';

require('angular/angular');
require('angular-route');
require('angular-sanitize');
require('angular-cookies');
require('angular-base64');

var seedToTableApp = angular.module('seedToTableApp', ['ngRoute', 'ngSanitize', 'base64', 'ngCookies']);

//controllers
require('./controllers/auth_controller')(seedToTableApp);
require('./controllers/blog_controller')(seedToTableApp);
require('./controllers/main_controller')(seedToTableApp);

//directives
require('./directives/admin_bar_directive')(seedToTableApp);
require('./directives/nav_directive')(seedToTableApp);
require('./directives/footer_directive')(seedToTableApp);
require('./directives/sponsor_bar_directive')(seedToTableApp);

//services
require('./services/auth_service')(seedToTableApp);
require('./services/rest_service')(seedToTableApp);

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
    .when('/create-entry', {
      templateUrl: 'views/blog/createEntry.html',
      controller: 'BlogController'
    })
    .when('/blog', {
      templateUrl: 'views/blog/blog.html',
      controller: 'BlogController'
    })
    .when('/sign-in', {
      templateUrl: 'views/blog/signIn.html',
      controller: 'AuthController'
    })
    .when('/blog/:id', {
      templateUrl: 'views/blog/entry.html',
      controller: 'BlogController'
    })
    .otherwise({redirectTo:'/'});
}]);
