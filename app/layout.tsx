import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amazonga",
  description: "Ecommerce website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          {children}
          <footer className="footer footer-center p-4 bg-base-300 text-base-content">
            <p>
              © Copyright {new Date().getFullYear()} - All right reserved by{" "}
              <span>
                <Link href="www.medjio.ne" target="_blank">
                  www.medjio.me
                </Link>
              </span>
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
