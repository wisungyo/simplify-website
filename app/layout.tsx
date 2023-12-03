import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { fullname, description, occupation } from "./constants/labels";
import { wisungyoComs } from "./constants/links";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(wisungyoComs),
  title: fullname,
  description: description,
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },
  openGraph: {
    title: fullname,
    description: description,
    url: wisungyoComs,
    siteName: fullname,
    images: [
      {
        url: "https://wisungyo.com/_next/image?url=%2Fimages%2Fprofile.jpeg&w=256&q=75",
        width: 256,
        height: 256,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "http://schema.org/",
  "@type": "Person",
  name: fullname,
  jobTitle: occupation,
  url: wisungyoComs,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dracula">
      <body className={inter.className}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
