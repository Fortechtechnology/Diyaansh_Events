import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Diyaansh Event - Premium Event Planning Services",
  description:
    "Creating unforgettable experiences through exceptional event planning and execution. Corporate events, weddings, social gatherings, and entertainment events.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
