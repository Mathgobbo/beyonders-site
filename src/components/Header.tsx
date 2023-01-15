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
  // const [isOnTop, setIsOnTop] = useState(true);

  // const scrollListener = useCallback(() => {
  //   if (window.scrollY === 0 && isOnTop === false) setIsOnTop(true);
  //   else if (window.scrollY !== 0 && isOnTop === true) setIsOnTop(false);
  // }, [isOnTop]);

  // useEffect(() => {
  //   window.addEventListener("scroll", scrollListener);
  //   return () => window.removeEventListener("scroll", scrollListener);
  // }, [isOnTop, scrollListener]);

  return (
    <header
      className={`fixed z-50 flex transition duration-700 items-center justify-between w-full px-4 py-4 xl:px-24`}
    >
      <Link href={""}>
        <Image width={130} height={90} alt="Beyonders Logo" src="/beyonders-logo-white.png" />
      </Link>
      <div className="flex space-x-6 text-sm">
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
    <a className="uppercase transition hover:text-main-green text-main-white" href={href}>
      {children}
    </a>
  );
};
