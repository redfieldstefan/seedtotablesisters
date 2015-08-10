'use strict';

module.exports = function(app) {
  app.directive('sponsorBar', function(){
    return {
      restrict: 'EA',
      scope: {

      },
      templateUrl: 'views/templates/sponsor_bar_template.html'
    }
  });
};
