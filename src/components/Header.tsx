import { useI18n } from "@/hooks/useI18n";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, ReactNode, useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { AnimatePresence, m } from "framer-motion";

export const Header = () => {
  const { header: dictionary } = useI18n();
  const [isMenuOpened, setMenuOpened] = useState(false);
  return (
    <AnimatePresence>
      <header
        className={`bg-main-black/80 border-b border-b-gray-800 fixed z-50 flex transition duration-700 items-center justify-between w-screen lg:w-full px-6 py-4 lg:py-6 xl:px-36 `}
      >
        <Link href={"/"}>
          <Image
            width={516}
            height={90.5}
            className="w-40 lg:w-40 py-2"
            alt="Beyonders Logo"
            src="/beyonders-logo-new.webp"
          />
        </Link>

        <div className="hidden md:flex items-center space-x-3 text-xs lg:space-x-6 lg:text-sm">
          <HeaderLink href={"/#showcase"} scroll={false}>
            {dictionary.showcase}
          </HeaderLink>
          <HeaderLink href={"/#benefits"} scroll={false}>
            {dictionary.benefits}
          </HeaderLink>
          <HeaderLink scroll={false} href={"/#services"}>
            {dictionary.services}
          </HeaderLink>
          <HeaderLink scroll={false} href={"/#pricing"}>
            {dictionary.pricing}
          </HeaderLink>
          <HeaderLink scroll={false} href={"/#faq"}>
            {dictionary.faq}
          </HeaderLink>
          <HeaderLink scroll={false} href={"/#contact"}>
            {dictionary.contact}
          </HeaderLink>
          {/* <LocaleSwitcher /> */}
        </div>

        <div className="flex justify-center items-center md:hidden">
          <button
            onClick={() => setMenuOpened((prev) => !prev)}
            className="border rounded-md border-gray-500 p-1"
          >
            {!isMenuOpened && (
              <m.div
                key={"animated-open-menu-button"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <HiBars3 className="text-gray-300 h-5 w-5" />
              </m.div>
            )}
            {isMenuOpened && (
              <m.div
                key={"animated-close-menu-button"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <HiXMark className="text-gray-300 h-5 w-5" />
              </m.div>
            )}
          </button>
        </div>
      </header>

      {isMenuOpened && (
        <m.section
          key={"animated-mobile-menu"}
          initial={{ y: -300 }}
          animate={{ y: 0 }}
          exit={{ y: -300 }}
          transition={{ duration: 0.4 }}
          onClickCapture={() => setMenuOpened((prev) => !prev)}
          className="z-40 p-4 pt-6 fixed top-16 w-full bg-main-black/90 border-b border-gray-800 flex text-left flex-col"
        >
          {" "}
          <HeaderLink href={"/#showcase"} scroll={false}>
            {dictionary.showcase}
          </HeaderLink>
          <HeaderLink href={"/#benefits"} scroll={false}>
            {dictionary.benefits}
          </HeaderLink>
          <HeaderLink scroll={false} href={"/#services"}>
            {dictionary.services}
          </HeaderLink>
          <HeaderLink scroll={false} href={"/#pricing"}>
            {dictionary.pricing}
          </HeaderLink>
          <HeaderLink scroll={false} href={"/#faq"}>
            {dictionary.faq}
          </HeaderLink>
          <HeaderLink scroll={false} href={"/#contact"}>
            {dictionary.contact}
          </HeaderLink>
          {/* <LocaleSwitcher /> */}
        </m.section>
      )}
    </AnimatePresence>
  );
};

const HeaderLink = ({
  children,
  href,
  scroll = true,
}: {
  children: ReactNode;
  href: string;
  scroll?: boolean;
}) => {
  return (
    <Link
      scroll={scroll}
      className="font-poppins p-2  rounded-md lg:text-base md:hover:bg-transparent hover:border md:hover:border-none border-gray-600  md:p-0 tracking-wide capitalize md:uppercase transition md:hover:text-white text-main-white/80"
      href={href}
    >
      {children}
    </Link>
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

  const selectedOption =
    options[router.locale as "en" | "pt"] ||
    options[router.defaultLocale as "en" | "pt"];

  return (
    <Menu as="div" className="relative text-left hidden md:inline-block">
      <Menu.Button className="flex p-2 border border-main-green/20">
        <Image
          src={selectedOption.imgUrl}
          alt={selectedOption.alt}
          className="w-4 h-3"
          width={64}
          height={40}
        />
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
                  onClick={() =>
                    router.push({ pathname, query }, asPath, {
                      locale: option.locale,
                    })
                  }
                  className="p-2 border bg-main-black border-main-green/20"
                >
                  {" "}
                  <Image
                    src={option.imgUrl}
                    alt={option.alt}
                    className="w-4 h-3"
                    width={64}
                    height={40}
                  />
                </button>
              </Menu.Item>
            ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
