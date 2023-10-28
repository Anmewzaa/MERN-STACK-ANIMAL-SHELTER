const express = require("express");
const router = express.Router();
const { test, create } = require("../controllers/postController");
const { upload } = require("../middlewares/multer");

router.get("/", test);
router.post("/create", upload, create);

module.exports = router;
