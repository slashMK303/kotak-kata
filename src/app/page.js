"use client";

import { useState } from 'react';
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import Alert from "./components/Alert";

export default function HomePage() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ message, type });
  };

  const hideAlert = () => {
    setAlert(null);
  };

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Kotak Kata</h1>
      <div className="max-w-xl mx-auto space-y-8">
        <PostForm showAlert={showAlert} />
        <PostList showAlert={showAlert} />
      </div>

      {alert && (
        <Alert message={alert.message} type={alert.type} onClose={hideAlert} />
      )}
    </main>
  );
}