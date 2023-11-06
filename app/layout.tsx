import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "0xdorifto",
  description: "0xdorifto's portfolio website.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
