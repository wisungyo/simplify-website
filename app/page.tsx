import Bio from "./components/Bio";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-8">
      <Header />
      <Bio />
      <Footer />
    </main>
  );
}
