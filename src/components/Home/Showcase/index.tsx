import { m } from "framer-motion";
import Image from "next/image";
import { showcaseData } from "./showcaseData";
export const Showcase = () => {
  return (
    <section id="showcase" className="px-4 py-16 space-y-6 lg:px-36">
      <h2 className="text-2xl font-bold tracking-wider text-center uppercase text-main-white">Showcase</h2>
      <div className="grid gap-8 lg:grid-cols-3">
        {showcaseData.map((showcase, index) => {
          return (
            <m.div
              initial={{ opacity: 0, y: -25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.5, duration: 1 }}
              viewport={{ once: true }}
              className="overflow-hidden"
              key={showcase.name}
            >
              <a className="transition duration-500" target={"_blank"} href={showcase.url} rel="noreferrer">
                <Image
                  className="transition duration-700 hover:scale-110"
                  src={showcase.bgImgUrl}
                  alt={showcase.name}
                  width={500}
                  height={280}
                />
              </a>
            </m.div>
          );
        })}
      </div>
    </section>
  );
};
