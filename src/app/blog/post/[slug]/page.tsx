import { getAllPosts, getPostBySlug } from "@/services/api";
import Image from "next/image";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import gfm from "remark-breaks";
import rehypeRaw from "rehype-raw";
import { format } from "date-fns";
import { RegularPost } from "@/components/blog/RegularPost";
import { ShareIcon, ShareButton } from "./shareDialog";
import { Metadata } from "next";

interface PageProps {
  params: { slug: string };
}

export default function Post({ params }: PageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const allPosts = getAllPosts();
  const index = allPosts.findIndex((item) => item.slug == post.slug);
  allPosts.splice(index, 1);
  const recentPost = allPosts.slice(0, 4);

  return (
    <main className="min-h-screen bg-main-black">
      <div className="w-[85%] max-w-2xl mx-auto pt-32">
        <Image
          src={post.bannerImage}
          width={700}
          height={390}
          alt={post.title}
          className="rounded-md mx-auto"
        />
        <h2 className="main-gradient bg-clip-text text-transparent font-poppins font-semibold text-3xl pt-8 pb-6">
          {post.title}
        </h2>
        <div className="flow-root mt-0 mb-6">
          <div className="float-left">
            <Image
              width={45}
              height={45}
              src={post.authorPicture}
              alt={post.title}
              className="rounded-full mr-4 float-left"
            />
            <div className="float-right text-white font-poppins font-semibold">
              <p>{post.author}</p>
              <p>{format(new Date(post.date), "MMM dd, yyyy")}</p>
            </div>
          </div>
          <ShareIcon />
        </div>

        <div className="flow-root mt-4">
          {post.tags.map((tag) => (
            <div
              key={tag}
              className="float-left border-[#31a85d] px-2 m-1 main-gradient bg-clip-text text-transparent font-poppins border rounded-full"
            >
              {tag}
            </div>
          ))}
        </div>
        <div className="h-[2px] rounded-full bg-gray-800 mx-auto mt-6" />
        <div className="mx-auto text-justify font-poppins text-white text-lg py-6">
          <ReactMarkdown remarkPlugins={[gfm]} rehypePlugins={[rehypeRaw]}>
            {post.content}
          </ReactMarkdown>
        </div>
        <ShareButton />

        <div className="h-[2px] rounded-full bg-gray-800 mt-10" />
        <h3 className="text-white font-poppins font-semibold text-2xl pt-8">
          Recent Posts
        </h3>
      </div>
      <div className="w-[85%] max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {recentPost.map((post) => (
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
      </div>
    </main>
  );
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} `;

  return {
    title,
    description: post.description,
    authors: [
      {
        name: "Beyonders - Digital Solutions",
        url: "https://beyonders.com.br",
      },
      {
        name: post.author,
        url: "https://beyonders.com.br",
      },
    ],
    keywords: post.tags,
    robots: "index, follow",
    openGraph: {
      title,
      images: [post.bannerImage],
      type: "article",
    },
  };
}
