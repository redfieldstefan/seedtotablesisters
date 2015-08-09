'use strict';

module.exports = function(app) {
  app.controller('MainController', ['$scope', '$location', function($scope, $location) {

    $scope.redirect = function(destination) {
      $location.path('/' + destination);
    }

    $scope.scroll = function(amount, speed) {
        console.log("scroll function");
        angular.element('html, body').animate({scrollTop: amount}, speed);
    };

  }]);
};
