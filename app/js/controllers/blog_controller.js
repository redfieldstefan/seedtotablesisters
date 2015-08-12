'use strict';

module.exports = function(app) {
  app.controller('BlogController', ['$scope', '$location', '$routeParams', 'RESTResource', function($scope, $location, $routeParams, RESTResource) {

    var Entries = RESTResource('entries');
    $scope.entry = {};

    $scope.redirect = function(address) {
      console.log(address);
      $location.path('/blog/' + address);
    }

    $scope.createEntry = function() {
      var date = new Date(Date.now());
      var newEntry = {
        title: document.getElementById('blog-title').value,
        body: document.getElementById('blog-body').value.split('\n').filter(function(paragraph) {
          return paragraph.length > 0;
        }),
        date: (date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear())
      };
      Entries.create(newEntry, function(err, data) {
        if(err) {
          $scope.errors.push(err);
          return console.log({msg: 'Dang, error creating the blog entry'});
        } else {
          var address = data._id;
          $location.path('/blog/' + address);
        }
      });
    }

    $scope.getEntries = function() {
      Entries.getAll(function(err, entries) {
        if (err) {
          console.log(err);
          return $scope.errors.push({msg: 'Problem finding resource'});
        }
        $scope.entries = entries;
      });
    };

    $scope.getEntry = function() {
      Entries.getOne($routeParams.id, function(err, entry) {
        if (err) {
          console.log(err);
          return $scope.errors.push({msg: 'Problem finding resource'});
        }
        $scope.paragraphs = entry.body;
        $scope.title = entry.title;
        $scope.date = entry.date;
      });
    };

    $scope.editEntry = function() {

    };

    $scope.deleteEntry = function() {

    };

  }]);
};
