// src/app/(main)/page.js
"use client";

import { useState } from 'react';
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import Alert from "./components/Alert";
import AuthHandler from "./components/AuthHandler";
import Link from 'next/link';

export default function HomePage() {
  const [alert, setAlert] = useState(null);
  const [authReady, setAuthReady] = useState(false);

  const showAlert = (message, type) => {
    setAlert({ message, type });
  };

  const hideAlert = () => {
    setAlert(null);
  };

  return (
    <main className="container mx-auto p-4 bg-dark-bg min-h-screen">
      {/* Navbar di luar container untuk lebar penuh */}
      <header className="fixed top-0 right-0 left-0 py-4 px-8 bg-[#1a202c] shadow-md mb-8">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-accent font-serif">Kotak Kata</div>
          <nav>
            <Link href="/" className="px-4 py-2 rounded-md text-dark-text hover:text-accent transition-colors">
              Keluar
            </Link>
          </nav>
        </div>
      </header>

      <div className="max-w-xl mx-auto space-y-8 py-20">
        <h1 className="text-3xl font-bold text-center mb-6 text-dark-text font-serif">Buatlah Kata Mu</h1>
        <AuthHandler onAuthReady={setAuthReady} />
        <PostForm showAlert={showAlert} isAuthReady={authReady} />
        <PostList showAlert={showAlert} />
      </div>

      <Alert message={alert?.message} type={alert?.type} onClose={hideAlert} />
    </main>
  );
}
