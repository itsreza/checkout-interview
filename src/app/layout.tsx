"use client";
import type { Metadata } from "next";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./_fonts.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Bime Bazar",
//   description: "Code Challenge",
// };

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <div
          className={`max-w-screen-sm mx-auto ${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </div>
      </body>
    </html>
  );
}
