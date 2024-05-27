import { Metadata } from "next";
import { getAllPosts } from "@/services/api";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Beyonders Blog",
};

export default function BlogHome() {
  const allPosts = getAllPosts();
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <main className="min-h-screen bg-main-black">
      <div className="w-[80%] mx-auto pt-32">
        <Image
          src="/home/services/mobile-apps.svg"
          width={600}
          height={390}
          alt="img"
          className="rounded-md mx-auto"
					/> 
        <h2 className="main-gradient bg-clip-text text-transparent font-poppins font-semibold text-md md:text-xl lg:text-2xl mx-auto text-center py-8">
          It Takes a planet to explore the universe.
        </h2>
        <div className="w-[60%] h-[2px] rounded-full main-gradient mx-auto"></div>
        <p className="w-[100%] mx-auto text-justify font-poppins text-gray-secondary/80 text-md py-8">
          80 days around the world, we'll find a pot of gold just sitting where the rainbow's ending. Time - we'll fight against the time.
          80 days around the world, we'll find a pot of gold just sitting where the rainbow's ending. Time - we'll fight against the time.
          80 days around the world, we'll find a pot of gold just sitting where the rainbow's ending. Time - we'll fight against the time.
          80 days around the world, we'll find a pot of gold just sitting where the rainbow's ending. Time - we'll fight against the time.
          80 days around the world, we'll find a pot of gold just sitting where the rainbow's ending. Time - we'll fight against the time.
          80 days around the world, we'll find a pot of gold just sitting where the rainbow's ending. Time - we'll fight against the time.
          80 days around the world, we'll find a pot of gold just sitting where the rainbow's ending. Time - we'll fight against the time.
          80 days around the world, we'll find a pot of gold just sitting where the rainbow's ending. Time - we'll fight against the time.
          80 days around the world, we'll find a pot of gold just sitting where the rainbow's ending. Time - we'll fight against the time.
          80 days around the world, we'll find a pot of gold just sitting where the rainbow's ending. Time - we'll fight against the time.
          80 days around the world, we'll find a pot of gold just sitting where the rainbow's ending. Time - we'll fight against the time.
          80 days around the world, we'll find a pot of gold just sitting where the rainbow's ending. Time - we'll fight against the time.
          80 days around the world, we'll find a pot of gold just sitting where the rainbow's ending. Time - we'll fight against the time.
          80 days around the world, we'll find a pot of gold just sitting where the rainbow's ending. Time - we'll fight against the time.
          80 days around the world, we'll find a pot of gold just sitting where the rainbow's ending. Time - we'll fight against the time.
          80 days around the world, we'll find a pot of gold just sitting where the rainbow's ending. Time - we'll fight against the time.
        </p>
      </div>
    </main>
  );
}
