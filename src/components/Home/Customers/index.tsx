import { Section } from "@/components/common/Section";
import { SectionDescription } from "@/components/common/SectionDescription";
import { SectionTitle } from "@/components/common/SectionTitle";
import { MouseEventHandler, useEffect, useState } from "react";
import { AnimatePresence, m } from "framer-motion";

const customers = [
  {
    quote: `Meu objetivo era criar algo diferente do que via no mercado. E a
        Beyonders, desde o primeiro contato me deu todo o suporte e
        contribuiu para o sucesso de meu projeto.`,
    name: "Marcelo da Silva",
    role: "Professor e palestrante",
    picture:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80",
  },
  {
    quote: `A Beyonders conseguiu aliar competência e velocidade para trazer o meu projeto à vida. Sou grato à eles pelo que fizeram.`,
    name: "Jackson Jones",
    role: "Influencer",
    picture:
      "https://www.incimages.com/uploaded_files/image/1024x576/getty_481292845_77896.jpg",
  },
  {
    quote: `A Beyonders conseguiu aliar competência e velocidade para trazer o meu projeto à vida. Sou grato à eles pelo que fizeram.`,
    name: "Jackson Jones",
    role: "Influencer",
    picture: "https://engineering.unl.edu/images/staff/Kayla-Person.jpg",
  },
];

export const Customers = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  let timeout: any;

  useEffect(() => {
    createTimeout();
  }, [currentStep]);

  function handleStepClick(index: number) {
    clearTimeout(timeout);
    setCurrentStep(index);
  }

  function createTimeout() {
    timeout = setTimeout(() => {
      if (currentStep === customers.length - 1) setCurrentStep(0);
      else setCurrentStep(currentStep + 1);
    }, 50000);
  }

  return (
    <Section>
      <div>
        <SectionTitle additionalClassName="capitalize">Clientes</SectionTitle>
        <SectionDescription>
          Veja o que nossos clientes estão falando
        </SectionDescription>
      </div>

      <div className="mt-12 w-full bg-black-secondary px-10 py-10 rounded flex flex-col justify-center items-center">
        <AnimatePresence mode="wait">
          {customers.map(
            (customer, index) =>
              currentStep === index && (
                <m.div
                  key={`${index}-${customer.name}`}
                  initial={{ opacity: 0, x: 80 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -80 }}
                  transition={{ bounce: false, duration: 0.3 }}
                  drag="x"
                  className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16"
                >
                  <div className="w-52 h-52 md:w-60 md:h-60 bg-gradient-to-r from-secondary-green to-main-green/80 rounded-full p-1">
                    <img
                      alt="customer-picture"
                      src={customer.picture}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>

                  <div>
                    <img
                      alt="quotation-marks"
                      src="quotation-mark.png"
                      className="w-10 md:w-14 mb-7"
                    />
                    <p className="max-w-xl text-gray-secondary/80 font-light italic text-base md:text-lg">
                      {customer.quote}
                    </p>
                    <div>
                      <h2 className="main-gradient bg-clip-text text-transparent font-bold text-lg md:text-xl mt-5">
                        {customer.name}
                      </h2>
                      <span className="text-gray-secondary/80 font-light text-sm">
                        {customer.role}
                      </span>
                    </div>
                  </div>
                </m.div>
              )
          )}
        </AnimatePresence>

        <div className="flex items-center gap-6 mt-12">
          {customers.map((customer, index) =>
            currentStep === index ? (
              <ActiveStepMark />
            ) : (
              <StepMark handleStepClick={() => handleStepClick(index)} />
            )
          )}
        </div>
      </div>
    </Section>
  );
};

function ActiveStepMark() {
  return <div className="w-4 h-4 main-gradient rounded-full"></div>;
}

interface StepMarkProps {
  handleStepClick: MouseEventHandler<HTMLDivElement>;
}

function StepMark({ handleStepClick }: StepMarkProps) {
  return (
    <div
      onClick={handleStepClick}
      className="w-2 h-2 bg-gray-secondary rounded-full cursor-pointer"
    ></div>
  );
}