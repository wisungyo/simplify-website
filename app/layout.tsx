import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wisnu Agung Prasetyo",
  description:
    "Also called wisungyo. A mobile developer lived in Indonesia. Currently working in Laku6.com and has been there for almost 3 years now.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="winter">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
