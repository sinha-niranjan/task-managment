const express = require("express");
const {
  createTask,
  getAllTasks,
  updateTask,
  deleteTask,
} = require("../controllers/task.controller.js");

const router = express.Router();

router.route("/create").post(createTask);
router.route("/get-all").get(getAllTasks);
router.route("/:id").put(updateTask).delete(deleteTask);

module.exports = router;
