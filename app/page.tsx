import Head from "next/head";
import Bio from "./components/Bio";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Panel from "./components/Panel";
import StructuredData from "./components/StructuredData";

export default function Home() {
  const jsonData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Wisnu Agung Prasetyo",
    url: "https://wisungyo.com",
    logo: "https://wisungyo.com/_next/image?url=%2Fimages%2Fprofile.jpeg&w=256&q=75",
  };

  const metaTags = () => (
    <>
      <meta
        name="description"
        content="Also called wisungyo. A mobile & frontend developer of a tech company in Jakarta called Laku6, company under Carousell Group. Working remotely from home, Blitar"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:title" content="Wisnu Agung Prasetyo" />
      <meta property="og:url" content="https://wisungyo.com/" />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Also called wisungyo. A mobile & frontend developer of a tech company in Jakarta called Laku6, company under Carousell Group. Working remotely from home, Blitar"
      />
      <meta
        property="og:image"
        content="https://wisungyo.com/_next/image?url=%2Fimages%2Fprofile.jpeg&w=256&q=75"
      />
      <meta property="og:image:alt" content="Wisnu Agung Prasetyo" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Wisnu Agung Prasetyo" />
      <meta name="next-head-count" content="15" />
    </>
  );

  return (
    <>
      <Head>
        <link rel="canonical" href="https://wisungyo.com" />
        {metaTags()}
        <StructuredData data={jsonData} />
      </Head>

      <main className="mx-auto max-w-2xl px-4 py-8">
        <Header />
        <Bio />
        <Panel />
        <Footer />
      </main>
    </>
  );
}
