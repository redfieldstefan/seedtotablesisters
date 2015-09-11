'use strict';

module.exports = function(app) {
  app.directive('adminBar', function(){
    return {
      restrict: 'EA',
      scope: {
        redirect: "&"
      },
      templateUrl: 'views/templates/admin_bar_template.html',
      controller: 'BlogController'
    }
  });
};
