const express = require("express");
const res = require("express/lib/response");
const router = express.Router();

// importing mongodb schema
const Greeting = require("../../Schemas/mission-task-schema/Greeting");

// POST message endpoint -- posting email to database
router.post("/Greeting", async (req, res) => {
  const sub = new Greeting({
    message: req.body.message,
  });
  console.log(sub);
  try {
    const savedPost = sub.save();
    res.json(savedPost);
  } catch (error) {
    res.json({ message: error });
  }
});

// get greeting info from mongodb
router.get("/Greeting", async (req, res) => {
  try {
    // find() -> get all the data
    const getGreeting = await Greeting.find();
    res.json(getGreeting);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
