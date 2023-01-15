import Image from "next/image";
import { showcaseData } from "./showcaseData";

export const Showcase = () => {
  return (
    <section id="showcase" className="px-24 py-12 space-y-6">
      <h2 className="text-xl font-bold text-center uppercase text-main-white">Showcase</h2>
      <div className="grid grid-cols-3 gap-8">
        {showcaseData.map((showcase) => {
          return (
            <a
              className="overflow-hidden transition duration-500"
              target={"_blank"}
              href={showcase.url}
              key={showcase.name}
              rel="noreferrer"
            >
              <Image
                className="transition hover:scale-110"
                src={showcase.bgImgUrl}
                alt={showcase.name}
                width={500}
                height={280}
              />
            </a>
          );
        })}
      </div>
    </section>
  );
};
