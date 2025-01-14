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
  title: "Kraft & Kontur - Personal Training Frankfurt",
  description: "Zertifizierter Personal Trainer in Frankfurt mit 16 Jahren Erfahrung. Ben hilft Dir mit individuellen Fitnessprogrammen, Deine Ziele zu erreichen und Dein Wohlbefinden zu steigern. Jetzt starten!",
  icons: '/favicon.png',
  keywords: 
  [ "Personal Trainer Frankfurt",
  "zertifizierter Personal Trainer",
  "Fitnesscoach Frankfurt",
  "Fitnessziele erreichen",
  "ganzheitliches Training",
  "individuelle Trainingspläne",
  "Trainingserfahrung",
  "körperliche Leistungsfähigkeit steigern",
  "Wohlbefinden verbessern",
  "Fitness für Anfänger",
  "Training für erfahrene Athleten",
  "Fitnessberatung Frankfurt",
  "Gesundheit und Fitness",
  "Motivation im Training",
  "professioneller Trainer Frankfurt",
  "kraft kontur",
  "kraft und kontur",
],
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no, viewport-fit=cover" />
        <meta name="icon" content="/favicon.png"/>
        <meta name="size-adjust" content="auto" />
      </head>
      <body className={`${inter.className} ${bebas.className} scroll-smooth`}>
        {children}
      </body>
    </html>
  );
}
