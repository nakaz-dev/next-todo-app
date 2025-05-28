'use client';

import React, { useEffect, useState } from 'react'

export default function Posts() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setHasError(true);
    });
  }, []);
  if (hasError) {
    return <p>エラーが発生しました</p>;
  }
  if (isLoading) {
    return <p>読み込み中...</p>;
  }
  return (  
    <div>
        <h2>Posts</h2>
        {posts.map((post: any) => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))}

    </div>
  )
}
