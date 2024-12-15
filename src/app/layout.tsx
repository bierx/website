import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import { ChartNoAxesCombined, Github, Send, Twitter } from "lucide-react";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "tardionchain",
  description:
    "Bringing tardigrade to life in the digital realm with on-chain  transactions—exploring the boundaries of biology, simulation, and innovation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5">
            <div>
              <a
                className="flex-none text-xl font-semibold text-black focus:outline-none dark:text-white"
                href="#"
                aria-label="Brand"
              >
                Tardionchain
              </a>
            </div>

            <span>© 2024 Tardionchain. All rights reserved.</span>

            <div className="md:text-end space-x-2">
              <Link
                className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                href="https://x.com/tardionchain"
              >
                <Twitter />
              </Link>
              <Link
                className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                href="https://t.me/tardionchain"
              >
                <Send />
              </Link>
              <Link
                className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                href="https://github.com/Tardionchain"
              >
                <Github />
              </Link>
              <Link
                className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                href="https://www.coingecko.com/en/coins/tardigrade"
              >
                <ChartNoAxesCombined />
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
