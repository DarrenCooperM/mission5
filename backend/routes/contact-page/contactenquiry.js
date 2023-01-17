// IMPORTING EXPRESS - Express also allows you to easily handle
// different types of HTTP requests such as GET, POST, PUT and DELETE.
const express = require("express");

// handle HTTP response messages
const res = require("express/lib/response");

// Assigning express.Router to router
// provides an easy way to handle routing in an express application
const router = express.Router();

// importing mongodb schema
const Enquiry = require("../../Schemas/contact-page-schema/ContactEnquiry");

// Post to database
// ASYNC -- allows other code to continue running without waiting for it to finish
// allows app to run smoothly without any freezes or lag
router.post("/enquiry-message", async (req, res) => {
  // create new instance
  const postMessage = new Enquiry({
    // passing data in request body.
    name: req.body.name,
    email: req.body.email,
    number: req.body.number,
    message: req.body.message,
  });
  console.log(postMessage);
  try {
    // save data to database
    // await is used here to wait for the result of postMessage.save()
    // before continuing execution
    const savedPost = await postMessage.save();
    res.json(savedPost);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
