import { AppProvider } from "@/app/AppContext";
import { jsonLD } from "@/app/constants/values";
import Bio from "@/app/components/Bio";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import HeaderLarge from "@/app/components/HeaderLarge";
import Navigation from "@/app/components/Navigation";
import FooterIcons from "@/app/components/Footer/FooterIcons";
import Profile from "@/app/components/Profile";
import FadeIn from "@/app/components/FadeIn";
import FadeInRight from "@/app/components/FadeInRight";
import StructuredData from "@/app/components/StructuredData";

export default function Home() {
  return (
    <>
      <AppProvider>
        <StructuredData data={jsonLD} />
        <main className="mx-auto max-w-6xl px-4 py-8">
          <div className="flex flex-row gap-12">
            <div
              className="hidden md:block flex-1 relative"
              style={{ maxHeight: "calc(100dvh - 100px)" }}
            >
              <div
                className="fixed flex flex-col justify-between gap-4"
                style={{ height: "calc(100dvh - 100px)" }}
              >
                <div className="flex flex-col gap-16">
                  <FadeInRight delay={0}>
                    <HeaderLarge />
                  </FadeInRight>
                  <FadeInRight delay={0.4}>
                    <Navigation />
                  </FadeInRight>
                </div>
                <FadeInRight delay={0.6}>
                  <FooterIcons align="justify-start" gap="gap-8" />
                </FadeInRight>
              </div>
            </div>
            <div className="flex-1 z-10">
              <div className="hidden md:block h-72  lg:h-40 " />
              <FadeIn delay={0.6}>
                <Header />
              </FadeIn>
              <div className=" lg:p-4">
                <FadeIn delay={0.7}>
                  <Bio />
                </FadeIn>
                <FadeIn delay={0.8}>
                  <Profile />
                </FadeIn>
                <FadeIn delay={0.9}>
                  <Footer />
                </FadeIn>
              </div>
            </div>
          </div>
        </main>
      </AppProvider>
    </>
  );
}
