import Image from "next/image";
import Link from "next/link";

export const BlogFooter = () => {
  return (
    <footer className="shadow bg-gray-black border-t mt-16 border-gray-secondary/20">
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
          <ul className="flex flex-wrap capitalize items-center mb-6 text-xs font-medium sm:mb-0 text-gray-400">
            <li>
              <Link
                scroll={false}
                href="/#showcase"
                className="mr-4 hover:underline md:mr-6 "
              >
                Showcase
              </Link>
            </li>
            <li>
              <Link
                scroll={false}
                href="/#benefits"
                className="mr-4 hover:underline md:mr-6 "
              >
                Values
              </Link>
            </li>
            <li>
              <Link
                scroll={false}
                href="/#services"
                className="mr-4 hover:underline md:mr-6"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                scroll={false}
                href="/#pricing"
                className="mr-4 hover:underline md:mr-6 "
              >
                Start Now
              </Link>
            </li>
            <li>
              <Link
                scroll={false}
                href="/#faq"
                className="mr-4 hover:underline md:mr-6 "
              >
                Faq
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="mr-4 hover:underline">
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
