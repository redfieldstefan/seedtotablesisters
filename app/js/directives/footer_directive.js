'use strict';

module.exports = function(app) {
  app.directive('footer', function(){
    return {
      restrict: 'EA',
      scope: {
        redirect: "&"
      },
      templateUrl: 'views/templates/footer_template.html'
    }
  });
};
