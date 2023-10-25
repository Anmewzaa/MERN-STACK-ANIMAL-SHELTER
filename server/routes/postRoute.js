const express = require("express");
const router = express.Router();
const { test } = require("../controllers/postController");

router.get("/", test);

module.exports = router;
