import React from 'react';
import { notFound } from 'next/navigation';

// ISR: Regenerate page every 10 seconds
export const revalidate = 10;

export default async function TaskISRPage({ params }: { params: { id: string } }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`);
  if (!res.ok) return notFound();
  const task = await res.json();

  return (
    <main style={{ padding: 24 }}>
      <h1>Task Detail (ISR)</h1>
      <div>
        <strong>ID:</strong> {task.id}<br />
        <strong>Title:</strong> {task.title}<br />
        <strong>Status:</strong> {task.completed ? 'Completed ✅' : 'Incomplete ❌'}
      </div>
    </main>
  );
}
