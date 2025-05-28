'use client';
import React, { useState } from 'react'

export default function PostForm() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [hasError, setHasError] = useState(false);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: title,
                body: body,
                userId: 1,
            }),
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            setIsSuccess(true);
            return response.json();
        })
        .then((data) => {
            console.log('送信成功：', data);
        })
        .catch((error) => {
            console.error('Error:', error);
            setHasError(true);
        })
        .finally(() => {
            setIsLoading(false);
        });
    }
  return (
    <>
    <h2>PostForm</h2>
    <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea value={body} onChange={(e) => setBody(e.target.value)}></textarea>
        <button>送信</button>
    </form>
    {isLoading && <p>送信中...</p>}
    {isSuccess && <p>送信成功！</p>}
    {hasError && <p>送信失敗</p>}
    </>
  )
}
