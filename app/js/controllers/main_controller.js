'use strict';

module.exports = function(app) {
  app.controller('MainController', ['$scope', '$location', 'ngDialog', function($scope, $location, ngDialog) {

    $scope.modalShown = false;

    $scope.redirect = function(destination) {
      $location.path('/' + destination);
    }

    $scope.scroll = function(amount, speed) {
        console.log("scroll function");
        angular.element('html, body').animate({scrollTop: amount}, speed);
    };

    $scope.toggleModal = function() {
      ngDialog.open({ template: 'templateId' });
    };

  }]);
};
