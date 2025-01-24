"use client";
import { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./globals.scss";
import Head from "next/head";

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <Head>
        <title>BimeBazar!</title>
        <meta name="description" content="Front-End Challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <div className={`max-w-screen-sm mx-auto`}>
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
