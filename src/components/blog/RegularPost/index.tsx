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

export const RegularPost = ({ date, description, title, imgUrl, url }: ServiceItemProps) => {
  return (
    <div
      id="regularPost"
      className="py-8 overflow-x-hidden relative font-inter">
    	<div className="grid grid-cols-1 md:px-[12%] ">
				<div className="flex flex-col gap-4">
					<Image
						src={imgUrl}
						width={400}
						height={260}
						alt={title}
						className="rounded-md w-full"
					/>
					<div className="space-y-4">
						<p className="font-poppins text-gray-secondary/80 text-sm">
							{date} •  blog
						</p>
						<h2 className="main-gradient bg-clip-text text-transparent font-poppins font-semibold text-xl">
							{title}
						</h2>
						<div className="w-24 h-[2px] rounded-full main-gradient"></div>
						<p className="font-poppins text-gray-secondary/80 text-sm pb-8">
							{description}
						</p>
						<Link href={`/blog/post/${url}`}>
							<Button >More info</Button>
						</Link>
					</div>
				</div>
      </div>
    </div>
  );
};
