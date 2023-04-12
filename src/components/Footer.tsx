import { useI18n } from "@/hooks/useI18n";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  const { header } = useI18n();

  return (
    <footer className=" shadow bg-gray-black border-t border-secondary-green">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0"
          >
            <Image
              width={516}
              height={90.5}
              className="w-40 lg:w-56"
              alt="Beyonders Logo"
              src="/beyonders-logo-new.webp"
            />
          </a>
          <ul className="flex flex-wrap capitalize items-center mb-6 text-sm font-medium sm:mb-0 text-gray-400">
            <li>
              <Link
                scroll={false}
                href="/#showcase"
                className="mr-4 hover:underline md:mr-6 "
              >
                {header.showcase}
              </Link>
            </li>
            <li>
              <Link
                scroll={false}
                href="/#services"
                className="mr-4 hover:underline md:mr-6"
              >
                {header.services}
              </Link>
            </li>
            <li>
              <Link
                scroll={false}
                href="/#contact"
                className="mr-4 hover:underline md:mr-6 "
              >
                {header.contact}
              </Link>
            </li>
            <li>
              <Link href="/team" className="hover:underline">
                {header.team}
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6  sm:mx-auto border-gray-700 lg:my-8" />
        <span className="block text-sm sm:text-center text-gray-400">
          © 2023{" "}
          <a href="https://beyonders.com.br/" className="hover:underline">
            Beyonders™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
