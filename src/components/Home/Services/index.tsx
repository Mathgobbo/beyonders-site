import Image from "next/image";

export const Services = () => {
  return (
    <section className="px-24 py-10">
      <h2 className="mb-6 text-2xl tracking-wider uppercase text-main-white">Our services</h2>
      <div>
        <ServiceSection
          imgUrl="/home/services/websites.png"
          iconUrl="/home/services/websites-icon.svg"
          title="Websites"
          label=" We build responsive, beautiful, and SEO optimized websites."
        />
        <ServiceSection
          invert
          imgUrl="/home/services/websites.png"
          iconUrl="/home/services/websites-icon.svg"
          title="Websites"
          label=" We build responsive, beautiful, and SEO optimized websites."
        />
        <ServiceSection
          imgUrl="/home/services/websites.png"
          iconUrl="/home/services/websites-icon.svg"
          title="Websites"
          label=" We build responsive, beautiful, and SEO optimized websites."
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
  const MainImage = () => (
    <Image src={imgUrl} className="w-1/3 my-2 rounded-xl" alt="websites" width={600} height={380} />
  );
  const TextSection = () => (
    <div className="flex flex-col justify-center w-1/3">
      <h3 className="text-2xl font-bold uppercase text-main-white">{title}</h3>
      <p className="text-lg uppercase text-main-white/90">{label}</p>
    </div>
  );

  const FirstItem = !invert ? MainImage : TextSection;
  const LastItem = invert ? MainImage : TextSection;

  return (
    <div className="flex px-8">
      <FirstItem />
      <div className="relative flex justify-center w-1/3">
        <div className="w-1 h-full bg-main-green" />
        <div className="absolute w-24 h-24 p-2 transform -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 bg-main-black">
          <div className="grid w-full h-full rounded-full place-items-center bg-main-green">
            <Image src={iconUrl} className="w-12 h-12 rounded-xl" alt="websites icon" width={87} height={87} />
          </div>
        </div>
      </div>
      <LastItem />
    </div>
  );
};
