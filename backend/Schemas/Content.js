const mongoose = require("mongoose");

const ContentSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  text: {
    type: String,
  },
});

module.exports = mongoose.model("Content", ContentSchema);
