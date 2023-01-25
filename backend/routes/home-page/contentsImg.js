// IMPORTING EXPRESS - Express also allows you to easily handle
// different types of HTTP requests such as GET, POST, PUT and DELETE.
const express = require("express");

// handle HTTP response messages
const res = require("express/lib/response");

// Assigning express.Router to router
// provides an easy way to handle routing in an express application
const router = express.Router();

// importing mongodb schema
const Images = require("../../Schemas/home-page-schema/ContentImg");

// get content info from db
router.get("/home-content-images", async (req, res) => {
  try {
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
