import { Metadata } from "next";
import { getPostBySlug } from "@/services/api";
import Image from "next/image";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Beyonders Blog",
};

export default function Post({ params }: Params) {
  console.log(params)

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



import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
import Alert from "@/app/_components/alert";
import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import { PostBody } from "@/app/_components/Post/post-body";
import { PostHeader } from "@/app/_components/Post/post-header";

export default async function Post({ params }: Params) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <main>
      <Alert preview={post.preview} />
      <Container>
        <Header />
        <article className="mb-32">
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
          />
          <PostBody content={content} />
        </article>
      </Container>
    </main>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Next.js Blog Example with ${CMS_NAME}`;

  return {
    title,
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
