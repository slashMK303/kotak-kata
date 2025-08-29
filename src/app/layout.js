import { Inter, Lora } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const lora = Lora({ subsets: ['latin'], variable: '--font-lora' });

export const metadata = {
  title: "Kotak Kata - Bagikan Cerita Tanpa Nama",
  description: "Kotak Kata adalah tempat aman untuk berbagi cerita, keluh kesah, dan pikiran Anda secara anonim. Temukan dukungan dan koneksi.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <body>{children}</body>
    </html>
  );
}