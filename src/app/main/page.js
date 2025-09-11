"use client";

import { useEffect, useState } from 'react';
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import Alert from "./components/Alert";
import AuthHandler from "./components/AuthHandler";
import Link from 'next/link';
import Footer from './components/Footer';

export default function HomePage() {
  const [alert, setAlert] = useState(null);
  const [authReady, setAuthReady] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false); 

  const showAlert = (message, type) => {
    setAlert({ message, type });
  };

  const hideAlert = () => {
    setAlert(null);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="bg-[#1a202c] min-h-screen font-sans">
      <header className="fixed top-0 left-0 right-0 py-4 px-4 sm:px-8 bg-[#2d3748] shadow-md z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-accent font-serif">Kotak Cerita</div>

          <button onClick={toggleMenu} className="md:hidden p-2 rounded-md focus:outline-none">
            <svg className="w-6 h-6 text-dark-text" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>

          <nav className="hidden md:flex space-x-2 md:space-x-4">
            <a href="https://saweria.co/nanangmkdev" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors text-white">
              Donasi!
            </a>
            <Link href="/" className="px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 hover:text-accent transition-colors text-white">
              Home
            </Link>
          </nav>
        </div>
      </header>

      <div
        className={`fixed inset-x-0 top-16 bg-[#2d3748] shadow-md z-40 md:hidden transition-transform duration-300 ease-in-out
                   ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <nav className="flex flex-col p-4 space-y-2">
          <a href="https://saweria.co/nanangmkdev" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors text-white text-center">
            Donasi!
          </a>
          <Link href="/" className="block px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 hover:text-accent transition-colors text-white text-center">
            Home
          </Link>
        </nav>
      </div>

      <main className="container mx-auto p-4 pt-24 pb-20">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-3xl font-bold text-center text-dark-text font-serif">Buatlah Cerita Mu</h1>
          <AuthHandler onAuthReady={setAuthReady} />
          <PostForm showAlert={showAlert} isAuthReady={authReady} />
          <PostList showAlert={showAlert} />
        </div>
      </main>

      <Alert message={alert?.message} type={alert?.type} onClose={hideAlert} />

      <Footer />

      {/* Tombol Scroll to Top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-24 right-4 p-3 bg-blue-600 text-white rounded-full shadow-lg transition-all duration-300 transform hover:bg-blue-700 hover:cursor-pointer
                   ${showScrollToTop ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
        </svg>
      </button>
    </div>
  );
}