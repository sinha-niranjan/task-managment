import { useEffect, useState } from "react";
import Form from "./components/Form.jsx";
import "./App.css";
import TaskItem from "./components/TaskItem.jsx";
import axios from "axios";

const URL = "http://localhost:8080/api/v1/task/get-all";

function App() {
  const [tasks, setTasks] = useState("");

  useEffect(() => {
    const getTasks = async () => {
      try {
        const res = await axios.get(URL);

        if (res?.data) {
          setTasks(res?.data?.tasks);
        }
      } catch (error) {
        console.log("error in getting all tasks", error);
      }
    };

    getTasks();
  }, []);

  return (
    <div className="flex min-h-screen w-full items-start justify-center bg-slate-800 pt-5 text-3xl text-white">
      <div className="flex w-full flex-col items-center">
        Task Manager
        <Form setTasks={setTasks} />
        {tasks.length != 0 &&
          tasks?.map((task, index) => (
            <TaskItem setTasks={setTasks} task={task} key={index} />
          ))}
      </div>
    </div>
  );
}

export default App;
