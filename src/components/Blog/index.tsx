import { IPost } from "@/types/IPost";
import Image from "next/image";
import Link from "next/link";

export const BlogComponent = ({ posts }: { posts: IPost[] }) => {
  return (
    <>
      <main className="flex flex-col justify-end px-8 mb-12 space-y-2 text-left lg:px-36 text-main-white pt-44 lg:pt-36">
        <h2 className="text-3xl font-bold uppercase">Blog</h2>
        <p>Fique por dentro das últimas novidades e aprenda com nossos artigos.</p>
        <section className="space-y-4 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 md:space-y-0 md:space-x-4">
          {posts.map(({ slug, metadata: { bannerImage, title, author, category } }) => (
            <Link
              href={`/blog/${slug}`}
              className="relative flex items-end w-full overflow-hidden transition rounded-2xl h-44"
              key={slug}
            >
              <Image
                className="absolute object-cover w-full h-full overflow-hidden transition hover:scale-110"
                width={320}
                height={180}
                src={bannerImage}
                alt={title}
              />
              <div className="relative p-4 text-white transition bg-gradient-to-t rounded-b-xl from-black to-transparent">
                <h2 className="font-bold uppercase">{title}</h2>
                <p className="text-gray-200">{category}</p>
              </div>
            </Link>
          ))}
        </section>
      </main>
    </>
  );
};
