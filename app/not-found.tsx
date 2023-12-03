import Bio from "./components/Bio";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NotFound from "./components/NotFound";

const NotFoundPage = () => {
  return (
    <main className="mx-auto max-w-2xl px-4 py-8 min-h-[90vh] flex flex-col justify-between">
      <div>
        <Header />
        <NotFound />
      </div>
      <Footer />
    </main>
  );
};

export default NotFoundPage;
