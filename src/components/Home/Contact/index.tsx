import { useI18n } from "@/hooks/useI18n";
import { SyntheticEvent, useRef } from "react";
import { FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";
export const Contact = () => {
  const {
    home: { contact },
  } = useI18n();
  const nameRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (!nameRef.current || !messageRef.current) return;
    const a = document.createElement("a");
    a.href = `mailto:beyonders.oficial@gmail.com?subject=${contact.mailSubject}&body=Name: ${nameRef.current.value} | Message: ${messageRef.current.value}`;
    a.click();
  };

  return (
    <section id="contact" className="px-4 py-10 space-y-2 lg:px-36">
      <h2 className="text-2xl font-bold tracking-wider uppercase text-main-white">{contact.title}</h2>
      <p className="text-gray-200">{contact.subtitle1}</p>
      <div className="flex my-2 space-x-4">
        <IconLink url="https://www.linkedin.com/in/matheus-gobbo-bernardi/?locale=en_US" Logo={FaLinkedinIn} />
        <IconLink url="https://www.instagram.com/beyonders.oficial/" Logo={FaInstagram} />
        <IconLink url="https://wa.me/5547999381468" Logo={FaWhatsapp} />
      </div>
      <section className="space-y-3 text-gray-200 lg:text-lg">
        <p>{contact.subtitle2}</p>
        <form onSubmit={onSubmit} className="flex flex-col space-y-3">
          {" "}
          <input
            className="p-2 text-gray-700 transition border-0 rounded-lg outline-none placeholder:text-gray-400 focus:border-2 focus:border-secondary-green focus:ring ring-offset-2 ring-main-green/60"
            type="text"
            placeholder={contact.namePlaceholder}
            ref={nameRef}
            required
          />
          <textarea
            className="p-2 text-gray-700 transition border-0 rounded-lg outline-none placeholder:text-gray-400 focus:border-2 focus:border-secondary-green focus:ring ring-offset-2 ring-main-green/60"
            cols={30}
            rows={6}
            placeholder={contact.messagePlaceholder}
            ref={messageRef}
            required
          ></textarea>
          <div>
            <button
              className="px-8 py-2 uppercase transition border-2 rounded-lg bg-secondary-green hover:bg-main-green border-main-white"
              type="submit"
            >
              {contact.submitButtonLabel}
            </button>
          </div>
        </form>
      </section>
    </section>
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
      className="p-4 transition border rounded-full text-main-white border-main-white bg-secondary-green hover:bg-main-green"
    >
      <Logo className="w-8 h-8 fill-current" />
    </a>
  );
};
