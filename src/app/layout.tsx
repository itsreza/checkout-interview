"use client";
import { Suspense } from "react";
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
          <Suspense fallback={<div>Loading...</div>}>
            <QueryClientProvider client={queryClient}>
              {children}
            </QueryClientProvider>
          </Suspense>
        </div>
      </body>
    </html>
  );
}
