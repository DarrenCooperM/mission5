const mongoose = require("mongoose");

const SubscribeSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Subscribe", SubscribeSchema);
