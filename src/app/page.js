"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from './main/components/Footer';

export default function LandingPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="min-h-screen bg-[#1a202c] text-dark-text flex flex-col font-sans">
            {/* Navbar fixed */}
            <header className="fixed top-0 left-0 right-0 py-4 px-4 sm:px-8 bg-[#2d3748] shadow-md z-50">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-2xl font-bold text-accent font-serif">Kotak Cerita</div>

                    {/* Tombol Hamburger */}
                    <button onClick={toggleMenu} className="md:hidden text-dark-text p-2 rounded-md focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>

                    {/* Tautan untuk desktop */}
                    <nav className="hidden md:flex space-x-2 md:space-x-4">
                        <a href="https://saweria.co/nanangmkdev" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors text-white">
                            Donasi!
                        </a>
                        <Link href="/main" className="px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors text-white">
                            Buat Cerita
                        </Link>
                    </nav>
                </div>
            </header>

            {/* Menu Hamburger (hanya terlihat di mobile) */}
            <div
                className={`fixed inset-x-0 top-16 bg-[#2d3748] shadow-md z-40 md:hidden transition-transform duration-300 ease-in-out
                   ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}
            >
                <nav className="flex flex-col p-4 space-y-2">
                    <a href="https://saweria.co/nanangmkdev" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors text-white text-center">
                        Donasi!
                    </a>
                    <Link href="/main" className="block px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors text-white text-center">
                        Buat Cerita
                    </Link>
                </nav>
            </div>

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative w-full h-screen flex items-center justify-center p-8 text-center overflow-hidden pt-16">
                    <div className="absolute inset-0 z-0 opacity-20">
                        <Image
                            src="/bg-pattern.svg"
                            alt="Background Pattern"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>

                    <div className="z-10 max-w-3xl space-y-6">
                        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight font-serif text-dark-text">
                            <span className="text-accent">Bagikan</span> Ceritamu.
                        </h1>
                        <p className="text-lg md:text-xl text-dark-secondary leading-relaxed">
                            Kotak Cerita adalah tempat untuk mengungkapkan pikiran, perasaan, dan pengalaman Anda tanpa perlu identitas. Mari berbagi, mendengarkan, dan saling menguatkan.
                        </p>
                        <Link href="/main" className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-all transform hover:scale-105">
                            Mulai Berbagi Sekarang
                        </Link>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-16 px-8 bg-[#1a202c] text-center">
                    <h2 className="text-4xl font-bold mb-12 text-dark-text font-serif">Mengapa Kotak Cerita?</h2>
                    <div className="grid md:grid-cols-2 gap-10 max-w-3xl mx-auto">
                        <FeatureCard
                            icon="✍️"
                            title="Bebas Berekspresi"
                            description="Tulis apa pun yang ada di pikiranmu."
                        />
                        <FeatureCard
                            icon="🔒"
                            title="Rahasia dan Aman"
                            description="Kami menjaga privasi Anda."
                        />
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 px-8 bg-[#2d3748] text-center">
                    <h2 className="text-4xl font-bold mb-6 text-dark-text font-serif">Siap untuk Berbagi?</h2>
                    <p className="text-lg text-dark-secondary mb-8 max-w-2xl mx-auto">
                        Ribuan cerita menanti untuk didengar, dan banyak orang siap untuk mendengarkan ceritamu. Jangan ragu.
                    </p>
                    <Link href="/main" className="inline-block px-10 py-4 bg-blue-600 text-white font-semibold rounded-full shadow-xl hover:bg-blue-700 transition-all transform hover:scale-105">
                        Mulai Berbagi Ceritamu Sekarang
                    </Link>
                </section>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}

function FeatureCard({ icon, title, description }) {
    return (
        <div className="p-6 bg-[#2d3748] rounded-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
            <div className="text-5xl mb-4">{icon}</div>
            <h3 className="text-2xl font-semibold mb-2 text-dark-text font-serif">{title}</h3>
            <p className="text-dark-secondary">{description}</p>
        </div>
    );
}