'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function ProtectedPage() {
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push('/login');
      } else {
        setUserEmail(user.email ?? null);
      }

      setLoading(false);
    };

    checkAuth();
  }, [router]);

  if (loading) return <p>チェック中...</p>;

  return (
    <div>
      <h2>認証必須ページ</h2>
      <p>こんにちは、{userEmail} さん。このページはログイン済ユーザー専用です。</p>
    </div>
  );
}
