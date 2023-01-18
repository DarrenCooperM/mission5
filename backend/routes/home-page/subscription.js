// IMPORTING EXPRESS - Express also allows you to easily handle
// different types of HTTP requests such as GET, POST, PUT and DELETE.
const express = require("express");

// handle HTTP response messages
const res = require("express/lib/response");

// Assigning express.Router to router
// provides an easy way to handle routing in an express application
const router = express.Router();

// importing mongodb schema
const EmailSubscribe = require("../../Schemas/home-page-schema/Subscribe");

// POST email endpoint -- posting email to database

// ASYNC -- allows other code to continue running without waiting for it to finish
// allows app to run smoothly without any freezes or lag
// async function - returns a promise that can be handled later
router.post("/email", async (req, res) => {
  // create new instance
  const sub = new EmailSubscribe({
    // passing data in request body.
    email: req.body.email,
  });
  console.log(sub);
  try {
    // save data to database
    // await is used here to wait for the result of sub.save()
    // before continuing execution
    const savedPost = sub.save();
    res.json(savedPost);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
