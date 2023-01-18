import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Members } from "@/components/Team/Members";
import { TeamHead } from "@/components/Team/TeamHead";
import { useI18n } from "@/hooks/useI18n";

export default function Team() {
  const { team } = useI18n();
  return (
    <>
      <TeamHead />
      <main className="bg-main-black">
        <Header alwaysShowBorder />
        <section className="px-4 lg:px-36 text-left space-y-2 text-main-white min-h-[18rem] lg:min-h-[14rem] flex flex-col justify-end">
          <h2 className="text-2xl font-bold uppercase">
            {team.title} <span className="text-transparent bg-clip-text main-gradient">{team.titleGradient}</span>
          </h2>
          <h3 className="text-lg leading-5">{team.subtitle}</h3>
        </section>
        <Members />
        <Footer />
      </main>
    </>
  );
}
