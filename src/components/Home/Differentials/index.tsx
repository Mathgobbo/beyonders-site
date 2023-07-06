import { Button } from "@/components/common/Button";
import { SectionDescription } from "@/components/common/SectionDescription";
import { SectionTitle } from "@/components/common/SectionTitle";
import Image from "next/image";
import Link from "next/link";

export const Differentials = () => {
  return (
    <section
      id="benefits"
      className="px-4 lg:px-36 relative font-inter pt-20 lg:pt-52"
    >
      <div>
        <SectionTitle additionalClassName="capitalize">
          A Different Software Agency
        </SectionTitle>
        <SectionDescription>
          {" "}
          Unlike the common software houses, we work differently.
        </SectionDescription>
      </div>

      <div className="grid grid-cols-1 mt-8 md:mt-12 md:grid-cols-2 gap-8 md:gap-28 lg:grid-cols-3">
        <Item
          imrUrl="/home/differentials/badge.svg"
          title="Membership system"
          description="We work with a Subscription Pricing system. You won’t get an specific price for your project."
        />
        <Item
          imrUrl="/home/differentials/infinite.svg"
          title="Unlimites Projects"
          description="Make as many requests you want. Same project or even different/new ones"
        />
        <Item
          imrUrl="/home/differentials/coin.svg"
          title="Fixed Monthly Rate"
          description="No surprises. Pay the same fixed price each month."
        />
        <Item
          imrUrl="/home/differentials/flexible.svg"
          title="Flexible Subscription"
          description="Freedom to cancel your subscription any time."
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
        <Link href="/#pricing" scroll={false} className="w-full md:w-auto">
          {" "}
          <Button additionalClassName="w-full md:w-auto text-sm md:text-sm md:px-32 lg:px-40">
            See plans
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
    <div className="flex flex-col text-center items-center justify-center space-y-3">
      <Image
        src={imrUrl}
        alt={title}
        width={84}
        height={84}
        className="w-20 h-20 md:w-20 md:h-20"
      />
      <h3 className="font-poppins text-lg text-gray-primary/80">{title}</h3>
      <p className="text-xs font-light lg:text-sm text-gray-secondary/60 w-3/4">
        {description}
      </p>
    </div>
  );
};
