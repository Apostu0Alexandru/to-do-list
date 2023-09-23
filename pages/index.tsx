import { useEffect, useState } from "react";
import TaskList from "@/components/TaskList";
import AddTask from "@/components/AddTask";
import Task from "@/types/Task";


export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addNewTask = (newTask: Task) => {
    setTasks(prevTasks => [...prevTasks, newTask]);
}


  useEffect(() => {
    fetch('/api/tasks')
      .then((response) => response.json())
      .then((data) => setTasks(data));
  }, [])

  return (
    <div>
      <TaskList tasks={tasks} setTasks={setTasks} />
      <div >
        <AddTask onTaskAdded={addNewTask} />
      </div>
    </div>
  )
}