import { Waves } from "./Waves";

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
    <section className="relative flex items-center justify-center bg-[url('/home/hero-bg.jpg')] bg-cover bg-no-repeat w-full h-screen">
      <div className="absolute inset-0 bg-black/90" />

      <div className="z-[1] space-y-3 text-center uppercase text-main-white">
        <h3 className="text-lg font-bold text-transparent main-gradient bg-clip-text">{dictionary.subtitle}</h3>
        <h2 className="text-4xl font-bold">
          {dictionary.titleLine1}{" "}
          <span className="text-transparent main-gradient bg-clip-text">{dictionary.titleGradientLine1}</span> <br />{" "}
          {dictionary.titleLine2}{" "}
          <span className="text-transparent main-gradient bg-clip-text">{dictionary.titleGradientLine2}</span>{" "}
        </h2>
        <p className="text-lg text-gray-300">{dictionary.text}</p>
        <div className="pt-2">
          <a
            href="#contact"
            className="px-3 py-2 uppercase transition border-2 rounded-lg bg-secondary-green hover:bg-main-green border-main-white"
          >
            {dictionary.buttonLabel}
          </a>
        </div>
      </div>
      <Waves />
    </section>
  );
};
