const express = require("express");
const router = express.Router();
const { test, create } = require("../controllers/postController");

router.get("/", test);
router.get("/create", create);

module.exports = router;
