'use client';
import React, { useState } from 'react'

export default function SubmitTodo() {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState<string[]>([]);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (task.trim() === '') {
            alert('タスク名を入力してください');
            return;
        }
        setTasks([...tasks, task]);
        setTask('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>タスク名</label>
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
            <button type="submit">送信</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))} 
            </ul>
        </form>
    )
}
