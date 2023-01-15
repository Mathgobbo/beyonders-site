import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, ReactNode, useCallback, useEffect, useState } from "react";

type HeaderDictionary = {
  showcase: string;
  team: string;
  services: string;
  contact: string;
};

export const Header = ({ dictionary }: { dictionary: HeaderDictionary }) => {
  const [isOnTop, setIsOnTop] = useState(true);

  const scrollListener = useCallback(() => {
    if (window.scrollY === 0 && isOnTop === false) setIsOnTop(true);
    else if (window.scrollY !== 0 && isOnTop === true) setIsOnTop(false);
  }, [isOnTop]);

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  }, [isOnTop, scrollListener]);

  return (
    <header
      className={`fixed z-50 space-y-2 lg:space-y-0 flex flex-col lg:flex-row transition duration-700 items-center lg:justify-between w-screen lg:w-full px-6 py-4 xl:px-36 ${
        isOnTop ? "bg-transparent" : "bg-main-black border-b border-secondary-green"
      }`}
    >
      <Link href={""}>
        <Image width={130} height={90} className="w-24 h-16" alt="Beyonders Logo" src="/beyonders-logo-white.png" />
      </Link>
      <div className="flex items-center space-x-6 text-xs lg:text-sm">
        <HeaderLink href={"#showcase"}>{dictionary.showcase}</HeaderLink>
        <HeaderLink href={"#services"}>{dictionary.services}</HeaderLink>
        <HeaderLink href={"#team"}>{dictionary.team}</HeaderLink>
        <HeaderLink href={"#contact"}>{dictionary.contact}</HeaderLink>
        <LocaleSwitcher />
      </div>
    </header>
  );
};

const HeaderLink = ({ children, href }: { children: ReactNode; href: string }) => {
  return (
    <a className="uppercase transition hover:text-main-green/80 text-main-white" href={href}>
      {children}
    </a>
  );
};

const LocaleSwitcher = () => {
  const router = useRouter();
  const { pathname, asPath, query, locale, defaultLocale } = router;
  const options = {
    en: {
      imgUrl: "/flags/eua.webp",
      alt: "EN",
      locale: "en",
    },
    pt: {
      imgUrl: "/flags/brazil.png",
      alt: "PT",
      locale: "pt",
    },
  };

  const selectedOption = options[router.locale as "en" | "pt"] || options[router.defaultLocale as "en" | "pt"];

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="flex p-2 border border-main-green/20">
        <Image src={selectedOption.imgUrl} alt={selectedOption.alt} className="w-4 h-3" width={64} height={40} />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 divide-y shadow-lg w-ful focus:outline-none">
          {Object.values(options)
            .filter((option) => option.locale !== selectedOption.locale)
            .map((option) => (
              <Menu.Item key={option.locale}>
                <button
                  onClick={() => router.push({ pathname, query }, asPath, { locale: option.locale })}
                  className="p-2 border bg-main-black border-main-green/20"
                >
                  {" "}
                  <Image src={option.imgUrl} alt={option.alt} className="w-4 h-3" width={64} height={40} />
                </button>
              </Menu.Item>
            ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
