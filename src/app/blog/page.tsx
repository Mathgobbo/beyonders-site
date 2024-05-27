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
          date="December 2021"
          imgUrl="/home/services/mobile-apps.svg"
          title="It Takes a planet to explore the universe. It Takes a planet to explore the universe."
          description=" 80 days around the world, we'll find a pot of gold just sitting where the rainbow's ending. Time - we'll fight against the time. "
        />
      </div>
      <div className="w-[40%] h-[2px] rounded-full main-gradient mx-auto"></div>
      <div className="pt-16 grid px-10 grid-cols-1 md:pt-8 md:grid-cols-2 lg:grid-cols-3 w-[90%] mx-auto">
        {[1,2,3,4,5,6,7,8,9].map(()=>(
          <RegularPost
          date="December 2021"
          imgUrl="/home/services/mobile-apps.svg"
          title="It Takes a planet to explore the universe."
          description="80 days around the world, we'll find a pot of gold just sitting where the rainbow's ending. Time - we'll fight against the time."
         />
        ))}
       </div>
    </main>
  );
}
