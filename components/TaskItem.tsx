import { useState } from "react";

type Task = {
    id: number;
    title: string;
    description: string;
    completed: boolean;
};

type TaskItemProps = {
    task: Task;
    onDelete: (id: number) => void
};

const TaskItem: React.FC<TaskItemProps> = ({ task, onDelete }) => {
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async () => {
        setIsDeleting(true);
        try {
            const response = await fetch(`/api/tasks/${task.id}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error("Failed to delete a task")
            }
            onDelete(task.id)
        } catch (error) {
            console.error('Failed to delete a task', error);
        }
        setIsDeleting(false);
    }

    return (
        <div className={task.completed ? 'completed' : 'pending'}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <button disabled={isDeleting} onClick={handleDelete}>
                {isDeleting ? 'Deleting...':'Delete'}
            </button>
        </div>
    )
}

export default TaskItem;