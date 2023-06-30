import { useI18n } from "@/hooks/useI18n";
import { m } from "framer-motion";
import Image from "next/image";
import { GoStar } from "react-icons/go";
import { showcaseData } from "./showcaseData";
import Marquee from "react-fast-marquee";

export const Showcase = () => {
  const {
    home: { showcase },
  } = useI18n();
  return (
    <section id="showcase" className=" relative font-inter py-16 space-y-6">
      <div className="px-4 lg:px-36">
        <h2 className="text-2xl font-normal font-inter tracking-wider text-gray-primary">
          Showcase
        </h2>
        <p className="text-gray-secondary/80 text-sm font-light">
          We have the expertise to make your idea real
        </p>
      </div>
      <Marquee>
        {showcaseData.map((showcase, index) => {
          return (
            <div className="mx-4 lg:mx-8" key={showcase.name}>
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
