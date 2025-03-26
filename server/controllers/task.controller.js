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

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    return res.status(200).json({
      message: "all tasks is fetched",
      tasks,
    });
  } catch (error) {
    console.log("error : ", error);
    return res.status(500).json({
      message: "Something went wrong in getting all tasks",
    });
  }
};

const updateTask = async (req, res) => {
  try {
    const { title, description, completed } = req.body;
    console.log(title, description, completed);
    const { id } = req.params;
    const task = await Task.findByIdAndUpdate(
      id,
      { title, description, completed },
      { new: true, runValidators: true }
    );

    if (!task) {
      return res.status(404).json({
        message: "task not found",
      });
    }

    return res.status(200).json({
      message: "task is updated successfully",
      task,
    });
  } catch (error) {
    console.log("error : ", error);
    return res.status(500).json({
      message: "Something went wrong in update task",
    });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    return res.status(200).json({ message: "Task is deleted successfully" });
  } catch (error) {
    console.log("error : ", error);
    return res.status(500).json({
      message: "Something went wrong in deleting task",
    });
  }
};

module.exports = { createTask, getAllTasks, updateTask, deleteTask };
