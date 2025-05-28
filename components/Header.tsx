'use client';

import Link from 'next/link';

import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <Link href="/" className={styles.button}>Home</Link>
        <Link href="/about" className={styles.button}>About</Link>
        <Link href="/profile" className={styles.button}>Profile</Link> 
        <Link href="/todo" className={styles.button}>Todo</Link> 
        <Link href="/submit-todo" className={styles.button}>Submit Todo</Link>
        <Link href="/posts" className={styles.button}>Posts</Link>
        <Link href="/post-form" className={styles.button}>PostForm</Link>
        <Link href="/login" className={styles.button}>Login</Link>
      </nav>
    </header>
  );
}
