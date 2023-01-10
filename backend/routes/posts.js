const express = require("express");
const res = require("express/lib/response");
const router = express.Router();

const Post = require("../model/Post");
const Review = require("../model/Review");

// Get all the post
router.get("/", async (req, res) => {
  try {
    // find() -> get all the data
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

// save a post
router.post("/info", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  console.log(post);
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (error) {
    res.json({ message: error });
  }
});

router.post("/ReviewsData", async (req, res) => {
  const Reviews = new Review({
    id: req.body.id,
    name: req.body.name,
    job: req.body.job,
    text: req.body.text,
  });
  console.log(Reviews);
  try {
    const savedPost = await Reviews.save();
    res.json(savedPost);
  } catch (error) {
    res.json({ message: error });
  }
});

// get a specific post
router.get("/:postId", async (req, res) => {
  try {
    // find() -> get all the data
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

// update the specific post
router.patch("/:postId", async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.postId },
      {
        $set: {
          title: req.body.title,
          description: req.body.description,
        },
      }
    );
    res.json(updatedPost);
  } catch (err) {
    res.send({ message: err });
  }
});

router.delete("/:postId", async (req, res) => {
  try {
    const removePost = await Post.remove({ _id: req.params.postId });
    res.json(removePost);
  } catch (err) {
    res.send({ message: err });
  }
});

module.exports = router;
