'use strict';

var Basic = require('passport-http').BasicStrategy;
var Admin = require('../models/Admin');

module.exports = function(passport) {
  passport.use('basic', new Basic({}, function(email, password, done) {
    Admin.findOne({'basic.email': email}, function(err, admin) {
      if(err) {
        return done('Database error');
      }
      if(!user) {
        return done('No such user');
      }
      admin.checkPassword(password, function(err, res) {
        if (err) {
          console.log(err);
        }
        if (res === false) {
          return done('Wrong Password');
        }
        if(res === true) {
          return done(null, user);
        }
      });
    });
  }));
};
