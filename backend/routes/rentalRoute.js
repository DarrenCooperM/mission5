const express = require("express");
const res = require("express/lib/response");
const router = express.Router();

// importing mongodb schema
const Rental = require("../Schemas/RentalSchema");

// get content info from db
router.get("/rental", async (req, res) => {
  try {
    // find() -> get all the data
    const getRentalData = await Rental.find();
    res.json(getRentalData);
  } catch (err) {
    res.json({ message: err });
  }
});

// Content Info POST
router.post("/rental", async (req, res) => {
  const  postRentalData = new Rental({
    address: req.body.address,
    rent: req.body.rent,
    agentEmail: req.body.agentEmail,
    available: req.body.available,
    pets: req.body.pets,
    gym: req.body.gym,
    pool: req.body.pool,
    beds: req.body.beds,
    baths: req.body.baths

  });
  console.log(postRentalData);
  try {
    const savedPost = await postRentalData.save();
    res.json(savedPost);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
