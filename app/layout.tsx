import type { Metadata } from "next";
import { MuseoModerno } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const museoModerno = MuseoModerno({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-museoModerno",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Rubnik | Agentes IA",
  description: "EXPERIÊNCIA DA NOVA GERAÇÃO DE AGENTES IA PARA NEGÓCIOS!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/icon.svg" sizes="any" />
      </head>
      <body className={`${museoModerno.className} antialiased`}>
        <main>
          <Toaster />
          {children}
        </main>
      </body>
    </html>
  );
}
