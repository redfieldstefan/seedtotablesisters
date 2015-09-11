"use strict";

var Admin = require('../models/Admin.js');
var eatAuth = require("../lib/eat_auth")(process.env.APP_SECRET);
var bodyparser = require('body-parser');
var uuid = require('uuid');
var passport = require('passport');
var eatAuth = require("../lib/eat_auth")(process.env.APP_SECRET);

module.exports = function(router, passport) {
  router.use(bodyparser.json());

  router.post('/admin/create-admin', function(req, res) {
    var admin = new Admin();
    admin.generateHash(req.body.password, function(err, hash) {
      if (err) {
        console.log(err);
        return res.status(500).json({msg: 'internal server error'});
      }

      // generate unique uuid for each new user
      admin.adminId = uuid.v4();
      admin.basic.email = req.body.email;
      admin.basic.password = hash;

      admin.save(function(err, user) {
        if (err) {
          console.log(err);
          return res.status(500).json({err: 'could not create user'});
        }

        user.generateToken(process.env.APP_SECRET, function(err, token) {
          if (err) {
            console.log(err);
            return res.status(500).json({err: 'could not generate token'});
          }

          res.status(200).json({token: token});
        });
      });
    });

  });

  router.get('/admin/sign-in', passport.authenticate('basic', {session: false}), function(req, res) {
    if (!('error' in req.user)) {
      req.user.generateToken(process.env.APP_SECRET, function(err, token) {
        if (err) {
          console.log(err);
          return res.status(500).json({ err: 'could not generate token' });
        } else {
          res.status(200)
            .json({
              success: true,
              message: 'Authentication passed',
              result: {
                token: token
              }
            });
        }
      });
    } else {
      res.status(400)
        .json({
          success: false,
          message: 'Authentication failed',
          result: req.user.message
        });
    }
  });

};
