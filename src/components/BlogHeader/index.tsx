"use client";

import { HeaderLink } from "@/components/Header/HeaderLink";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiBars3, HiXMark } from "react-icons/hi2";

export const BlogHeader = () => {
  const [isMenuOpened, setMenuOpened] = useState(false);

  return (
    <AnimatePresence>
      <header
        className={`bg-main-black/80 border-b border-b-gray-800 fixed z-50 flex transition duration-700 items-center justify-between w-screen lg:w-full px-6 py-4 lg:py-6 xl:px-36 `}
      >
        <Link href={"/"} scroll={false}>
          <Image
            width={516}
            height={90.5}
            className="w-40 lg:w-40 py-2"
            alt="Beyonders Logo"
            src="/beyonders-logo-new.webp"
          />
        </Link>
        <div className="hidden md:flex items-center space-x-3 text-xs lg:space-x-6 lg:text-sm">
          <HeaderLink href={"/showcases"} scroll={false}>
            Showcase
          </HeaderLink>
          <HeaderLink href={"/#benefits"} scroll={false}>
            Values
          </HeaderLink>
          <HeaderLink scroll={false} href={"/#services"}>
            Services
          </HeaderLink>
          <HeaderLink scroll={false} href={"/#pricing"}>
            Start Now
          </HeaderLink>
          <HeaderLink scroll={false} href={"/#faq"}>
            Faq
          </HeaderLink>
          <HeaderLink scroll={false} href={"/#contact"}>
            Contact
          </HeaderLink>
          <div className="text-white">•</div>
          <HeaderLink scroll={false} href={"/blog"}>
            Blog
          </HeaderLink>
        </div>
        <div className="flex justify-center items-center md:hidden">
          <button
            onClick={() => setMenuOpened((prev) => !prev)}
            className="border rounded-md border-gray-500 p-1"
          >
            {!isMenuOpened && (
              <motion.div
                key={"animated-open-menu-button"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <HiBars3 className="text-gray-300 h-5 w-5" />
              </motion.div>
            )}
            {isMenuOpened && (
              <motion.div
                key={"animated-close-menu-button"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <HiXMark className="text-gray-300 h-5 w-5" />
              </motion.div>
            )}
          </button>
        </div>
      </header>
      {isMenuOpened && (
        <motion.section
          key={"animated-mobile-menu"}
          initial={{ y: -300 }}
          animate={{ y: 0 }}
          exit={{ y: -300 }}
          transition={{ duration: 0.4 }}
          onClickCapture={() => setMenuOpened((prev) => !prev)}
          className="z-40 p-4 pt-6 fixed top-16 left-0 w-full bg-main-black/90 border-b border-gray-800 flex text-left flex-col"
        >
          {" "}
          <HeaderLink href={"/showcases"} scroll={false}>
            Showcase
          </HeaderLink>
          <HeaderLink href={"/#benefits"} scroll={false}>
            Values
          </HeaderLink>
          <HeaderLink scroll={false} href={"/#services"}>
            Services
          </HeaderLink>
          <HeaderLink scroll={false} href={"/#pricing"}>
            Start Now
          </HeaderLink>
          <HeaderLink scroll={false} href={"/#faq"}>
            Faq
          </HeaderLink>
          <HeaderLink scroll={false} href={"/#contact"}>
            Contact
          </HeaderLink>
          <HeaderLink scroll={false} href={"/blog"}>
            Blog
          </HeaderLink>
        </motion.section>
      )}
    </AnimatePresence>
  );
};
