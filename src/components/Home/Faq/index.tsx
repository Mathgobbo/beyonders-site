import { SectionDescription } from "@/components/common/SectionDescription";
import { SectionTitle } from "@/components/common/SectionTitle";
import { useI18n } from "@/hooks/useI18n";
import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { FaArrowDown, FaChevronDown } from "react-icons/fa";

export const Faq = () => {
  const {
    home: { faq },
  } = useI18n();
  return (
    <section id="faq" className="px-4 py-10 lg:px-36 font-inter pt-24 lg:pt-52">
      <SectionTitle>{faq.title}</SectionTitle>
      <SectionDescription>{faq.description}</SectionDescription>

      <div className="mt-12 tracking-widest flex flex-col gap-6 divide-y-[1px] divide-black-tertiary">
        {faq.questions.map((card) => (
          <FaqQuestion key={card.title} {...card} />
        ))}
      </div>
    </section>
  );
};

const FaqQuestion = ({
  answer,
  title,
}: {
  title: string;
  answer: string[];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="pt-6">
        <div
          key={`question-${title}`}
          className="flex justify-between items-center text-gray-secondary cursor-pointer  text-base"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className="font-semibold w-11/12">{title}</p>
          <FaChevronDown
            className={`transform transition duration-500 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>

        <AnimatePresence>
          {isOpen && (
            <m.div
              key={`answer-${title}`}
              initial={{ height: 0 }}
              animate={{
                height: "auto",
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              exit={{ height: 0 }}
              className="text-sm text-gray-secondary/70 overflow-clip"
            >
              <div className="h-3"></div>
              {answer.map((paragraphs) => (
                <p key={paragraphs} className="leading-7 font-light">
                  {paragraphs}
                </p>
              ))}
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
