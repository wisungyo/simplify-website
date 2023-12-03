import Head from "next/head";
import Bio from "./components/Bio";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Panel from "./components/Panel";
import HorizontalScroll from "./components/HorizontalScroll";

export default function Home() {
  return (
    <>
      <main className="mx-auto max-w-2xl px-4 py-8">
        <Header />
        <Bio />
        <HorizontalScroll>
          <ul className="flex">
            <li className="mr-4 border border-primary rounded-lg p-4">
              Item 1
            </li>
            <li className="mr-4 border border-primary rounded-lg p-4">
              Item 1
            </li>
            <li className="mr-4 border border-primary rounded-lg p-4">
              Item 1
            </li>
            <li className="mr-4 border border-primary rounded-lg p-4">
              Item 1
            </li>
            <li className="mr-4 border border-primary rounded-lg p-4">
              Item 1
            </li>
            <li className="mr-4 border border-primary rounded-lg p-4">
              Item 1
            </li>
            <li className="mr-4 border border-primary rounded-lg p-4">
              Item 1
            </li>
            <li className="mr-4 border border-primary rounded-lg p-4">
              Item 1
            </li>
            <li className="mr-4 border border-primary rounded-lg p-4">
              Item 1
            </li>
          </ul>
        </HorizontalScroll>
        <Panel />
        <Footer />
      </main>
    </>
  );
}
