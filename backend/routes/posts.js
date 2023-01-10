const express = require("express");
const res = require("express/lib/response");
const router = express.Router();

const Post = require("../model/Post");

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
