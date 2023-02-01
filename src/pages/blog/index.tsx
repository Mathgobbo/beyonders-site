import { BlogComponent } from "@/components/Blog";
import { IPost } from "@/types/IPost";
import fs from "fs";
import matter from "gray-matter";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const files = fs.readdirSync("src/articles");
  const posts = files
    .map((fileName) => {
      const slug = fileName.replace(".md", "");
      const readFile = fs.readFileSync(`src/articles/${fileName}`, "utf-8");
      const { data: metadata } = matter(readFile);

      return {
        slug,
        metadata: metadata,
      };
    })
    .sort((a, b) => {
      if (a.metadata.date < b.metadata.date) {
        return 1;
      } else {
        return -1;
      }
    });

  return {
    props: {
      posts,
    },
  };
};

interface IProps {
  posts: IPost[];
}
export default function Blog(props: IProps) {
  return <BlogComponent {...props} />;
}
