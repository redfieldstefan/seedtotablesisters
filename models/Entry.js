var mongoose = require('mongoose');

var entrySchema = mongoose.Schema({
  title: String,
  date: String,
  body: [],
  images: [],
});

module.exports = mongoose.model('Entry', entrySchema);
