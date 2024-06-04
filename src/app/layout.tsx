import { Inter, Poppins } from "@next/font/google";
import "../styles/globals.css";
import { HeaderLink } from "@/components/Header/HeaderLink";
import { BlogMobileHeader } from "@/components/Header/BlogMobileHeader";
import Image from "next/image";
import { BlogFooter } from "@/components/blog/BlogFooter";
import Link from "next/link";
export const metadata = {
  title: "Beyonders Blog",
  description:
    "Discover more about the software development world, learn and have new ideas.",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable}  bg-main-black`}>
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
            <HeaderLink href={"/#showcase"} scroll={false}>
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
          <BlogMobileHeader />
        </header>
        {children}
        <BlogFooter />
      </body>
    </html>
  );
}
