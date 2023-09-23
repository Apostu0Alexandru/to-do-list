import { useEffect, useState } from "react";
import TaskList from "@/components/TaskList";
import AddTask from "@/components/AddTask";

type Task = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};


export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetch('/api/tasks')
      .then((response) => response.json())
      .then((data) => setTasks(data));
  }, [])

  return (
    <div>
      <TaskList tasks={tasks} setTasks={setTasks} />
      <div >
        <AddTask />
      </div>
    </div>
  )
}