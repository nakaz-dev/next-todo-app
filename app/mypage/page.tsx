'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function Mypage() {
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUserEmail(user?.email ?? null);
    };

    getUser();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    location.reload(); // ログアウト後の状態リセット（簡易）
  };

  return (
    <div>
      <h2>マイページ</h2>
      {userEmail ? (
        <>
          <p>こんにちは、{userEmail} さん</p>
          <button onClick={handleLogout}>ログアウト</button>
        </>
      ) : (
        <p>
          ログインしていません。<a href="/login">ログインページへ</a>
        </p>
      )}
    </div>
  );
}
