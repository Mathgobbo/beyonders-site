import { OutlineButton } from "@/components/common/Button";
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

export const MainPost = ({ date, description, title, imgUrl, url }: ServiceItemProps) => {
  return (
    <div
      id="mainPost"
      className="py-10 overflow-x-hidden relative font-inter pt-40 mx-auto "
    >
    	<div className="z-50 grid grid-cols-1 mt-12 px-[0%] lg:px-[4%]">
        <div className="flex flex-col gap-8 lg:flex-row items-center pb-8">
          <Image
            src={imgUrl}
            width={400}
            height={260}
            alt={title}
            className="rounded-md w-[100%] md:w-[90%] lg:max-w-xl"
          />
          <div className="space-y-4 w-[100%] md:w-[90%] lg:w-[70%] font-poppins text-white">
            <p className="pb-2 text-md ">
              {format(new Date(date), "MMM dd, yyyy")}
            </p>
            <h2 className="main-gradient bg-clip-text text-transparent font-semibold text-3xl">
              {title}
            </h2>
            <p className="text-md pb-8">
              {description}
            </p>
            <Link href={`/blog/post/${url}`} >
              <OutlineButton>More info</OutlineButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
