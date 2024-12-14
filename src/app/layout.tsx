import { ThemeProvider } from "../app/components/ThemeContext";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MY WEBSITE",
  description: "Created By HTML CSS AND JAVASCRIPT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="chromane-sonic-dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased chromane-sonic-dark`}
      >
        <ThemeProvider>
        <Navbar />
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
