import React, { useState } from "react";

const Form = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const taskHandler = async (e) => {
    e.preventDefault();
    console.log(title, description);
    setTitle("");
    setDescription("");
  };
  return (
    <form className="flex w-1/3 max-w-xl flex-col items-center space-y-4 p-5">
      <div className="flex w-full gap-2">
        <input
          type="text"
          id="title"
          className="w-full rounded-lg border-2 border-transparent bg-slate-600 px-3 py-2 text-sm focus:border-black focus:outline-none"
          placeholder="Enter the title of your task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="flex w-full gap-2">
        <textarea
          type="text"
          id="title"
          className="w-full rounded-lg border-2 border-transparent bg-slate-600 px-3 py-2 text-sm focus:border-black focus:outline-none"
          placeholder="Enter the description of your task"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button
        className="rounded-md bg-green-600 p-2 text-sm"
        onClick={taskHandler}
      >
        {" "}
        Add Task
      </button>
    </form>
  );
};

export default Form;
