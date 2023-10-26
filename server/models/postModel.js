const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  postId: {
    type: Number,
    require: true,
    unique: true,
  },
  postTitle: {
    type: String,
    require: true,
  },
  postDesciption: {
    type: String,
    require: true,
  },
  postImage: {
    type: String,
    require: true,
  },
  authorUid: {
    type: String,
    require: true,
  },
  authorName: {
    type: String,
    require: true,
  },
  authorEmail: {
    type: String,
    require: true,
  },
  authorProfile: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Post", postSchema);
