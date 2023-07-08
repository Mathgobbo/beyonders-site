import { Button } from "@/components/common/Button";
import { Section } from "@/components/common/Section";
import { SectionDescription } from "@/components/common/SectionDescription";
import { SectionTitle } from "@/components/common/SectionTitle";
import { PIPEFY_FORM_URL } from "@/config/constants";
import { useI18n } from "@/hooks/useI18n";
import Image from "next/image";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
export const Contact = () => {
  const {
    home: { contact },
  } = useI18n();

  return (
    <Section id="contact">
      {" "}
      <Image
        src={"/circle.svg"}
        alt="circle"
        width={360}
        height={360}
        className="absolute top-0 z-[1] -right-40"
      />
      <SectionTitle>{contact.title}</SectionTitle>
      <SectionDescription>{contact.subtitle1}</SectionDescription>
      <div className="flex my-2 space-x-4 mt-8">
        <IconLink
          url="https://www.linkedin.com/company/beyonders-digital-solutions/"
          Logo={FaLinkedinIn}
        />
        <IconLink
          url="https://www.instagram.com/beyonders.oficial/"
          Logo={FaInstagram}
        />
        <IconLink url="https://wa.me/5547999381468" Logo={FaWhatsapp} />
        <IconLink
          url="mailto:matheus@beyonders.com.br?subject=Build a new Project!"
          Logo={MdOutlineMail}
        />
      </div>
      <section className="mt-20 ">
        <p className="text-xl  relative z-10 font-bold mb-4 font-inter text-gray-primary tracking-widest">
          {contact.subtitle2}
        </p>
        <a href={PIPEFY_FORM_URL} target="_blank" rel="noreferrer">
          <Button additionalClassName="w-full h-14 lg:w-3/4 font-bold  relative z-10">
            Get Started
          </Button>
        </a>
      </section>
    </Section>
  );
};

interface IIConLinkProps {
  Logo: Function;
  url: string;
}
const IconLink = ({ Logo, url }: IIConLinkProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="p-4 transition main-gradient rounded-full text-main-white hover:bg-main-green z-10"
    >
      <Logo className="w-8 h-8 fill-current" />
    </a>
  );
};
