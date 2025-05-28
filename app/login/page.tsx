'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      setMessage('ログイン失敗: ' + error.message);
    } else {
      setMessage('ログイン成功！');
    }
  };

  const handleSignup = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      setMessage('登録失敗: ' + error.message);
    } else {
      setMessage('登録メールを確認してください');
    }
  };

  return (
    <div>
      <h2>ログイン/サインアップ</h2>
      <input
        type="email"
        placeholder="メールアドレス"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="パスワード"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>ログイン</button>
      <button onClick={handleSignup}>サインアップ</button>
      {message && <p>{message}</p>}
    </div>
  );
}
