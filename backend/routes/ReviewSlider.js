const express = require("express");
const res = require("express/lib/response");
const router = express.Router();

// importing mongodb schema
const Review = require("../Schemas/Review");

//reviews slider POST
router.post("/ReviewsData", async (req, res) => {
  const Reviews = new Review({
    id: req.body.id,
    name: req.body.name,
    job: req.body.job,
    text: req.body.text,
  });
  console.log(Reviews);
  try {
    const savedPost = await Reviews.save();
    res.json(savedPost);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
