import { useI18n } from "@/hooks/useI18n";
import Image from "next/image";

export default function SuccessPage() {
  const { success: i18n } = useI18n();
  return (
    <div className="grid place-items-center">
      <section className="container px-4 min-h-[96vh] flex flex-col justify-center text-center items-center text-white">
        <Image
          src="/success/di-caprio.gif"
          width={200}
          height={200}
          alt={i18n.imgAlt}
          className="rounded-lg  mb-2"
        />
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary-green to-main-green">
          {i18n.title}
        </h1>
        <p className="text-xl text-gray-100 mt-4">{i18n.description}</p>
      </section>
    </div>
  );
}
