// ✅ app/api/todo/route.ts
import { NextRequest } from 'next/server';
import type { D1Database } from '@cloudflare/workers-types';

export const runtime = 'edge';

export async function GET(
  _req: NextRequest,
  context: { env: { DB: D1Database } }
) {
  const { results } = await context.env.DB.prepare(
    'SELECT * FROM todos ORDER BY id DESC'
  ).all();
  return new Response(JSON.stringify(results), {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(
  req: NextRequest,
  context: { env: { DB: D1Database } }
) {
  const { title } = await req.json();

  if (!title) {
    return new Response('title is required', { status: 400 });
  }

  await context.env.DB.prepare('INSERT INTO todos (title) VALUES (?)')
    .bind(title)
    .run();

  return new Response('Created', { status: 201 });
}
