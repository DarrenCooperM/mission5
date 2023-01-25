// IMPORTING EXPRESS - Express also allows you to easily handle
// different types of HTTP requests such as GET, POST, PUT and DELETE.
const express = require("express");

// handle HTTP response messages
const res = require("express/lib/response");

// Assigning express.Router to router
// provides an easy way to handle routing in an express application
const router = express.Router();

// importing mongodb schema
const Content = require("../../Schemas/home-page-schema/Content");

// get content info from db
router.get("/content-info", async (req, res) => {
  try {
    const getContentInfo = await Content.find();
    res.json(getContentInfo);
  } catch (err) {
    res.json({ message: err });
  }
});

// Content Info POST
router.post("/content-info", async (req, res) => {
  const { url, title, subtitle, text } = req.body;
  try {
    const postInfo = await Content.create({
      url,
      title,
      subtitle,
      text,
    });
    res.json(postInfo);
  } catch (error) {
    res.json({ message: "didnt work" });
  }
});

module.exports = router;
