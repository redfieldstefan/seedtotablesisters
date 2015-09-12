'use strict';

module.exports = function(app) {
  app.controller('BlogController', ['$scope', '$location', '$cookies', '$routeParams', 'RESTResource', 'auth', function($scope, $location, $cookies, $routeParams, RESTResource, auth) {

    $scope.signedIn = auth.isSignedIn();
    $scope.id = $routeParams.id;
    $scope.creds = {
      bucket: 'seed-to-table-sisters',
      access_key: 'AKIAIX27QQSBQYUX33WA',
      secret_key: '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',
      regtion: 'us-west-1'
    }

    var Entries = RESTResource('entries');

    $scope.redirect = function(address) {
      $location.path(address);
    };

    $scope.logOut = function() {
      auth.logout();
      $scope.signedIn = auth.isSignedIn();
      $scope.editing = false;
    }

    $scope.createEntry = function() {
      var date = new Date(Date.now());
      var newEntry = {
        title: document.getElementById('entry-title').value,
        body: document.getElementById('entry-body').value.split('\n').filter(function(paragraph) {
          return paragraph.length > 0;
        }),
        images: [$scope.imageUrl],
        date: ((date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear())
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
      Entries.getOne($scope.id, function(err, entry) {
        if (err) {
          console.log(err);
          return $scope.errors.push({msg: 'Problem finding resource'});
        }
        $scope.paragraphs = entry.body;
        $scope.title = entry.title;
        $scope.date = entry.date;
        $scope.image = entry.images[0];
      });
    };

    $scope.editEntry = function() {
      $scope.editing = true;
      if($scope.paragraphs) {
        $scope.editBody = '';
        $scope.paragraphs.forEach(function(paragraph) {
          $scope.editBody += paragraph + '\n\r';
        });
      }
    }

    $scope.saveEntry = function() {
      $scope.editing = false;
      var entry = {
        title: document.getElementById('entry-title').value,
        body: document.getElementById('entry-body').value.split('\n').filter(function(paragraph) {
          return paragraph.length > 0;
        })
      };
      Entries.save($scope.id, entry, function(err, data) {
        if(err) {
          $scope.errors.push(err);
          return console.log({msg: 'Dang, error creating the blog entry'});
        } else {
          $scope.editing = false;
          $scope.paragraphs = entry.body;
          $scope.title = entry.title;
        }
      });
    };

    $scope.deleteEntry = function(entry) {
      Entries.remove(entry._id, function(err, data) {
        if (err) {
          console.log(err);
          return $scope.errors.push({msg: 'Could not remove entry'});
        }
        $scope.entries.splice($scope.entries.indexOf(entry), 1);
        $location.path('/blog');
      });
    };

    //UPLOAD HANDLING

    var bucket = new AWS.S3({ params: { Bucket: $scope.creds.bucket } });

    angular.element('#upload-button').click(function () {
      bucket.config.update({ accessKeyId: $scope.creds.access_key, secretAccessKey: $scope.creds.secret_key });
      bucket.config.region = 'us-west-1';
      var file = angular.element('#file-selector')[0].files[0];
      if (file) {
        var params = {Key: file.name, ContentType: file.type, Body: file};
        bucket.putObject(params, function (err, data) {
          if(err) {
            return console.log(err);
          }
          console.log(data);
          $scope.imageUrl = ('https://s3-us-west-2.amazonaws.com/seed-to-table-sisters/' + file.name);
          angular.element('#image-preview').attr('src', $scope.imageUrl);
        });
      } else {
        console.log('Nothing to upload.');
      }
    });

  }]);
};
