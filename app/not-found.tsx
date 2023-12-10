import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import NotFound from "@/app/components/NotFound";

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
