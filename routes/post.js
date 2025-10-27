const express = require("express");

const router = express.Router();

const Post = require("../models/Post");

//insertar datos
router.post("/", (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const savedPost = post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//consultar datos
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

//actualizar datos
router.patch("/:postId", async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      { _id: req.params.postId },
      { $set: { title: req.body.title, description: req.body.description } }
    );
    res.json(updatedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//eliminar datos
router.delete("/:postId", async (req, res) => {
  try {
    const removedPost = await Post.findByIdAndDelete({
      _id: req.params.postId,
    });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
