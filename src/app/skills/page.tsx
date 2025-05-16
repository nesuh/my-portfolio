import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaFigma, FaCertificate,
} from "react-icons/fa";
import {
  SiTypescript, SiNextdotjs, SiNestjs, SiExpress, SiPhp, SiPython,
} from "react-icons/si";
import ServiceCard from "@/components/service-card";
import Image from "next/image";

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

const certificates = [
  {
    icon: <FaCertificate className="text-yellow-500" />,
    title: "Machine Learning",
    provider: "Coursera (Stanford University)",
    image: "/certificates/deep-learning-thumbnail.jpg",
    pdf: "/certificates/ml-certificate.pdf",
  },
  {
    icon: <FaCertificate className="text-yellow-500" />,
    title: "Deep Learning Specialization",
    provider: "Coursera (Andrew Ng)",
    image: "/certificates/deep-learning-thumbnail.jpg",
    pdf: "/certificates/deep-learning.pdf",
    link: "https://www.coursera.org/account/accomplishments/verify/1F3T495WAG6A",
  },
  {
    icon: <FaCertificate className="text-yellow-500" />,
    title: "Backend Development (Node.js)",
    provider: "Simplilearn",
    image: "/certificates/simplilearn.jpg",
    pdf: "/certificates/simplylearncrtiff.pdf",
  },
  {
    icon: <FaCertificate className="text-yellow-500" />,
    title: "Full Stack Development",
    provider: "Ethio Coder",
    image: "/certificates/ethio-coder.jpg",
    pdf: "/certificates/ethio-coder.pdf",
  },
];

export default function SkillPage() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-[#0B1DE6] mb-10 text-center">My Tech Stack</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
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

 <div className="bg-gradient-to-r from-blue-50 to-purple-100 p-8 rounded-2xl shadow-xl">
  <h2 className="text-3xl font-bold text-[#0B1DE6] mb-6 text-center">🏅 Certificates & Achievements</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {certificates.map((cert, index) => (
      <div
        key={index}
        className="bg-white rounded-2xl shadow-md overflow-hidden transform hover:scale-[1.025] transition-transform duration-300"
      >
        <a
          href={cert.link || cert.pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="block overflow-hidden"
        >
          <Image
            src={cert.image}
            alt={`${cert.title} Certificate`}
            width={300}
            height={300}
            className="w-full h-48 object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </a>
        <div className="p-4">
          <div className="flex items-center gap-2 text-lg font-semibold text-[#0B1DE6] mb-1">
            {cert.icon}
            <span>{cert.title}</span>
          </div>
          <p className="text-sm text-gray-600">{cert.provider}</p>
          <a
            href={cert.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-sm text-blue-600 hover:underline"
          >
            📄 View Full Certificate (PDF)
          </a>
        </div>
      </div>
    ))}
  </div>
</div>
    </section>
  );
}
