const Task = require("../models/task.model");

const createTask = async (req, res) => {
  try {
    const { title, description, completed } = req.body;
    const task = await Task.create({ title, description, completed });

    return res.status(201).json({
      message: "task is created successfully",
      task,
    });
  } catch (error) {
    console.log("error : ", error);
    return res.status(500).json({
      message: "Something went wrong in create task",
    });
  }
};

module.exports = { createTask };
