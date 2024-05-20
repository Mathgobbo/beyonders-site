import { Header } from "@/components/Header";
import { HeaderLink } from "@/components/Header/HeaderLink";
import { BlogMobileHeader } from "@/components/Header/BlogMobileHeader";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/services/api";

export const metadata: Metadata = {
  title: "Beyonders Blog",
};

export default function BlogHome() {
  const allPosts = getAllPosts();
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <main className="min-h-screen bg-main-black">
      <header
        className={`bg-main-black/80 border-b border-b-gray-800 fixed z-50 flex transition duration-700 items-center justify-between w-screen lg:w-full px-6 py-4 lg:py-6 xl:px-36 `}
      >
        <Link href={"/"}>
          <Image
            width={516}
            height={90.5}
            className="w-40 lg:w-40 py-2"
            alt="Beyonders Logo"
            src="/beyonders-logo-new.webp"
          />
        </Link>
        <div className="hidden md:flex items-center space-x-3 text-xs lg:space-x-6 lg:text-sm">
          <HeaderLink href={"/blog"} scroll={false}>
            Blog
          </HeaderLink>
          <HeaderLink href={"/blog/all-posts"} scroll={false}>
            All posts
          </HeaderLink>
          <HeaderLink scroll={false} href={"/"}>
            Home
          </HeaderLink>
          {/* <LocaleSwitcher /> */}
        </div>

        <BlogMobileHeader />
      </header>
    </main>
  );
}
