import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "EVO CONCEPTS",
  description: "Premium Architecture & Interior Design Studio",
  keywords: [
    "Architecture",
    "Interior Design",
    "Visualization",
    "EVO CONCEPTS",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}