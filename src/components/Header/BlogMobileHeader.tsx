"use client";

import { useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { AnimatePresence, motion } from "framer-motion";
import { HeaderLink } from "./HeaderLink";

export const BlogMobileHeader = () => {
  const [isMenuOpened, setMenuOpened] = useState(false);

  return (
    <AnimatePresence>
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
      {isMenuOpened && (
        <motion.section
          key={"animated-mobile-menu"}
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          exit={{ x: "100vw" }}
          transition={{ duration: 0.4 }}
          onClickCapture={() => setMenuOpened((prev) => !prev)}
          className="z-40 p-4 pt-6 fixed top-16 left-0 w-full bg-main-black/90 border-b border-gray-800 flex text-left flex-col"
        >
          {" "}
          <HeaderLink href={"/blog"} scroll={false}>
            Blog
          </HeaderLink>
          <HeaderLink scroll={false} href={"/"}>
            Home
          </HeaderLink>
          {/* <LocaleSwitcher /> */}
        </motion.section>
      )}
    </AnimatePresence>
  );
};
