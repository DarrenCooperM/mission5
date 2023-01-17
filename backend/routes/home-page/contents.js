const express = require("express");
const res = require("express/lib/response");
const router = express.Router();

// importing mongodb schema
const Content = require("../../Schemas/home-page-schema/Content");

// get content info from db
router.get("/content-info", async (req, res) => {
  try {
    // find() -> get all the data
    const getContentInfo = await Content.find();
    res.json(getContentInfo);
  } catch (err) {
    res.json({ message: err });
  }
});

// Content Info POST
router.post("/contentinfo", async (req, res) => {
  const postContentInfo = new Content({
    title: req.body.title,
    subtitle: req.body.subtitle,
    text: req.body.text,
  });
  console.log(postContentInfo);
  try {
    const savedPost = await postContentInfo.save();
    res.json(savedPost);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
