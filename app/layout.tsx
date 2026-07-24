import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const avenirLight = localFont({
  src: "../public/fonts/Avenir Light.ttf",
  variable: "--font-avenir-light",
});

const avenirRoman = localFont({
  src: "../public/fonts/Avenir Roman.ttf",
  variable: "--font-avenir-roman",
});

const avenirMedium = localFont({
  src: "../public/fonts/Avenir Medium.ttf",
  variable: "--font-avenir-medium",
});

const avenirBlackOblique = localFont({
  src: "../public/fonts/Avenir Black Oblique.ttf",
  variable: "--font-avenir-black-oblique",
});

const avenirLightOblique = localFont({
  src: "../public/fonts/Avenir Light Oblique.ttf",
  variable: "--font-avenir-light-oblique",
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
  className={`
    ${avenirLight.variable}
    ${avenirRoman.variable}
    ${avenirMedium.variable}
    ${avenirBlackOblique.variable}
    ${avenirLightOblique.variable}
    ${orbitron.variable}
  `}
>
      <body>{children}</body>
    </html>
  );
}