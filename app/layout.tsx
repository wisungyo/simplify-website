import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wisnu Agung Prasetyo",
  description:
    "Also called wisungyo. A mobile & frontend developer of a tech company in Jakarta called Laku6, company under Carousell Group. Working remotely from home, Blitar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dracula">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
