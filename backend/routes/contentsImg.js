const express = require("express");
const res = require("express/lib/response");
const router = express.Router();

// importing mongodb schema
const Images = require("../Schemas/ContentImg");

// get content info from db
router.get("/content-images", async (req, res) => {
  try {
    // find() -> get all the data
    const getImages = await Images.find();
    res.json(getImages);
  } catch (err) {
    res.json({ message: err });
  }
});

// Content Info POST
router.post("/content-images", async (req, res) => {
  const postImages = new Images({
    url: req.body.url,
  });
  console.log(postImages);
  try {
    const savedPost = await postImages.save();
    res.json(savedPost);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
