import { Metadata } from "next";
import { getAllPosts } from "@/services/api";
import { MainPost } from "../../components/blog/MainPost";
import { RegularPost } from "../../components/blog/RegularPost";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Beyonders Blog",
  icons: '/favicon.ico',

  description:
    "Check out the best articles about technology, development, programming, blockchain, business, startups and other relevant topics.",
};

export default function BlogHome() {
  const allPosts = getAllPosts();
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <main className="min-h-screen bg-main-black relative overflow-hidden">
      <Image
        src={"/circle.svg"}
        alt="circle"
        width={500}
        height={500}
        className="z-1 absolute top-1/3 -right-40 opacity-50"
      />
      <div className="w-[100%] mx-auto px-10 lg:px-28">
        <MainPost
          date={heroPost.date}
          imgUrl={heroPost.bannerImage}
          title={heroPost.title}
          description={heroPost.description}
          url={heroPost.slug}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[100%] px-10 lg:px-28">
        {morePosts.map((post) => (
          <RegularPost
            key={post.slug}
            date={post.date}
            imgUrl={post.bannerImage}
            title={post.title}
            description={post.description}
            url={post.slug}
          />
        ))}
      </div>
    </main>
  );
}
