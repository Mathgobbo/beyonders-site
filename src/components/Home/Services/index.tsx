import { SectionDescription } from "@/components/common/SectionDescription";
import { SectionTitle } from "@/components/common/SectionTitle";
import { useI18n } from "@/hooks/useI18n";
import { m } from "framer-motion";
import Image from "next/image";

export const Services = () => {
  const {
    home: { services },
  } = useI18n();
  return (
    <section
      id="services"
      className="px-4 py-10 lg:px-36 font-inter pt-24 lg:pt-52"
    >
      <div>
        <SectionTitle>{services.title}</SectionTitle>
        <SectionDescription>{services.description}</SectionDescription>
      </div>

      <div className="gap-16 grid grid-cols-1 mt-12 lg:mt-24">
        <ServiceItem
          imgUrl="/home/services/mobile-apps.svg"
          title={services.mobileAppsTitle}
          description={services.mobileAppsText}
        />
        <ServiceItem
          imgUrl="/home/services/websites.svg"
          title={services.websiteTitle}
          description={services.websiteText}
        />
        <ServiceItem
          imgUrl="/home/services/blockchain.svg"
          title={services.blockchainTitle}
          description={services.blockchainText}
        />
      </div>
    </section>
  );
};

interface ServiceItemProps {
  imgUrl: string;
  title: string;
  description: string;
}
const ServiceItem = ({ description, title, imgUrl }: ServiceItemProps) => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="flex flex-col gap-6 md:flex-row md:gap-16 lg:gap-36 md:items-center"
    >
      <Image
        src={imgUrl}
        width={400}
        height={260}
        alt={title}
        className="rounded-md w-full md:w-1/3"
      />
      <div className="space-y-4 md:w-2/3">
        <h2 className="main-gradient bg-clip-text text-transparent font-poppins font-semibold text-xl">
          {title}
        </h2>
        <p className="font-poppins pb-2 text-gray-secondary/80 text-sm md:max-w-[80%]">
          {description}
        </p>
        <div className="w-24 h-[2px] rounded-full main-gradient"></div>
      </div>
    </m.div>
  );
};
