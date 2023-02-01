import Link from "next/link";
import { useRouter } from "next/router";

export const Breadcrumbs = ({ title }: { title: string }) => {
  const router = useRouter();
  return (
    <div className="flex mb-2 space-x-2 text-white lg:mx-36">
      <Link href={"/blog"}>Blog</Link>
      <p dangerouslySetInnerHTML={{ __html: ">" }}></p>
      <Link href={router.pathname}>{title}</Link>
    </div>
  );
};
