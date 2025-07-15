"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function TaskCSRPage() {
  const [tasks, setTasks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
        setLoading(false);
      });
  }, []);

  return (
    <main style={{
      maxWidth: 600,
      margin: "40px auto",
      background: "#fff",
      borderRadius: 16,
      boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
      padding: 32,
    }}>
      <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 24, color: "#222" }}>Task List (CSR)</h1>
      {loading ? (
        <div style={{ textAlign: "center", color: "#888", fontSize: 18 }}>Loading...</div>
      ) : (
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 18 }}>
            <thead>
              <tr style={{ background: "#f0f4f8" }}>
                <th style={thStyle}>ID</th>
                <th style={thStyle}>Title</th>
                <th style={thStyle}>User ID</th>
                <th style={thStyle}>Status</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task.id} style={{ background: task.completed ? "#e6ffed" : "#fffbe6" }}>
                  <td style={tdStyle}>{task.id}</td>
                  <td style={{ ...tdStyle, fontWeight: 500 }}>{task.title}</td>
                  <td style={tdStyle}>{task.userId}</td>
                  <td style={tdStyle}>{task.completed ? "✅ Completed" : "❌ Incomplete"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}

const thStyle: React.CSSProperties = {
  padding: "10px 12px",
  borderBottom: "2px solid #e0e0e0",
  textAlign: "left",
  fontWeight: 700,
  color: "#222",
};

const tdStyle: React.CSSProperties = {
  padding: "10px 12px",
  borderBottom: "1px solid #f0f0f0",
  color: "#333",
};
