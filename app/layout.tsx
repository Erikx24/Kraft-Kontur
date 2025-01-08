import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

// Font-Imports
const inter = Inter({
  subsets: ["latin"],
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

// Metadata
export const metadata: Metadata = {
  title: "Personal Trainer Frankfurt | Kraft & Kontur",
  description: "Gesund und (wieder) Fit werden! - Personal Trainer aus Hanau: Individuelles Training für Ihre Fitnessziele. Ob Muskelaufbau, Gewichtsreduktion oder Rehabilitation – starten Sie jetzt mit einem maßgeschneiderten Fitnessprogramm!",
  icons: '/favicon.png',
  keywords: 
  [ "Personal Trainer Hanau",
  "individuelles Training Hanau",
  "Fitnessziele erreichen Hanau",
  "Muskelaufbau Hanau",
  "Gewichtsreduktion Hanau",
  "Rehabilitationstraining Hanau",
  "Fitnessprogramm Hanau",
  "Personal Training Hanau",
  "Personal Coach Hanau"]
  
};

// RootLayout-Komponente
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="!scroll-smooth">
      <head >
        <meta name="theme-color" content="#070709" />
        <meta name="color-scheme" content="dark" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="icon" content="/favicon.png"/>
      </head>
      <body className={`${inter.className} ${bebas.className} scroll-smooth`}>
        {children}
      </body>
    </html>
  );
}
