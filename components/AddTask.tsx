import { useState } from "react";

const AddTask: React.FC = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        fetch('/api/tasks/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, description }),
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle the new task data, e.g., update local state or notify the user
                setTitle(''); // Clear the input fields
                setDescription('');
            });
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label>Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <button type="submit">Add task</button>
            </form>
        </div>
    )
}

export default AddTask;