const mongoose = require("mongoose");

// Mongoose Schema defines the structure of the enquiry model.
// Schemas allow for CRUD operations to be performed
const contactEnquiry = mongoose.Schema({
  name: {
    type: String,
    required: true, // this means that when a new instance of the model is created, it is mandatory to have a value for this field
  },
  email: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Enquiry", contactEnquiry);
