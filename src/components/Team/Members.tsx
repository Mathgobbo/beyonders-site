import { useI18n } from "@/hooks/useI18n";
import Image from "next/image";

export const Members = () => {
  const {
    team: { members },
  } = useI18n();
  return (
    <section className="p-4 mt-4 mb-8 md:mt-8 lg:px-36 md:min-h-screen">
      {members.map((member) => (
        <div key={member.name} className="text-main-white md:flex">
          <Image
            src={member.imgUrl}
            width={640}
            height={640}
            alt={member.name}
            className="w-32 h-32 border rounded-md lg:h-60 lg:w-60 border-secondary-green"
          />
          <div className="px-4">
            <h2 className="mt-2 text-xl font-bold text-transparent uppercase lg:text-2xl main-gradient bg-clip-text">
              {member.name}
            </h2>
            <h3 className="uppercase lg:font-bold">{member.role}</h3>
            <p className="text-sm">{member.bio}</p>
            <p className="mt-4 mb-1 uppercase">Skillset:</p>
            <ul className="flex flex-wrap gap-2">
              {member.skillset.map((skill) => (
                <li
                  className="px-2 py-1 text-xs uppercase border rounded-full bg-secondary-green border-main-white"
                  key={skill}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};
