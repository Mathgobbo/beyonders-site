import Image from "next/image";
import Link from "next/link";

export const BlogFooter = () => {
  return (
    <footer className="shadow bg-gray-black border-t mt-16 border-gray-secondary/20 z-50 ">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/" className="flex items-center mb-4 sm:mb-0">
            <Image
              width={516}
              height={90.5}
              className="w-40 lg:w-56 py-4"
              alt="Beyonders Logo"
              src="/beyonders-logo-new.webp"
            />
          </Link>
          <ul className="flex flex-wrap capitalize gap-3 items-center mb-6 text-xs font-medium sm:mb-0 text-gray-400">
            <li>
              <Link
                scroll={false}
                href="/#showcase"
                className=" hover:underline"
              >
                Showcase
              </Link>
            </li>
            <li>
              <Link
                scroll={false}
                href="/#benefits"
                className=" hover:underline"
              >
                Values
              </Link>
            </li>
            <li>
              <Link
                scroll={false}
                href="/#services"
                className=" hover:underline"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                scroll={false}
                href="/#pricing"
                className=" hover:underline"
              >
                Start Now
              </Link>
            </li>
            <li>
              <Link scroll={false} href="/#faq" className=" hover:underline">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/#contact" className=" hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:underline">
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6  sm:mx-auto border-gray-700 lg:my-8" />
        <span className="block text-sm sm:text-center text-gray-400">
          © 2025{" "}
          <a href="https://beyonders.com.br/" className="hover:underline">
            Beyonders™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
