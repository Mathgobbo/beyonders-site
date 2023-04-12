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
      {/* <div className="bg-[url('/home/hero-bg.webp')] absolute inset-0 object-cover w-full h-full bg-center bg-fixed bg-no-repeat bg-cover" /> */}
      <div className="absolute inset-0 bg-black/80" />

      <div className="z-[1] px-4  text-center text-main-white">
        <m.h3
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="font-bold uppercase text-transparent lg:text-2xl main-gradient bg-clip-text"
        >
          {dictionary.subtitle}
        </m.h3>
        <m.h2
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold lg:text-5xl uppercase"
        >
          {dictionary.titleLine1}{" "}
          <span className="text-transparent main-gradient bg-clip-text">
            {dictionary.titleGradientLine1}
          </span>{" "}
          <br /> {dictionary.titleLine2}{" "}
          <span className="text-transparent main-gradient bg-clip-text">
            {dictionary.titleGradientLine2}
          </span>{" "}
        </m.h2>
        <m.p
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-sm mt-3 mb-6 text-gray-100 font-poppins lg:text-2xl"
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
          <a href="#contact">
            <button className="hover:translate-y-1 px-8 py-3  shadow-md text-sm  border-b-4 border-green-700 hover:border-none transform transition-all  uppercase font-semibold rounded-full  bg-gradient-to-r from-secondary-green to-main-green/80 hover:bg-main-green/80 lg:text-2xl hover:cursor-pointer">
              {dictionary.buttonLabel}
            </button>
          </a>
        </m.div>
      </div>
      {/* <Waves /> */}
    </section>
  );
};
