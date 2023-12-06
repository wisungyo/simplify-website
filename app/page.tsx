import Bio from "@/app/components/Bio";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Panel from "@/app/components/Panel";
import { AppProvider } from "@/app/AppContext";

export default function Home() {
  return (
    <>
      <main className="mx-auto max-w-lg px-4 py-8">
        <AppProvider>
          <Header />
          <Bio />
          <Panel />
          <Footer />
        </AppProvider>
      </main>
    </>
  );
}
