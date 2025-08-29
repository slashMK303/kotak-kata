import { Inter } from "next/font/google";
import "./globals.css";
import AuthHandler from "./components/AuthHandler";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kotak Kata",
  description: "Tempat berbagi keluh kesah dan cerita anonim.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <AuthHandler /> 
        {children}
      </body>
    </html>
  );
}