import { Metadata } from "next";
import { getAllPosts } from "@/services/api";
import { MainPost } from "../../components/blog/MainPost";
import { RegularPost } from "../../components/blog/RegularPost";

export const metadata: Metadata = {
  title: "Beyonders Blog",
};

export default function BlogHome() {
  const allPosts = getAllPosts();
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <main className="min-h-screen bg-main-black">
      <div className="w-[90%] mx-auto px-10">
        <MainPost
          date={heroPost.date}
          imgUrl={heroPost.bannerImage}
          title={heroPost.title}
          description={heroPost.description}
          url={heroPost.slug}
        />
      </div>
      <div className="w-[40%] h-[2px] rounded-full main-gradient mx-auto"></div>
      <div className="pt-16 grid px-10 grid-cols-1 md:pt-8 md:grid-cols-2 lg:grid-cols-3 w-[90%] mx-auto">
        {morePosts.map((post)=>(
          <RegularPost
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
