import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Contact } from "@/components/Home/Contact";
import { Hero } from "@/components/Home/Hero";
import { Services } from "@/components/Home/Services";
import { Showcase } from "@/components/Home/Showcase";
import { MainHead } from "@/components/MainHead";
import { useI18n } from "@/hooks/useI18n";

export default function Home() {
  const dictionary = useI18n();
  return (
    <>
      <MainHead />
      <main className="bg-main-black">
        <Header dictionary={dictionary.header} />
        <Hero dictionary={dictionary.home.hero} />
        <Showcase />
        <Services />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
