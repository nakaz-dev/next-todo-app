'use client';

import { useEffect, useState } from 'react';

export default function TodoPage() {
  const [title, setTitle] = useState('');
  const [tasks, setTasks] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // タスク取得
  const fetchTasks = async () => {
    const res = await fetch('/api/todo');
    const data = await res.json();
    const titles = data.map((task: any) => task.title);
    setTasks(titles);
  };

  // 初回マウント時にタスク取得
  useEffect(() => {
    fetchTasks();
  }, []);

  // タスク送信
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await fetch('/api/todo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title }),
    });
    setTitle('');
    await fetchTasks();
    setIsLoading(false);
  };

  return (
    <>
      <h2>Todo with D1</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="タスク名を入力"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? '追加中...' : '追加'}
        </button>
      </form>
      <ul>
        {tasks.map((task, idx) => (
          <li key={idx}>{task}</li>
        ))}
      </ul>
    </>
  );
}
