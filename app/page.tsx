import Bio from "./components/Bio";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Panel from "./components/Panel";

export default function Home() {
  return (
    <>
      <main className="mx-auto max-w-lg px-4 py-8">
        <Header />
        <Bio />
        <Panel />
        <Footer />
      </main>
    </>
  );
}
