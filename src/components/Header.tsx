import { useI18n } from "@/hooks/useI18n";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, ReactNode, useCallback, useEffect, useState } from "react";

export const Header = ({ alwaysShowBorder }: { alwaysShowBorder?: boolean }) => {
  const { header: dictionary } = useI18n();
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
        alwaysShowBorder || !isOnTop ? "bg-main-black border-b border-secondary-green" : "bg-transparent"
      }`}
    >
      <Link href={""}>
        <Image width={96} height={60} className="w-24 h-[60px]" alt="Beyonders Logo" src="/beyonders-logo-white.webp" />
      </Link>
      <div className="flex items-center space-x-3 text-xs lg:space-x-6 lg:text-sm">
        <HeaderLink href={"/#showcase"}>{dictionary.showcase}</HeaderLink>
        <HeaderLink href={"/#services"}>{dictionary.services}</HeaderLink>
        <HeaderLink href={"/team"}>{dictionary.team}</HeaderLink>
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
  const { pathname, asPath, query } = router;
  const options = {
    en: {
      imgUrl: "/flags/eua.webp",
      alt: "EN",
      locale: "en",
    },
    pt: {
      imgUrl: "/flags/brazil.webp",
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
