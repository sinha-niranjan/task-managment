const express = require("express");
const { createTask } = require("../controllers/task.controller.js");

const router = express.Router();

router.route("/").post(createTask);

module.exports = router;
