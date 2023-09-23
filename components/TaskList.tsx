import TaskItem from "./TaskItem";

type Task = {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}

type TaskListProps = {
    tasks: Task[];
    setTasks: (tasks: Task[]) => void;
};

const TaskList: React.FC<TaskListProps> = ({ tasks, setTasks }) => {
    const handleDelete = (id: number) => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
    }

    return (
        <div>
            {tasks.map(task => (
                <TaskItem key={task.id} task={task} onDelete={handleDelete} />
            ))}
        </div>
    )
}

export default TaskList;