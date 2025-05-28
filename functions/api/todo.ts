// functions/api/todo.ts
import type { D1Database } from '@cloudflare/workers-types';

interface Env {
  DB: D1Database;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const { DB } = context.env;
  const { results } = await DB.prepare(
    'SELECT * FROM todos ORDER BY id DESC'
  ).all();

  return new Response(JSON.stringify(results), {
    headers: { 'Content-Type': 'application/json' },
  });
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { DB } = context.env;
  const { title } = await context.request.json() as { title: string };

  if (!title) {
    return new Response('title is required', { status: 400 });
  }

  await DB.prepare('INSERT INTO todos (title) VALUES (?)')
    .bind(title)
    .run();

  return new Response('Created', { status: 201 });
};
