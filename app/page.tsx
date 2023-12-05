import Head from "next/head";
import Bio from "./components/Bio";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Panel from "./components/Panel";
import Overview from "./components/Overview";

export default function Home() {
  return (
    <>
      <main className="mx-auto max-w-4xl px-4">
        {/* <Header /> */}
        {/* <Bio /> */}
        {/* <Panel /> */}
        {/* <Footer /> */}
        <Overview />
      </main>
    </>
  );
}
