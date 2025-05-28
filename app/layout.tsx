import './globals.css';
import Header from '@/components/Header';
import { ReactNode } from 'react';

export const metadata = {
  title: 'yamの開発サイト',
  description: 'yamさんのNext.js個人開発アプリです',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
