const express = require("express");
const res = require("express/lib/response");
const router = express.Router();

// importing mongodb schema
const SubmitMessage = require("../Schemas/ContactSubmit");

// Post to database
router.post("/user-message", async (req, res) => {
  const postMessage = new SubmitMessage({
    name: req.body.name,
    email: req.body.email,
    number: req.body.number,
    message: req.body.message,
  });
  console.log(postMessage);
  try {
    const savedPost = await postMessage.save();
    res.json(savedPost);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
