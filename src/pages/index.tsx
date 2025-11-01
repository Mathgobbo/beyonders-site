import { Contact } from "@/components/Home/Contact";
import { Customers } from "@/components/Home/Customers";
import { DevelopmentProcess } from "@/components/Home/DevelopmentProcess";
import { Differentials } from "@/components/Home/Differentials";
import { Faq } from "@/components/Home/Faq";
import { Hero } from "@/components/Home/Hero";
import { Pricing } from "@/components/Home/Pricing";
import { Services } from "@/components/Home/Services";
import { Showcase } from "@/components/Home/Showcase";
import { useI18n } from "@/hooks/useI18n";

export default function Home() {
  const dictionary = useI18n();
  return (
    <>
      <Hero dictionary={dictionary.home.hero} />
      <Showcase />
      <Differentials />
      <Services />
      <DevelopmentProcess />
      <Customers />
      {/* <Pricing /> */}
      <Contact />
      <Faq />
    </>
  );
}
