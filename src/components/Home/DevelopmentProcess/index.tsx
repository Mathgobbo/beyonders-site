import { SectionDescription } from "@/components/common/SectionDescription";
import { SectionTitle } from "@/components/common/SectionTitle";
import { useI18n } from "@/hooks/useI18n";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { AnimatePresence, m } from "framer-motion";
import Image from "next/image";
export const DevelopmentProcess = () => {
  const {
    home: { developmentProcess },
  } = useI18n();

  const [currentStep, setCurrentStep] = useState(0);

  return (
    <section
      id="services"
      className="px-4 py-10 lg:px-36 font-inter pt-24 lg:pt-52"
    >
      <div>
        <SectionTitle additionalClassName="capitalize">
          {developmentProcess.title}
        </SectionTitle>
        <SectionDescription>
          {developmentProcess.description}
        </SectionDescription>
      </div>

      <div className="mt-12">
        <section className="p-6 overflow-hidden bg-black-secondary border rounded-md border-gray-secondary/20">
          <AnimatePresence mode="wait">
            {developmentProcess.steps.map(
              (dp, index) =>
                currentStep === index && (
                  <m.div
                    initial={{ opacity: 0, x: 200 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -200 }}
                    transition={{ bounce: false, duration: 0.3 }}
                    className="font-poppins"
                    drag="x"
                    key={`${dp.title}-animate`}
                  >
                    <div className="flex gap-6">
                      <Image
                        src={dp.iconUrl.split(".svg")[0] + `-gradient.svg`}
                        width={48}
                        height={48}
                        alt={dp.title}
                        className="text-secondary-green"
                      />
                      <div>
                        <h3 className="main-gradient font-bold text-2xl bg-clip-text text-transparent">
                          {dp.title}
                        </h3>
                        <h4 className="text-gray-primary font-bold text-xl">
                          {dp.subtitle}
                        </h4>
                      </div>
                    </div>
                    <p className="my-6 text-gray-secondary/80 ">{dp.text}</p>
                  </m.div>
                )
            )}
          </AnimatePresence>

          <div className="flex justify-end pt-6 gap-2">
            <button
              onClick={() =>
                setCurrentStep((prev) => (prev === 0 ? prev : prev - 1))
              }
            >
              <FaChevronLeft
                className={`${
                  currentStep === 0
                    ? "text-gray-secondary/40"
                    : "text-main-green"
                }  h-6 w-6`}
              />
            </button>
            <button
              onClick={() =>
                setCurrentStep((prev) =>
                  prev === developmentProcess.steps.length - 1 ? prev : prev + 1
                )
              }
            >
              <FaChevronRight
                className={`${
                  currentStep === developmentProcess.steps.length - 1
                    ? "text-gray-secondary/40"
                    : "text-main-green"
                } text-main-green h-6 w-6`}
              />
            </button>
          </div>
        </section>
      </div>
    </section>
  );
};
