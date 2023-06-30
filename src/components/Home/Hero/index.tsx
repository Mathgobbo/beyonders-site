import { m } from "framer-motion";
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
    <section className="relative flex items-center md:items-end justify-center w-full h-[80vh] md:h-[75vh]">
      <div className="z-[1] px-4 text-center text-main-white">
        <m.h3
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="font-bold text-transparent font-poppins mb-3 md:text-xl lg:text-3xl main-gradient bg-clip-text uppercase"
        >
          {dictionary.subtitle}
        </m.h3>
        <m.h2
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-normal font-poppins tracking-wider leading-10 md:text-4xl lg:text-5xl lg:leading-snug "
        >
          {dictionary.titleLine1}{" "}
          <span className="text-transparent main-gradient bg-clip-text">
            {dictionary.titleGradientLine1}
          </span>{" "}
          <br />
          {dictionary.titleLine2}{" "}
          <span className="text-transparent main-gradient bg-clip-text">
            {dictionary.titleGradientLine2}
          </span>{" "}
        </m.h2>
        <m.p
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-sm mt-5 mb-6 text-gray-100 font-inter md:text-lg lg:text-base lg:mt-7"
        >
          {dictionary.text}
        </m.p>
        <m.div
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="pt-2 mt-8"
        >
          <a href="#contact">
            <button className="px-6 py-3 shadow-md text-sm sm:text-base  font-semibold rounded-md bg-gradient-to-r from-secondary-green to-main-green/80 hover:bg-main-green/80  hover:cursor-pointer">
              {dictionary.buttonLabel}
            </button>
          </a>
        </m.div>

        <div className="flex justify-center">
          <div className="w-1 rounded-full  h-16 mt-12 bg-gradient-to-b from-secondary-green to-main-green"></div>
        </div>
      </div>
      {/* <Waves /> */}
    </section>
  );
};
