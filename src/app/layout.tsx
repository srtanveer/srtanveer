import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientNavbarWrapper from "@/components/ClientNavbarWrapper";
import '../lib/emailjs';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MD SHOWAIB RAHMAN TANVEER",
  description: "Computer Science Engineering Student and Developer",
  icons: {
    icon: [
      {
        url: '/profile-photo.jpg',
        sizes: '32x32',
        type: 'image/jpg'
      },
      {
        url: '/icon.png',
        type: 'image/png',
        sizes: '32x32',
      },
      {
        url: '/apple-icon.png',
        type: 'image/png',
        sizes: '180x180',
      },
    ],
    apple: [
      {
        url: '/apple-icon.png',
        sizes: '180x180',
      },
    ],
    shortcut: '/tab-icon-copy.jpg'
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100`}>
        <ClientNavbarWrapper />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
