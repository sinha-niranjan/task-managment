import axios from "axios";
import React, { useState } from "react";

const TaskItem = ({ task }) => {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [completed, setCompleted] = useState(task.completed);

  const updateTask = async () => {
    try {
      const URL = `http://localhost:8080/api/v1/task/${task._id}`;
      const newTask = {
        title,
        description,
        completed,
      };
      const res = await axios.put(URL, newTask);
      if (res?.data) {
        task = res?.data?.task;
      }
      setIsTodoEditable(false);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async () => {
    try {
      const URL = `http://localhost:8080/api/v1/task/${task._id}`;

      const res = await axios.delete(URL);
      console.log(res);
      setIsTodoEditable(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex w-full max-w-7xl items-center justify-between space-x-2 bg-slate-900 p-2">
      <div className="flex h-10 w-10 items-center justify-center">
        <input
          type="checkbox"
          className={`cursor-pointer ${
            completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
          }`}
          checked={completed}
          onChange={() => setCompleted((prev) => !prev)}
        />
      </div>
      <div className="flex w-1/3 flex-col items-start justify-center gap-2">
        <label htmlFor="title" className="text-lg text-white">
          Title
        </label>
        <input
          type="text"
          id="title"
          className="w-full rounded-lg border-2 border-transparent bg-slate-600 px-3 py-2 text-sm focus:border-black focus:outline-none"
          placeholder="Enter the title of your task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          readOnly={!isTodoEditable}
        />
      </div>
      <div className="flex w-1/3 flex-col items-start justify-center gap-2">
        <label htmlFor="description" className="text-lg text-white">
          Description
        </label>
        <input
          type="text"
          id="description"
          className="w-full rounded-lg border-2 border-transparent bg-slate-600 px-3 py-2 text-sm focus:border-black focus:outline-none"
          placeholder="Enter the description of your task"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          readOnly={!isTodoEditable}
        />
      </div>

      <button
        className="w-[70px] rounded-md bg-green-500 py-3 text-sm font-semibold text-white"
        onClick={() => {
          if (isTodoEditable) {
            updateTask();
          } else setIsTodoEditable((prev) => !prev);
        }}
      >
        {isTodoEditable ? "Update" : "Edit"}
      </button>
      <button
        className="w-[70px] rounded-md bg-red-500 py-3 text-sm font-semibold text-white"
        onClick={deleteTask}
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
