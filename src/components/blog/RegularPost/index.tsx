import { Button } from "@/components/common/Button";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

interface ServiceItemProps {
  date: string;
  imgUrl: string;
  title: string;
  description: string;
  url: string;
}

export const RegularPost = ({
  date,
  description,
  title,
  imgUrl,
  url,
}: ServiceItemProps) => {
  return (
    <div
      id="regularPost"
      className="py-8 overflow-x-hidden relative font-inter"
    >
      <div className="grid grid-cols-1 md:px-[12%] ">
        <div className="flex flex-col gap-4">
          <Image
            src={imgUrl}
            width={400}
            height={260}
            alt={title}
            className="rounded-md w-full h-40 object-cover"
          />
          <div className="space-y-4 font-poppins text-white">
            <p className="text-sm mb-2">
              {format(new Date(date), "MMM dd, yyyy")}
            </p>
            <Link
              className="hover:underline hover:text-secondary-green"
              href={`/blog/post/${url}`}
            >
              <h2 className="hover:underline main-gradient bg-clip-text text-transparent font-semibold text-xl">
                {title}
              </h2>
            </Link>
            <div className="w-24 h-[2px] rounded-full main-gradient"></div>
            <p className="text-sm pb-8">{description}</p>
            <Link href={`/blog/post/${url}`}>
              <Button>More info</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
