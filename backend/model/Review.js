const mongoose = require("mongoose");

const ReviewSchema = mongoose.Schema({
  id: {
    type: Number,
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
