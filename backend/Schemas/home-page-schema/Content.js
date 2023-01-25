const mongoose = require("mongoose");

// Mongoose Schema defines the structure of the enquiry model.
// Schemas allow for CRUD operations to be performed
const ContentSchema = mongoose.Schema({
  url: {
    type: String,
    required: true, // this means that when a new instance of the model is created, it is mandatory to have a value for this field
  },
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

// arguments = exporting model name + and schema
module.exports = mongoose.model("Content", ContentSchema);
