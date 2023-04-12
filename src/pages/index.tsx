import { Contact } from "@/components/Home/Contact";
import { Hero } from "@/components/Home/Hero";
import { Services } from "@/components/Home/Services";
import { Showcase } from "@/components/Home/Showcase";
import { useI18n } from "@/hooks/useI18n";

export default function Home() {
  const dictionary = useI18n();
  return (
    <>
      <Hero dictionary={dictionary.home.hero} />
      <Showcase />
      <Services />
      <Contact />
    </>
  );
}
