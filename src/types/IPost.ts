export interface IPostMetadata {
  title: string;
  author: string;
  category: string;
  date: string;
  bannerImage: string;
  tags: string[];
}
export interface IPost {
  slug: string;
  metadata: IPostMetadata;
}
