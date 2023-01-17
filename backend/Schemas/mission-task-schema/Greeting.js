const mongoose = require("mongoose");

const GreetingSchema = mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Greeting", GreetingSchema);
