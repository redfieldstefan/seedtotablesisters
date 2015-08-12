"use strict";

var Admin = require('../models/Admin.js');
var eatAuth = require("../lib/eat_auth")(process.env.APP_SECRET);
var bodyparser = require('body-parser');
var eatAuth = require("../lib/eat_auth")(process.env.APP_SECRET);

module.exports = function(router) {
  router.use(bodyparser.json());

  router.post('/admin', eatAuth, function(req, res) {

  });

};
