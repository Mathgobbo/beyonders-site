"use client";

import { motion } from "framer-motion";
import { BlogHeader } from "@/components/BlogHeader";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "ContractApp",
    description:
      "Create legally binding contracts and manage your projects easily. The Contractor’s dream software.",
    tech: "Web • Startup (Legal Software & Productivity)",
    bgColor: "bg-[#F2F2F2]",
    titleColor: "text-[#132E50]",
    textColor: "text-gray-800",
    image: "/showcases/contractapp.webp",
    link: "https://contractapp.ca",
  },
  {
    id: 2,
    title: "PLAYSK8",
    description:
      "A metaverse NFT game where you collect unique 3D skateboarder avatars, battle others in the classic SKATE challenge, level up tricks, unlock rarer moves, and compete for prizes.",
    tech: "Web • NFTs and Blockchain",
    bgColor: "bg-[#A91834]",
    textColor: "text-white",
    image: "/showcases/playsk8.webp",
    link: "https://playsk8.com",
  },
  {
    id: 3,
    title: "SK8WALLET",
    description:
      "Your Crypto skateboarding token hub. A website where you can buy, transfer, airdrop and stake the $SK8 token, the SK8 community token.",
    tech: "Web • Cryptocurrency and Blockchain",
    bgColor: "bg-[#14518D]",
    textColor: "text-white",
    image: "/showcases/sk8wallet.webp",
    link: "https://sk8wallet.com",
  },
  {
    id: 4,
    title: "Lup",
    description:
      "Do you want to find the best suppliers and service providers for your event? Start with Lup. Here, anyone can create events and all suppliers can share your services.",
    tech: "Web & Mobile • Startup (Events)",
    bgColor: "bg-[#B72D63]",
    textColor: "text-white",
    image: "/showcases/lup.webp",
    link: "https://lup.com.br",
  },
  {
    id: 5,
    title: "DA2X",
    description:
      "DA2X is a subscription platform for law students and professionals, offering courses, mentorships, and editable legal templates. It provides practical, certified content to accelerate legal career development.",
    tech: "Web • E-Learning",
    bgColor: "bg-[#036BF9]",
    textColor: "text-white",
    image: "/showcases/da2x.webp",
    link: "https://da2x.com.br",
  },
  {
    id: 6,
    title: "Geografia Irada",
    description:
      "The best website to learn Geography for your exams. Focused on High School and College content.",
    tech: "Web • E-Learning",
    bgColor: "bg-[#158C3B]",
    textColor: "text-white",
    image: "/showcases/geografia-irada.webp",
    link: "https://geografiairada.com",
  },
  {
    id: 7,
    title: "Salesgrid",
    description:
      "Salesgrid is a sales automation platform that helps companies understand their performance through data-driven dashboard. Salespeople, managers, and executives can make better decisions, reach goals, and identify new opportunities for growth within the place.",
    tech: "Web • Startup (Business Intelligence and Analytics)",
    bgColor: "bg-white",
    textColor: "text-gray-900",
    titleColor: "text-black",
    image: "/showcases/salesgrid.webp",
    link: "https://salesgrid.com",
  },
];

const bottomProjects = [
  {
    title: "Professor Marcelo",
    description:
      "Explore the fieldwork and published books from a TedX Speaker and Geography educator passionate about connecting people and places through knowledge.",
    tech: "Web • Portfolio",
    bgColor: "bg-[#242F4B]",
    textColor: "text-white",
    image: "/showcases/professor-marcelo.webp",
    link: "https://professormarcelo.com",
  },
  {
    title: "It's On",
    description:
      "Buy, sell, and find the best waves of your life. This Marketplace was made for Surfers and Photographers to connect and make business. We are still working on this project, so follow our LinkdeIn to know when we release it!",
    tech: "Web • Startup (Marketplace)",
    bgColor: "bg-[#EF912B]",
    textColor: "text-white",
    image: "/showcases/itson.webp",
  },
];

export default function Showcases() {
  return (
    <main className="text-main-white font-poppins ">
      <BlogHeader />
      <div className="flex items-center justify-center flex-col">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="py-16 px-4 lg:px-36 pt-48 max-w-[92rem] w-full"
        >
          <div className="font-bold text-transparent font-poppins mb-3 text-lg md:text-xl lg:text-3xl main-gradient bg-clip-text uppercase">
            PROVIDING THE BEST SERVICE
          </div>
          <h1 className="text-4xl font-normal font-poppins tracking-wider leading-10 md:text-4xl lg:text-5xl lg:leading-snug mb-4">
            Not your usual{" "}
            <span className="text-transparent main-gradient bg-clip-text">
              agency.
            </span>
            <br />
            We challenge, we create, we go{" "}
            <span className="text-transparent main-gradient bg-clip-text">
              beyond
            </span>
          </h1>
          <p className="text-sm mt-5 mb-6 text-gray-100 font-inter md:text-lg lg:text-base lg:mt-7">
            From concept to launch — discover how we take ideas to life.
          </p>
        </motion.section>

        {/* Projects Grid */}
        <div className="px-4 lg:px-36  space-y-8 mb-16 max-w-[92rem]">
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true, amount: 0.8 }}
              className={`${project.bgColor} ${project.textColor} rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8`}
            >
              <div className="flex gap-4 flex-wrap justify-center flex-1">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="relative"
                >
                  <Image
                    src={project.image || ""}
                    alt={`${project.title} mockup`}
                    width={900}
                    height={600}
                    className="w-full h-80"
                  />
                </motion.div>
              </div>
              <div className="flex-1 space-y-4">
                <h2
                  className={
                    "text-3xl md:text-4xl font-bold " + project.titleColor
                  }
                >
                  {project.title}
                </h2>
                <p className="text-lg opacity-90 max-w-2xl leading-relaxed">
                  {project.description}
                </p>
                <div className={"text-base font-bold " + project.titleColor}>
                  {project.tech}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom Projects */}
        <div className="px-4 lg:px-36 grid md:grid-cols-2 gap-8 mb-16 max-w-[92rem]">
          {bottomProjects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true, amount: "all" }}
              className={`${project.bgColor} ${project.textColor} rounded-2xl p-8 flex flex-col gap-6`}
            >
              <div className="flex gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} mockup`}
                    width={460}
                    height={250}
                  />
                </motion.div>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold">
                  {project.title}
                </h2>
                <p className="text-base opacity-90 leading-relaxed">
                  {project.description}
                </p>
                <div className="text-sm font-bold">{project.tech}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </main>
  );
}
