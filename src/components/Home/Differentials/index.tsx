import { Button } from "@/components/common/Button";
import { SectionDescription } from "@/components/common/SectionDescription";
import { SectionTitle } from "@/components/common/SectionTitle";
import Image from "next/image";
import Link from "next/link";

export const Differentials = () => {
  return (
    <section
      id="benefits"
      className="px-4 lg:px-36 relative font-inter pt-20 lg:pt-52 overflow-x-hidden"
    >
      <Image
        src={"/circle.svg"}
        alt="circle"
        width={480}
        height={480}
        className="absolute top-4 -right-40"
      />
      <Image
        src={"/circle.svg"}
        alt="circle"
        width={380}
        height={380}
        className="absolute -bottom-0 -left-40"
      />
      <div>
        <SectionTitle additionalClassName="capitalize">
          Our Values{" "}
        </SectionTitle>
        <SectionDescription>
          {" "}
          Unlike the common software houses, these are the values that guide our
          work.{" "}
        </SectionDescription>
      </div>

      <div className="grid grid-cols-1 mt-8 md:mt-12 md:grid-cols-2 gap-8 md:gap-28 lg:grid-cols-3">
        <Item
          imrUrl="/home/differentials/badge.svg"
          title="Quality is priority"
          description="Performance and User Experience are the most important metrics for us."
        />
        <Item
          imrUrl="/home/differentials/infinite.svg"
          title="Sustainable development"
          description="Tests and the best code practices are included during all the project development."
        />
        <Item
          imrUrl="/home/differentials/coin.svg"
          title="Accessible Solutions"
          description="We always take into account the client's budget and profile."
        />
        <Item
          imrUrl="/home/differentials/flexible.svg"
          title="Integrations and analytics"
          description="We care with your results, installing the best softwares to track and measure your product performance."
        />
        <Item
          imrUrl="/home/differentials/tools.svg"
          title="The Best Tools"
          description="Our team is qualified and is always using the best tools to build what you desire."
        />
        <Item
          imrUrl="/home/differentials/team.svg"
          title="Specialized team"
          description="Our team is carefully selected to deliver the best software quality always"
        />
      </div>
      <div className="flex items-center justify-center mt-12 md:mt-16">
        <Link href="/#pricing" scroll={false} className="w-full md:w-auto z-10">
          {" "}
          <Button additionalClassName="w-full md:w-auto text-sm md:text-sm md:px-32 lg:px-40">
            Move forward
          </Button>
        </Link>
      </div>
    </section>
  );
};

type ItemProps = {
  imrUrl: string;
  title: string;
  description: string;
};

const Item = ({ description, imrUrl, title }: ItemProps) => {
  return (
    <div className="relative flex flex-col text-center items-center justify-center space-y-3">
      <Image
        src={imrUrl}
        alt={title}
        width={84}
        height={84}
        className="w-20 h-20 md:w-20 md:h-20 z-10"
      />
      <h3 className="font-poppins text-lg text-gray-primary/80">{title}</h3>
      <p className="text-xs font-light lg:text-sm text-gray-secondary/60 w-3/4">
        {description}
      </p>
    </div>
  );
};
