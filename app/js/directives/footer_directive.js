'use strict';

module.exports = function(app) {
  app.directive('footer', function(){
    return {
      restrict: 'EA',
      scope: {
        redirect: "&"
      },
      templateUrl: 'views/common/footer_template.html'
    }
  });
};
