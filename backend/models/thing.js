const mongoose = require('mongoose');

const thingSchema = mongoose.Schema({
  title: { type: String, required: true },
  imgLink: { type: String, required: true },
  linkUrl: { type: String, required: true },
});

module.exports = mongoose.model('Thing', thingSchema);
