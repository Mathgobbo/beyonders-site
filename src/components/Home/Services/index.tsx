import { useI18n } from "@/hooks/useI18n";
import Image from "next/image";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

export const Services = () => {
  const {
    home: { services },
  } = useI18n();
  return (
    <section id="services" className="px-4 py-10 lg:px-36">
      <h2 className="mb-6 text-2xl font-bold tracking-wider uppercase text-main-white">{services.title}</h2>
      <div className="relative">
        <Image
          src="/home/services/dots.svg"
          alt="Dots"
          width={210}
          height={205}
          className="absolute top-0 right-0 w-12 h-12 lg:w-28 lg:h-28"
        />
        <ServiceSection
          imgUrl="/home/services/websites.png"
          iconUrl="/home/services/websites-icon.svg"
          title={services.websiteTitle}
          label={services.websiteText}
        />
        <ServiceSection
          invert
          imgUrl="/home/services/mobile-apps.png"
          iconUrl="/home/services/mobile-apps-icon.svg"
          title={services.mobileAppsTitle}
          label={services.mobileAppsText}
        />
        <ServiceSection
          imgUrl="/home/services/blockchain.png"
          iconUrl="/home/services/blockchain-icon.svg"
          title={services.blockchainTitle}
          label={services.blockchainText}
        />
      </div>
    </section>
  );
};

interface IServiceSectionProps {
  imgUrl: string;
  iconUrl: string;
  title: string;
  label: string;
  invert?: boolean;
}
const ServiceSection = ({ iconUrl, imgUrl, label, title, invert }: IServiceSectionProps) => {
  const isLg = useMediaQuery({ minWidth: 1024 });

  const MainImage = () => <Image src={imgUrl} className="my-2 rounded-xl" alt="websites" width={600} height={380} />;
  const TextSection = () => (
    <div className="flex flex-col justify-center h-full py-10 space-y-2 lg:p-0">
      <h3 className="font-bold uppercase lg:text-2xl text-main-white">{title}</h3>
      <p className="text-xs leading-4 lg:leading-5 lg:text-base text-main-white/90">{label}</p>
    </div>
  );

  const FirstItem = !invert ? MainImage : TextSection;
  const LastItem = invert && isLg ? MainImage : TextSection;

  return (
    <div className="flex">
      <motion.div
        className="hidden w-5/12 lg:block"
        transition={{ duration: 1.2 }}
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <FirstItem />
      </motion.div>
      <div className="relative flex justify-center w-4/12 lg:2/12">
        <div className="w-1 h-full bg-main-green" />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="absolute w-20 h-20 p-2 transform -translate-x-1/2 -translate-y-1/2 rounded-full lg:w-24 lg:h-24 top-1/2 left-1/2 bg-main-black"
        >
          <div className="grid w-full h-full rounded-full place-items-center bg-main-green">
            <Image src={iconUrl} className="w-10 h-10" alt={title + " icon"} width={87} height={87} />
          </div>
        </motion.div>
      </div>
      <motion.div
        transition={{ duration: 1.2 }}
        className="w-8/12 lg:w-5/12"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <LastItem />
      </motion.div>
    </div>
  );
};
