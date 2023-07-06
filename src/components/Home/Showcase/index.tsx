import { useI18n } from "@/hooks/useI18n";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { showcaseData } from "./showcaseData";
import { SectionTitle } from "@/components/common/SectionTitle";
import { SectionDescription } from "@/components/common/SectionDescription";

export const Showcase = () => {
  const {
    home: { showcase },
  } = useI18n();
  return (
    <section
      id="showcase"
      className="relative font-inter  py-12 lg:pt-28 space-y-6"
    >
      <div className="px-4 md:mb-8 lg:px-36">
        <SectionTitle additionalClassName="capitalize">Showcase</SectionTitle>
        <SectionDescription>{showcase.description}</SectionDescription>
      </div>
      <Marquee>
        {showcaseData.map((showcase, index) => {
          return (
            <div className="mx-4 lg:mx-8 rounded-md" key={showcase.name}>
              <a target={"_blank"} href={showcase.url} rel="noreferrer">
                <Image
                  className="w-60 h-48 md:w-72 md:h-56 lg:w-96 lg:h-80 duration-700"
                  src={showcase.bgImgUrl}
                  alt={showcase.name}
                  width={480}
                  height={480}
                />
              </a>
            </div>
          );
        })}
      </Marquee>
    </section>
  );
};
