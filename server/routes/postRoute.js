const express = require("express");
const router = express.Router();
const { create, remove } = require("../controllers/postController");
const { upload } = require("../middlewares/multer");

router.post("/create", upload, create);
router.delete("/remove/:id", remove);

module.exports = router;
