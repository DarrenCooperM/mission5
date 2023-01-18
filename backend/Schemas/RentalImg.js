const mongoose = require("mongoose");

const RentalImgSchema = mongoose.Schema({

  imgUrl: {
    type: String,
    required: true,

},


});

module.exports = mongoose.model("Rental", RentalImgSchema);
