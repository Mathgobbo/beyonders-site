import Image from "next/image";
import Link from "next/link";
import { ReactNode, useCallback, useEffect, useState } from "react";

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
      <div className="flex space-x-6 text-xs lg:text-sm">
        <HeaderLink href={"#showcase"}>{dictionary.showcase}</HeaderLink>
        <HeaderLink href={"#services"}>{dictionary.services}</HeaderLink>
        <HeaderLink href={"#team"}>{dictionary.team}</HeaderLink>
        <HeaderLink href={"#contact"}>{dictionary.contact}</HeaderLink>
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
