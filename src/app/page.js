// src/app/page.js
import Link from 'next/link';
import Image from 'next/image';

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-dark-bg text-dark-text flex flex-col font-sans">
            {/* Navbar */}
            <header className="w-full py-4 px-8 bg-[#1a202c] shadow-md mb-8">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-2xl font-bold text-accent font-serif">Kotak Kata</div>
                    <nav>
                        <Link href="/main" className="px-4 py-2 rounded-md text-dark-text hover:text-accent transition-colors">
                            Masuk
                        </Link>
                    </nav>
                </div>
            </header>

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative w-full h-screen flex items-center justify-center p-8 text-center overflow-hidden">
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
                            <br />
                            Temukan <span className="text-accent">Dukungan</span>. Tanpa Nama.
                        </h1>
                        <p className="text-lg md:text-xl text-dark-secondary leading-relaxed">
                            Kotak Kata adalah tempat aman untuk mengungkapkan pikiran, perasaan, dan pengalaman Anda tanpa perlu identitas. Mari berbagi, mendengarkan, dan saling menguatkan.
                        </p>
                        <Link href="/main" className="inline-block px-8 py-3 bg-accent text-white font-semibold rounded-full shadow-lg hover:bg-accent-hover transition-all transform hover:scale-105">
                            Mulai Berbagi Sekarang
                        </Link>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-16 px-8 bg-dark-bg text-center">
                    <h2 className="text-4xl font-bold mb-12 text-dark-text font-serif">Mengapa Kotak Kata?</h2>
                    <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                        <FeatureCard
                            icon="✍️"
                            title="Ekspresi Bebas"
                            description="Tulis apa pun yang ada di pikiranmu. Bebas nilai, bebas tekanan."
                        />
                        <FeatureCard
                            icon="🔒"
                            title="Anonim Sepenuhnya"
                            description="Identitasmu rahasia. Berbagi tanpa khawatir dihakimi."
                        />
                        <FeatureCard
                            icon="💖"
                            title="Dukungan Komunitas"
                            description="Terhubung dengan orang lain yang memahami dan berikan dukungan."
                        />
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 px-8 bg-dark-card text-center">
                    <h2 className="text-4xl font-bold mb-6 text-dark-text font-serif">Siap untuk Berbagi?</h2>
                    <p className="text-lg text-dark-secondary mb-8 max-w-2xl mx-auto">
                        Ribuan cerita menanti untuk didengar, dan banyak orang siap untuk mendengarkan ceritamu. Jangan ragu.
                    </p>
                    <Link href="/main" className="inline-block px-10 py-4 bg-accent text-white font-semibold rounded-full shadow-xl hover:bg-accent-hover transition-all transform hover:scale-105">
                        Mulai Ceritamu
                    </Link>
                </section>
            </main>

            {/* Footer */}
            <footer className="w-full py-6 px-8 bg-dark-card text-center text-dark-secondary text-sm">
                <p>&copy; {new Date().getFullYear()} Kotak Kata. Hak Cipta Dilindungi.</p>
                <p className="mt-1">Dibuat dengan ❤️ di Indonesia.</p>
            </footer>
        </div>
    );
}

function FeatureCard({ icon, title, description }) {
    return (
        <div className="p-6 bg-dark-card rounded-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
            <div className="text-5xl mb-4">{icon}</div>
            <h3 className="text-2xl font-semibold mb-2 text-dark-text font-serif">{title}</h3>
            <p className="text-dark-secondary">{description}</p>
        </div>
    );
}