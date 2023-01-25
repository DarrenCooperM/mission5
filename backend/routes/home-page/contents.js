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
// ASYNC -- allows other code to continue running without waiting for it to finish
// allows app to run smoothly without any freezes or lag
// async function - returns a promise that can be handled later
router.get("/content-info", async (req, res) => {
  try {
    // find() -> get all the data
    // await - wait for a promise to be resolved.
    // used to wait for the result of the Content.find() method.
    const getContentInfo = await Content.find();
    // once data is found, return to the client in json format
    res.json(getContentInfo);
  } catch (err) {
    res.json({ message: err });
  }
});

// Content Info POST
router.post("/contentinfo", async (req, res) => {
  // create new instance
  const postContentInfo = new Content({
    // passing data in request body.
    url: req.body.url,
    title: req.body.title,
    subtitle: req.body.subtitle,
    text: req.body.text,
  });
  console.log(postContentInfo);
  try {
    // save data to database
    // await is used here to wait for the result of postContentInfo.save()
    // before continuing execution
    const savedPost = await postContentInfo.save();
    res.json(savedPost);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
