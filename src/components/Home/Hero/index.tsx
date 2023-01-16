import { Waves } from "./Waves";
import { m } from "framer-motion";
import Image from "next/image";
export const Hero = ({
  dictionary,
}: {
  dictionary: {
    subtitle: string;
    titleLine1: string;
    titleGradientLine1: string;
    titleLine2: string;
    titleGradientLine2: string;
    text: string;
    buttonLabel: string;
  };
}) => {
  return (
    <section className="relative flex items-center justify-center w-full h-screen">
      <Image
        src={"/home/hero-bg.webp"}
        alt="Hero background"
        width={1920}
        height={851}
        quality={25}
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-black/90" />

      <div className="z-[1] px-4 space-y-3 text-center uppercase text-main-white">
        <m.h3
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="font-bold text-transparent lg:text-lg main-gradient bg-clip-text"
        >
          {dictionary.subtitle}
        </m.h3>
        <m.h2
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold lg:text-4xl"
        >
          {dictionary.titleLine1}{" "}
          <span className="text-transparent main-gradient bg-clip-text">{dictionary.titleGradientLine1}</span> <br />{" "}
          {dictionary.titleLine2}{" "}
          <span className="text-transparent main-gradient bg-clip-text">{dictionary.titleGradientLine2}</span>{" "}
        </m.h2>
        <m.p
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-sm text-gray-300 lg:text-lg"
        >
          {dictionary.text}
        </m.p>
        <m.div
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="pt-2"
        >
          <a
            href="#contact"
            className="px-3 py-2 text-sm uppercase transition border-2 rounded-lg bg-secondary-green hover:bg-main-green lg:text-base border-main-white"
          >
            {dictionary.buttonLabel}
          </a>
        </m.div>
      </div>
      <Waves />
    </section>
  );
};
