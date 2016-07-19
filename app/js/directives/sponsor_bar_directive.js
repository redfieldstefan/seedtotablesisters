'use strict';

module.exports = function(app) {
  app.directive('sponsorBar', function(){
    return {
      restrict: 'EA',
      scope: {

      },
      templateUrl: 'views/common/sponsor_bar_template.html'
    }
  });
};
