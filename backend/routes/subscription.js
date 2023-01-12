const express = require("express");
const res = require("express/lib/response");
const router = express.Router();

// importing mongodb schema
const Subscribe = require("../Schemas/Subscribe");

// POST email endpoint -- posting email to database
router.post("/subscribe", async (req, res) => {
  const sub = new Subscribe({
    email: req.body.email,
  });
  console.log(sub);
  try {
    const savedPost = sub.save();
    res.json(savedPost);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
