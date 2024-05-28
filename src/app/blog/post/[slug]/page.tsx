import { Metadata } from "next";
import { getPostBySlug } from "@/services/api";
import Image from "next/image";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import gfm from 'remark-breaks';
import rehypeRaw from 'rehype-raw'

export const metadata: Metadata = {
  title: "Beyonders Blog",
};

export default function Post({ params }: Params) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-main-black">
      <div className="w-[80%] mx-auto pt-32">
        <Image
          src={post.bannerImage}
          width={600}
          height={390}
          alt={post.title}
          className="rounded-md mx-auto"
					/> 
        <h2 className="main-gradient bg-clip-text text-transparent font-poppins font-semibold text-md md:text-xl lg:text-2xl mx-auto text-center py-8">
          {post.title}
        </h2>
        <div className="w-[60%] h-[2px] rounded-full main-gradient mx-auto"></div>
        <div className="w-[100%] lg:w-[70%] mx-auto text-justify font-poppins text-gray-secondary/80 text-md py-8">
          <ReactMarkdown remarkPlugins={[gfm]} rehypePlugins={[rehypeRaw]} children={post.content} />
        </div>
      </div>
    </main>
  );
}
