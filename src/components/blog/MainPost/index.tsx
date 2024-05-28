import { Button } from "@/components/common/Button";
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
      className="py-10 overflow-x-hidden relative font-inter pt-24 mx-auto "
    >
      <Image
        src={"/circle.svg"}
        alt="circle"
        width={500}
        height={500}
        className="fixed top-1/3 -right-40"
      />
    	<div className="grid grid-cols-1 mt-12 px-[6%] lg:px-[4%]">
				<div className="flex flex-col gap-8 md:flex-row items-center pb-8">
					<Image
						src={imgUrl}
						width={400}
						height={260}
						alt={title}
						className="rounded-md w-[85%] lg:w-[70%]"
					/>
					<div className="space-y-4 max-w-[80%]">
						<p className="font-poppins pb-2 text-gray-secondary/80 text-sm ">
							{date} •  blog
						</p>
						<h2 className="main-gradient bg-clip-text text-transparent font-poppins font-semibold text-xl">
							{title}
						</h2>
						<p className="font-poppins text-gray-secondary/80 text-sm pb-8">
							{description}
						</p>
						<Link href={`/blog/post/${url}`} >
							<Button>More info</Button>
						</Link>
					</div>
				</div>
      </div>
    </div>
  );
};
