import { BlogArticlePageComponent } from "@/components/BlogPage";
import { IBlogArticlePageProps } from "@/types/IBlogArticlePageProps";
import fs from "fs";
import matter from "gray-matter";
import { GetServerSideProps, GetStaticPaths } from "next";
import path from "path";

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const fileNames = fs.readdirSync("src/articles");
  const mappedPaths = fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ""),
      },
    };
  });
  return {
    paths: mappedPaths,
    fallback: false,
  };
};

export const getStaticProps: GetServerSideProps = async (ctx) => {
  const { params } = ctx;
  const slug = params?.slug;
  const fullPath = path.join("src/articles", `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);
  return {
    props: {
      metadata: matterResult.data,
      content: matterResult.content,
    },
  };
};

export default function BlogPage(props: IBlogArticlePageProps) {
  return <BlogArticlePageComponent {...props} />;
}
