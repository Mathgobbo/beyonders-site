import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const Footer = () => {
  return (
    <footer className="shadow bg-gray-black border-t mt-16 border-gray-secondary/20 z-50 ">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
          <div className="flex flex-col max-w-xs">
            <Link href="/" className="flex items-center mb-4">
              <Image
                width={516}
                height={90.5}
                className="w-40 lg:w-56 py-4"
                alt="Beyonders Logo"
                src="/beyonders-logo-new.webp"
              />
            </Link>
            <p className="text-gray-400 text-xs mb-4">
              Beyonders is a creative digital agency focused on delivering
              innovative solutions for startups and businesses. We help you
              grow, engage, and succeed.
            </p>
            <div className="flex gap-3 mt-2">
              <a
                href="https://www.linkedin.com/company/beyonders-digital-solutions/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-white transition"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="inline"
                >
                  <path d="M18.146 18.146h-3.08v-5.569c0-1.328-.025-3.037-1.85-3.037-1.85 0-2.134 1.445-2.134 2.939v5.667h-3.08V7.5h2.958v1.453h.042c.412-.78 1.42-1.603 2.924-1.603 3.127 0 3.703 2.057 3.703 4.734v6.062zM3.339 6.047a1.785 1.785 0 1 1 0-3.57 1.785 1.785 0 0 1 0 3.57zm1.54 12.099H1.8V7.5h3.08v10.646zM19.615 0H.384C.172 0 0 .172 0 .384v19.232C0 19.828.172 20 .384 20h19.232c.212 0 .384-.172.384-.384V.384A.384.384 0 0 0 19.615 0z" />
                </svg>
              </a>
              {/* <a
                href="https://twitter.com/beyondersagency"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-gray-400 hover:text-white transition"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="inline"
                >
                  <path d="M20 3.924a8.19 8.19 0 0 1-2.357.646A4.117 4.117 0 0 0 19.448 2.3a8.224 8.224 0 0 1-2.605.996A4.107 4.107 0 0 0 9.85 6.03a11.65 11.65 0 0 1-8.457-4.287a4.106 4.106 0 0 0 1.27 5.482A4.073 4.073 0 0 1 .8 6.575v.052a4.106 4.106 0 0 0 3.292 4.025a4.095 4.095 0 0 1-1.853.07a4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 0 17.544a11.616 11.616 0 0 0 6.29 1.844c7.547 0 11.675-6.155 11.675-11.495c0-.175-.004-.349-.012-.522A8.18 8.18 0 0 0 20 3.924z" />
                </svg>
              </a> */}
              <a
                href="https://instagram.com/beyonders.oficial"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-400 hover:text-white transition"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="inline"
                >
                  <path d="M10 2.163c2.675 0 2.987.01 4.034.058c.997.046 1.538.21 1.897.35c.477.185.82.406 1.18.766c.36.36.581.703.766 1.18c.14.359.304.9.35 1.897c.048 1.047.058 1.359.058 4.034s-.01 2.987-.058 4.034c-.046.997-.21 1.538-.35 1.897a2.978 2.978 0 0 1-.766 1.18a2.978 2.978 0 0 1-1.18.766c-.359.14-.9.304-1.897.35c-1.047.048-1.359.058-4.034.058s-2.987-.01-4.034-.058c-.997-.046-1.538-.21-1.897-.35a2.978 2.978 0 0 1-1.18-.766a2.978 2.978 0 0 1-.766-1.18c-.14-.359-.304-.9-.35-1.897C2.173 12.987 2.163 12.675 2.163 10s.01-2.987.058-4.034c.046-.997.21-1.538.35-1.897a2.978 2.978 0 0 1 .766-1.18a2.978 2.978 0 0 1 1.18-.766c.359-.14.9-.304 1.897-.35C7.013 2.173 7.325 2.163 10 2.163zm0-2.163C7.29 0 6.956.012 5.908.06c-1.05.048-1.77.21-2.4.44a5.978 5.978 0 0 0-2.18 1.41A5.978 5.978 0 0 0 .5 4.508c-.23.63-.392 1.35-.44 2.4C.012 6.956 0 7.29 0 10s.012 3.044.06 4.092c.048 1.05.21 1.77.44 2.4a5.978 5.978 0 0 0 1.41 2.18a5.978 5.978 0 0 0 2.18 1.41c.63.23 1.35.392 2.4.44C6.956 19.988 7.29 20 10 20s3.044-.012 4.092-.06c1.05-.048 1.77-.21 2.4-.44a5.978 5.978 0 0 0 2.18-1.41a5.978 5.978 0 0 0 1.41-2.18c.23-.63.392-1.35.44-2.4c.048-1.048.06-1.382.06-4.092s-.012-3.044-.06-4.092c-.048-1.05-.21-1.77-.44-2.4a5.978 5.978 0 0 0-1.41-2.18a5.978 5.978 0 0 0-2.18-1.41c-.63-.23-1.35-.392-2.4-.44C13.044.012 12.71 0 10 0z" />
                  <path d="M10 4.838A5.162 5.162 0 1 0 10 15.162A5.162 5.162 0 1 0 10 4.838zm0 8.523A3.362 3.362 0 1 1 10 6.115a3.362 3.362 0 0 1 0 6.246zm6.406-8.845a1.2 1.2 0 1 0 0 2.4a1.2 1.2 0 0 0 0-2.4z" />
                </svg>
              </a>
              <a
                href="https://github.com/beyonders-oficial"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-400 hover:text-white transition"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="inline"
                >
                  <path d="M10 .3a10 10 0 0 0-3.162 19.496c.5.092.682-.217.682-.482c0-.237-.009-.868-.013-1.703c-2.776.603-3.363-1.338-3.363-1.338c-.454-1.154-1.11-1.462-1.11-1.462c-.908-.62.069-.608.069-.608c1.004.07 1.532 1.032 1.532 1.032c.892 1.529 2.341 1.088 2.91.832c.092-.647.35-1.088.636-1.339c-2.22-.253-4.555-1.11-4.555-4.943c0-1.091.39-1.984 1.029-2.683c-.103-.253-.446-1.272.098-2.65c0 0 .84-.269 2.75 1.025a9.564 9.564 0 0 1 2.5-.336c.849.004 1.705.115 2.5.336c1.909-1.294 2.748-1.025 2.748-1.025c.546 1.378.202 2.397.1 2.65c.64.699 1.028 1.592 1.028 2.683c0 3.842-2.338 4.687-4.566 4.936c.359.309.678.919.678 1.852c0 1.336-.012 2.417-.012 2.747c0 .267.18.577.688.479A10.002 10.002 0 0 0 10 .3z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-gray-200 text-sm font-semibold mb-4">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-xs font-medium text-gray-400">
              <div>
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link
                      scroll={false}
                      href="/showcases"
                      className="hover:underline"
                    >
                      Showcase
                    </Link>
                  </li>
                  <li>
                    <Link
                      scroll={false}
                      href="/#benefits"
                      className="hover:underline"
                    >
                      Values
                    </Link>
                  </li>
                  <li>
                    <Link
                      scroll={false}
                      href="/#services"
                      className="hover:underline"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      scroll={false}
                      href="/#pricing"
                      className="hover:underline"
                    >
                      Start Now
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link
                      scroll={false}
                      href="/#faq"
                      className="hover:underline"
                    >
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="/#contact" className="hover:underline">
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
            </div>
            <div className="bg-white grid h-10 w-60 place-items-center mt-4 overflow-hidden">
              <Script
                src="https://widget.clutch.co/static/js/widget.js"
                defer
              />
              <div
                className="clutch-widget"
                data-url="https://widget.clutch.co"
                data-widget-type="7"
                data-height="65"
                data-nofollow="false"
                data-expandifr="true"
                data-scale="100"
                data-clutchcompany-id="2439513"
              ></div>
            </div>
          </div>
        </div>
        <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
        <span className="block text-sm sm:text-center text-gray-400">
          © 2025{" "}
          <a href="https://beyonders.agency/" className="hover:underline">
            Beyonders™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
