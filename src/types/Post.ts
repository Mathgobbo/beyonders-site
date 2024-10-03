export type Post = {
  bannerImage: string;
  description: string;
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: string;
  authorPicture: string;
  excerpt: string;
  tags: [];
  ogImage: {
    url: string;
  };
  content: string;
  preview?: boolean;
};
