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

      <div className="mt-12 flex flex-col lg:flex-row-reverse gap-6">
        <div className="bg-black-secondary p-4 border rounded-md border-gray-secondary/20 flex justify-between lg:flex-col lg:w-1/3">
          {developmentProcess.steps.map((dp, index) => (
            <button
              key={`${dp.title}-button`}
              onClick={() => setCurrentStep(index)}
              className={`transition p-4 lg:p-5 rounded-md flex items-center gap-8  ${
                currentStep === index
                  ? "bg-secondary-green/20"
                  : "bg-transparent"
              }`}
            >
              <Image
                src={
                  currentStep === index
                    ? dp.iconUrl.split(".svg")[0] + `-gradient.svg`
                    : dp.iconUrl
                }
                width={40}
                height={40}
                alt={dp.title}
                className="text-secondary-green lg:w-7 lg:h-7"
              />
              <h3
                className={`hidden lg:block font-poppins text-lg ${
                  currentStep === index
                    ? "main-gradient bg-clip-text text-transparent font-bold"
                    : "text-gray-primary/80"
                }`}
              >
                {dp.title}
              </h3>
            </button>
          ))}
        </div>

        <section className="p-6 lg:p-10 xl:p-12 lg:min-h-[420px] xl:h-auto overflow-hidden bg-black-secondary flex flex-col justify-between border rounded-md border-gray-secondary/20 lg:w-2/3">
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
                        <h4 className="text-gray-primary font-bold text-lg lg:text-xl">
                          {dp.subtitle}
                        </h4>
                      </div>
                    </div>
                    <p className="my-7 leading-loose font-normal text-sm tracking-wider text-gray-secondary/80 ">
                      {dp.text}
                    </p>
                  </m.div>
                )
            )}
          </AnimatePresence>

          <div className="flex justify-end pt-6 gap-2 mt-auto">
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
                }  h-6 w-6`}
              />
            </button>
          </div>
        </section>
      </div>
    </section>
  );
};
