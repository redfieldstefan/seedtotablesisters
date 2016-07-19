'use strict';

module.exports = function(app) {
  app.directive('sideBar', function(){
    return {
      restrict: 'EA',
      scope: {
        redirect: "&"
      },
      templateUrl: 'views/common/nav_template.html'
    }
  });
};
