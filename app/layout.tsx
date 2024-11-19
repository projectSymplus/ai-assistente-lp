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
  title: "Rubnik",
  description: "Page of the Rubnik",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${museoModerno.className} antialiased`}>
        <main>
          <Toaster />
          {children}
        </main>
      </body>
    </html>
  );
}
