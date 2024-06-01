import { Metadata } from "next";
import { getAllPosts, getPostBySlug } from "@/services/api";
import Image from "next/image";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import gfm from 'remark-breaks';
import rehypeRaw from 'rehype-raw'
import { format } from "date-fns";
import { RegularPost } from "@/components/blog/RegularPost";

export const metadata: Metadata = {
  title: "Beyonders Blog",
};

export default function Post({ params }: Params) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const allPosts = getAllPosts();
  const index = allPosts.findIndex(item => item.slug==post.slug);
  allPosts.splice(index, 1);
  const test = [...allPosts,...allPosts,...allPosts,...allPosts,...allPosts]
  const recentPost = test.slice(0,3)
  

  return (
    <main className="min-h-screen bg-main-black">
      <div className="w-[85%] sm:w-[600px] mx-auto pt-32">
        <Image
          src={post.bannerImage}
          width={600}
          height={390}
          alt={post.title}
          className="rounded-md mx-auto"
					/> 
        <h2 className="main-gradient bg-clip-text text-transparent font-poppins font-semibold text-2xl py-8">
          {post.title}
        </h2>
        <div className="h-[2px] rounded-full main-gradient mx-auto"/>
        <div className="flow-root mt-2 mb-2">
          <div className="float-left">
            <Image
              width={45}
              height={45}
              src={post.authorPicture}
              alt={post.title}
              className="rounded-full mr-4 float-left"
              /> 
            <div className="float-right ">
              <p className="mx-auto main-gradient bg-clip-text text-transparent font-poppins font-semibold">
                {post.author}
              </p>
              <p className="mx-auto main-gradient bg-clip-text text-transparent font-poppins font-semibold">
                {format(new Date(post.date), "MMM dd, yyyy")}
              </p>
            </div>
          </div>
          <Image
            width={32}
            height={32}
            src="/share.svg"
            alt="share"
            className="rounded-full float-right my-2"
            /> 
        </div>
        <div className="h-[2px] rounded-full main-gradient mx-auto"/>
        <div className="flow-root mt-4">
          {post.tags.map((tag) => (<div className="float-left border-[#31a85d] px-2 m-1 main-gradient bg-clip-text text-transparent font-poppins border rounded-full">{tag}</div>))}
        </div>
        <div className="mx-auto text-justify font-poppins text-gray-secondary/80 text-md py-4">
          <ReactMarkdown remarkPlugins={[gfm]} rehypePlugins={[rehypeRaw]} children={post.content} />
        </div>
      </div>
      <div className="w-full bg-gray-800 mt-16">
        <div className="h-[2px] rounded-full main-gradient mx-auto"/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[100%] px-10 md:px-0">
          {recentPost.map((post)=>(
            <RegularPost
            date={post.date}
            imgUrl={post.bannerImage}
            title={post.title}
            description={post.description}
            url={post.slug}
          />
          ))}
        </div>
        <div className="h-[2px] rounded-full main-gradient mx-auto"/>
      </div>
    </main>
  );
}
