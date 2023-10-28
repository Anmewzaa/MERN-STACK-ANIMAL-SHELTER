const express = require("express");
const router = express.Router();
const {
  getAll,
  getOne,
  create,
  remove,
  updatePost,
  comment,
} = require("../controllers/postController");
const { upload } = require("../middlewares/multer");

router.get("/get", getAll);
router.get("/get/:id", getOne);
router.post("/create", upload, create);
router.put("/update/:id", updatePost);
router.delete("/remove/:id", remove);
router.put("/comment/:id", comment);

module.exports = router;
