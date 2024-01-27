import { Button } from "@/components/common/Button";
import { SectionDescription } from "@/components/common/SectionDescription";
import { SectionTitle } from "@/components/common/SectionTitle";
import { PIPEFY_FORM_URL } from "@/config/constants";
import { useI18n } from "@/hooks/useI18n";
import Image from "next/image";

export const Pricing = () => {
  const {
    home: { pricing, callToAction },
  } = useI18n();

  return (
    <section
      id="pricing"
      className="px-4 py-10 relative overflow-hidden lg:px-36 font-inter pt-24 lg:pt-52 flex flex-col justify-center items-center"
    >
      <Image
        src={"/circle.svg"}
        alt="circle"
        width={380}
        height={380}
        className="absolute top-4 -right-40 hidden xl:block"
      />
      <SectionTitle>{callToAction.firstSentence}</SectionTitle>
      <h3
        className={`mt-2 text-xl md:text-3xl font-bold font-inter tracking-wider text-gray-primary`}
      >
        {callToAction.secondSentence}
      </h3>
      <a
        className="mt-4  w-full grid place-items-center"
        href={PIPEFY_FORM_URL}
        target="_blank"
        rel="noreferrer"
      >
        <Button additionalClassName="mt-4 w-full lg:w-1/2">
          {callToAction.buttonLabel}
        </Button>
      </a>

      {/* <Image
        src={"/circle.svg"}
        alt="circle"
        width={500}
        height={500}
        className="absolute top-10 -right-40"
      />

      <SectionTitle>{pricing.title}</SectionTitle>
      <SectionDescription>{pricing.description}</SectionDescription>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricing.cards.map((card) => (
          <PricingCard key={card.title} {...card} />
        ))}
      </div> */}
    </section>
  );
};

type PricingCardProps = {
  title: string;
  description: string;
  price: string;
  buttonLabel: string;
  includes: string;
  labels: string[];
};
const PricingCard = (props: PricingCardProps) => {
  return (
    <div className="text-white font-poppins main-gradient tracking-widest rounded-md p-[2px] z-10">
      <div className="bg-black-secondary rounded-md p-6 lg:p-8">
        <h2 className="text-2xl tracking-[0.16em] font-semibold text-gray-primary">
          {props.title}
        </h2>
        <div className="mt-3 main-gradient w-1/2 h-[2px] rounded-full" />
        <p className="text-gray-secondary/80 mt-6 text-sm">
          {props.description}
        </p>

        <h3 className="text-white font-semibold text-3xl my-6">
          {props.price}
        </h3>
        <a href={PIPEFY_FORM_URL} target="_blank" rel="noreferrer">
          <Button additionalClassName="font-semibold w-full font-poppins">
            {props.buttonLabel}
          </Button>
        </a>

        <div className="my-6 bg-black-tertiary w-full h-[2px] rounded-full" />
        <p className="text-gray-primary text-base">{props.includes}</p>
        <ul className="space-y-3 lg:space-y-5 mt-4 lg:mt-6">
          {props.labels.map((text) => (
            <li key={text} className="flex gap-4 items-center">
              <div className="w-2 h-2 rounded-full main-gradient" />
              <p className="text-xs text-gray-secondary">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
