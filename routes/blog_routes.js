"use strict";

var Entry = require('../models/Entry.js');
var Admin = require('../models/Admin');
var eatAuth = require("../lib/eat_auth")(process.env.APP_SECRET);
var bodyparser = require('body-parser');

module.exports = function(router) {
  router.use(bodyparser.json());

  router.post('/entries', function(req, res) {
    var newEntry = new Entry(req.body);
    newEntry.save(function(err, data) {
      if(err) {
        console.log(err);
        return res.status(500).json({msg: 'Uh oh! There must have been a server error somewhere.'});
      }
      res.json(data);
    })
  });

  router.get('/entries', function(req, res) {
    Entry.find({}, function(err, data) {
      if(err){
        console.log(err);
        return res.status(500).json({msg: 'Uh oh! There must have been a server error somewhere.'});
      }
      res.json(data);
    });
  });

  router.get('/entries/:id', function(req, res) {
    Entry.findOne({_id: req.params.id}, function(err, data) {
      if(err){
        console.log(err);
        return res.status(500).json({msg: 'Uh oh! There must have been a server error somewhere.'});
      }

      res.json(data);
    });
  });

};
