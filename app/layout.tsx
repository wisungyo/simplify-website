import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { jsonLD, metaData } from "./constants/values";
import { Metadata } from "next";
import Head from "next/head";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = metaData;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dracula">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }}
        />
      </Head>
      <body
        className={`${inter.className} bg-gradient-to-tr from-[#282A36] from-60% to-[#2B2E3B] to-100%`}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
