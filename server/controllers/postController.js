const { v4: uuidv4 } = require("uuid");
const Post = require("../models/postModel");

exports.test = (req, res) => {
  res.json({ message: "Hello check" });
};

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
    }).then((data) => {
      res
        .json({
          response: data,
          error: [],
        })
        .catch((err) =>
          res.json({
            response: [],
            error: err,
          })
        );
    });
  } catch (err) {
    res.json({
      response: [],
      error: err,
    });
  }
};
