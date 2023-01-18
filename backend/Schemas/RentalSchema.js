const mongoose = require("mongoose");

const RentalSchema = mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  rent: {
    type: Number,
    required: true,
  },
  agentEmail: {  
    type: String,
    required: true,
  },
  available: {  
    type: Boolean,
    required: true,
  },
  pets: {  
    type: Boolean,
    required: true,
  },
  gym: {  
    type: Boolean,
    required: true,
  },
  pool: {  
    type: Boolean,
    required: true,
  },
  beds: {  
    type: Number,
    required: true,
  },
  baths: { 
    type: Number,
    required: true,
},


});

module.exports = mongoose.model("Rental", RentalSchema);
