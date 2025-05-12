// app/skill/page.tsx

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaFigma } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiNestjs, SiExpress, SiPhp, SiPython } from "react-icons/si";
import ServiceCard from "@/components/service-card";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <FaReact className="text-[#5567C2]" />,
    detailLink: "/skills/frontend",
    details: [
      { icon: <FaHtml5 className="text-orange-600" />, description: "HTML5" },
      { icon: <FaCss3Alt className="text-blue-600" />, description: "CSS3" },
      { icon: <FaJs className="text-yellow-400" />, description: "JavaScript" },
      { icon: <SiTypescript className="text-blue-500" />, description: "TypeScript" },
      { icon: <FaReact className="text-cyan-400" />, description: "React.js" },
      { icon: <SiNextdotjs className="text-black dark:text-white" />, description: "Next.js" },
      { icon: <FaFigma className="text-pink-500" />, description: "Figma (UI/UX)" },
    ],
  },
  {
    title: "Backend Development",
    icon: <FaNodeJs className="text-green-600" />,
    detailLink: "/skills/backend",
    details: [
      { icon: <SiNestjs className="text-[#5567C2]" />, description: "NestJS" },
      { icon: <SiExpress className="text-gray-800 dark:text-white" />, description: "Express.js" },
      { icon: <SiPhp className="text-purple-600" />, description: "PHP" },
      { icon: <SiPython className="text-blue-600" />, description: "Python" },
    ],
  },
];

export default function SkillPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-[#0B1DE6] mb-10 text-center">My Tech Stack</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {skillCategories.map((skill, index) => (
          <ServiceCard
            key={index}
            title={skill.title}
            icon={skill.icon}
            detailLink={skill.detailLink}
            details={skill.details}
          />
        ))}
      </div>
    </section>
  );
}
