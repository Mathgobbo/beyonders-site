import { Button } from "@/components/common/Button";
import { Section } from "@/components/common/Section";
import { SectionDescription } from "@/components/common/SectionDescription";
import { SectionTitle } from "@/components/common/SectionTitle";
import { useI18n } from "@/hooks/useI18n";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
export const Contact = () => {
  const {
    home: { contact },
  } = useI18n();

  return (
    <Section id="contact">
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
      <section className="mt-20">
        <p className="text-xl font-bold mb-4 font-inter text-gray-primary tracking-widest">
          {contact.subtitle2}
        </p>
        <Button additionalClassName="w-full h-14 lg:w-3/4 font-bold">
          Get Started
        </Button>
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
      className="p-4 transition main-gradient rounded-full text-main-white hover:bg-main-green"
    >
      <Logo className="w-8 h-8 fill-current" />
    </a>
  );
};
