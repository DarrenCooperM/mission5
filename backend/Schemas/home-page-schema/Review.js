const mongoose = require("mongoose");

const ReviewSchema = mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  job: {
    type: String,
  },
  text: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Reviews", ReviewSchema);
