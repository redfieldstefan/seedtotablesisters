var PORT = process.env.PORT || 3000;
var path = require('path');
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var passport = require('passport');
var bodyparser = require('body-parser');
var prerender = require("prerender-node");
var blogRoutes = express.Router();
var adminRoutes = express.Router();

app.use(prerender);

process.env.APP_SECRET = process.env.APP_SECRET || 'seedtotablesisters.com';
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/seedtotable_store');

app.use([
  express.static(path.join(__dirname, '/public')),
  bodyparser.json()
]);

app.use(passport.initialize());
require('./lib/passport_strat')(passport);
require('./routes/admin_routes')(adminRoutes, passport);
require('./routes/blog_routes')(blogRoutes);
app.use('/api', adminRoutes);
app.use('/api', blogRoutes);

app.listen(PORT, function() {
  console.log('SERVER IS WERKIN HARD ON PORT ' + PORT);
});



