import { useI18n } from "@/hooks/useI18n";
import { m } from "framer-motion";
import Image from "next/image";
import { GoStar } from "react-icons/go";
import { showcaseData } from "./showcaseData";
export const Showcase = () => {
  const {
    home: { showcase },
  } = useI18n();
  return (
    <section id="showcase" className="px-4 py-16 space-y-6 lg:px-36">
      <h2 className="text-2xl font-bold tracking-wider text-center uppercase text-main-white">Showcase</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {showcaseData.map((showcase, index) => {
          return (
            <m.div
              initial={{ opacity: 0, y: 25 }}
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
      <div>
        {showcase.testimonials.map((testimonial) => (
          <div key={testimonial.title} className="flex flex-col md:flex-row rounded-xl bg-main-white">
            <Image
              className="object-cover object-center w-full h-52 md:h-56 md:w-48 lg:w-56 xl:h-48 rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
              src={testimonial.imgUrl}
              width={640}
              height={640}
              alt={testimonial.author}
            />
            <m.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="px-4 py-2 md:px-8"
            >
              <h2 className="my-2 text-lg font-bold leading-6 text-transparent uppercase lg:text-xl bg-clip-text main-gradient">
                {testimonial.title}
              </h2>
              <blockquote className="text-xs italic text-gray-900 lg:text-sm">{testimonial.testimonial}</blockquote>
              <div className="flex flex-col items-center justify-center my-4 space-y-2 md:justify-between md:my-0 md:flex-row">
                <div className="flex ">
                  {Array.from(Array(5)).map((key, i) => (
                    <GoStar key={i} className="w-5 h-5 text-yellow-300 md:w-7 md:h-7 " />
                  ))}
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold uppercase text-main-black">{testimonial.author}</h3>
                  <h4 className="text-xs font-bold uppercase text-main-black/80">{testimonial.occupation}</h4>
                </div>
              </div>
            </m.div>
          </div>
        ))}
      </div>
    </section>
  );
};
