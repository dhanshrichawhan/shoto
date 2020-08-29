const mongoose = require('mongoose');

const LinkSchema = {
  uniqueId: {
    type: String,
    unique: true,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
};

const Link = mongoose.model('Link', LinkSchema);

module.exports = Link;