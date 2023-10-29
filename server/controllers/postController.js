const { v4: uuidv4 } = require("uuid");
const Post = require("../models/postModel");
const fs = require("fs");

// Read
exports.getAll = async (req, res) => {
  try {
    await Post.find({}).then((data) => {
      res.status(200).json({
        response: data,
        error: [],
      });
    });
  } catch (err) {
    res.json({
      response: [],
      error: err,
    });
  }
};
// Read one
exports.getOne = async (req, res) => {
  try {
    const { id } = req.params;
    await Post.findOne({ postId: id }).then((data) => {
      res.json({
        response: data,
        error: [],
      });
    });
  } catch (err) {
    res.json({
      response: [],
      error: err,
    });
  }
};
// Create
exports.create = async (req, res) => {
  try {
    const {
      postTitle,
      postDesciption,
      authorUid,
      authorName,
      authorEmail,
      authorProfile,
    } = req.body;
    if (
      !(
        postTitle &&
        postDesciption &&
        req.file &&
        authorUid &&
        authorName &&
        authorEmail &&
        authorProfile
      )
    ) {
      return res.send("Input required");
    }
    postId = uuidv4();
    postImage = req.file.filename;
    await Post.create({
      postId: postId,
      postTitle: postTitle,
      postDesciption: postDesciption,
      postImage: postImage,
      postComment: [],
      authorUid: authorUid,
      authorName: authorName,
      authorEmail: authorEmail,
      authorProfile: authorProfile,
    }).then(() => {
      res.json({
        response: "Created successfully",
        error: [],
      });
    });
  } catch (err) {
    res.json({
      response: [],
      error: err,
    });
  }
};
// Update Post
exports.updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { postTitle, postDesciption } = req.params;
    if (!(postTitle && postDesciption)) return res.send("Input required");
    await Post.findOneAndUpdate(
      { postId: id },
      { postTitle: postTitle, postDesciption: postDesciption }
    ).then(() => {
      res.json({
        response: "Update post successfully",
        error: [],
      });
    });
  } catch (err) {
    res.json({
      response: [],
      error: err,
    });
  }
};
// Delete
exports.remove = async (req, res) => {
  try {
    const { id } = req.params;
    const removed = await Post.findOneAndDelete({ postId: id });
    await fs.unlink("./images/" + removed.postImage, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Remove success");
      }
    });
    res.json({ response: "Remove successfully", error: [] });
  } catch (err) {
    res.json({
      response: [],
      error: err,
    });
  }
};
// Comment
exports.comment = async (req, res) => {
  try {
    const { id } = req.params;
    const { comment } = req.body;
    await Post.findOneAndUpdate({ postId: id }, { postComment: comment }).then(
      () => {
        res.json({
          response: "Update comment successfully",
          error: [],
        });
      }
    );
  } catch (err) {
    res.json({
      response: [],
      error: err,
    });
  }
};
