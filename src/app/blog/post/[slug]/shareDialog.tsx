"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Link from "next/link";
import { IoMdShare } from "react-icons/io";
import { Button } from "@/components/common/Button";

function CustomDialog(params: {
  isOpen: boolean | undefined;
  setIsOpen: (arg0: boolean) => void;
}) {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  return (
    <>
      <Transition
        appear={true}
        as={Fragment}
        show={params.isOpen}
        enter="transition-all duration-1000 ease-in-out"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-all duration-300 ease-in-out"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Dialog
          open={params.isOpen}
          onClose={() => params.setIsOpen(false)}
          className="relative z-50"
        >
          <div className="fixed inset-0 flex w-screen items-center justify-center p-0 bg-black/50">
            <Dialog.Panel className="flex flex-col max-w-lg space-y-4 border border-1 border-gray-500 p-8 w-72 rounded-lg bg-[#121212] text-white text-gray-secondary/80">
              <button
                onClick={() => {
                  params.setIsOpen(false);
                  navigator.clipboard.writeText(url);
                }}
                className="flex"
              >
                <FaLink className="mx-2 w-6 h-6" />
                <p>Copy link</p>
              </button>
              <div className="h-[2px] rounded-full bg-gray-200 mt-16" />
              <button onClick={() => params.setIsOpen(false)} className="flex">
                <FaWhatsapp className="mx-2 w-6 h-6" />
                <Link href={`https://wa.me/?text=${url}`} target="_blank">
                  Share on WhatsApp
                </Link>
              </button>
              <button onClick={() => params.setIsOpen(false)} className="flex">
                <BsTwitterX className="mx-2 w-6 h-6" />
                <Link
                  href={`https://twitter.com/intent/tweet?url=${url}`}
                  target="_blank"
                >
                  Share on X
                </Link>
              </button>
              <button onClick={() => params.setIsOpen(false)} className="flex">
                <FaLinkedin className="mx-2 w-6 h-6" />
                <Link
                  href={`https://www.linkedin.com/shareArticle?text=${url}`}
                  target="_blank"
                >
                  Share on LinkedIn
                </Link>
              </button>
            </Dialog.Panel>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export function ShareIcon() {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <IoMdShare
        className="w-8 h-8 float-right my-2 hover:cursor-pointer"
        fill="#31a85d"
        onClick={() => setIsOpen(true)}
      />
      <CustomDialog isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export function ShareButton() {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button
        additionalClassName={`w-full mt-8`}
        onClick={() => setIsOpen(true)}
      >
        SHARE
      </Button>
      <CustomDialog isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
