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
router.post("/email", async (req, res) => {
  try {
    const { email } = req.body;
    const emailExists = await EmailSubscribe.findOne({ email: email });
    console.log(emailExists);
    if (emailExists) {
      throw new Error(`${email} already exists`);
    }
    const subscribe = await EmailSubscribe.create({
      email,
    });
    console.log(subscribe);
    res.send();
  } catch (e) {
    const newError = e;
    res.status(409).send(`${newError}`);
  }
});

module.exports = router;
