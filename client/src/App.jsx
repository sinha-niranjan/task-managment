import { useState } from "react";
import Form from "./components/Form.jsx";
import "./App.css";
import TaskItem from "./components/TaskItem.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex min-h-screen w-full items-start justify-center bg-slate-800 pt-5 text-3xl text-white">
      <div className="flex w-full flex-col items-center">
        Task Manager
        <Form />
        <TaskItem />
      </div>
    </div>
  );
}

export default App;
