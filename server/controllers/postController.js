const { v4: uuidv4 } = require("uuid");

exports.test = (req, res) => {
  res.json({ message: "Hello check" });
};

exports.create = (req, res) => {
  const {
    postTitle,
    postDesciption,
    postImage,
    authorUid,
    authorName,
    authorEmail,
    authorProfile,
  } = req.body;
  res.json({
    response: {
      postTitle: postTitle,
      postDesciption: postDesciption,
      postImage: postImage,
    },
  });
};
