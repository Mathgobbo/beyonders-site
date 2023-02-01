import { IBlogArticlePageProps } from "@/types/IBlogArticlePageProps";
import Image from "next/image";
import { Breadcrumbs } from "./Breadcrumbs";

export const BlogArticlePageComponent = ({ content, metadata }: IBlogArticlePageProps) => {
  return (
    <main className="flex flex-col justify-end pt-40 mb-12 space-y-2 text-left text-main-white lg:pt-36">
      <Breadcrumbs title={metadata.title} />
      <div className="relative flex items-end overflow-hidden lg:rounded-xl h-52 lg:h-60 lg:mx-36">
        <Image
          src={metadata.bannerImage}
          fill
          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 80vw, 70vw"
          alt={metadata.title}
        />
        <div className="relative w-full p-4 px-8 text-white transition lg:p-6 bg-gradient-to-t from-black to-transparent">
          <h2 className="font-bold uppercase lg:text-3xl lg:w-1/2">{metadata.title}</h2>
        </div>
      </div>
      <div className="px-8 lg:px-36" dangerouslySetInnerHTML={{ __html: content }}></div>
    </main>
  );
};
