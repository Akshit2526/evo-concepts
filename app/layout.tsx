import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const avenir = localFont({
  src: "../public/fonts/Avenir Light.ttf",
  variable: "--font-avenir",
});

const orbitron = localFont({
  src: "../public/fonts/Orbitron-Black.ttf",
  variable: "--font-orbitron",
});

export const metadata: Metadata = {
  title: "EVO CONCEPTS",
  description: "Premium Performance Automotive Parts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${avenir.variable} ${orbitron.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}