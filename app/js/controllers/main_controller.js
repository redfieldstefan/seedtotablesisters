'use strict';

module.exports = function(app) {
  app.controller('MainController', ['$scope', '$location', 'ngDialog', function($scope, $location, ngDialog) {

    $scope.modalShown = false;

    $scope.currentDate = Date.now();
    $scope.dinnerDate = new Date(2016, 08, 24).getTime();

    $scope.redirect = function(destination) {
      $location.path('/' + destination);
    }

    $scope.scroll = function(amount, speed) {
        angular.element('html, body').animate({scrollTop: amount}, speed);
    };

    $scope.toggleModal = function() {
      ngDialog.open({ template: 'templateId' });
    };

  }]);
};
