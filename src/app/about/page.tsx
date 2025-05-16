"use client";

import { motion } from "framer-motion";
import { 
  FaServer, FaRobot, FaFigma, FaReact, FaPython, FaDocker, FaGithub
} from "react-icons/fa";
import { 
  SiNestjs, SiPostgresql, SiTailwindcss, SiOpenai, SiTensorflow, SiTypescript, SiJavascript, SiGit 
} from "react-icons/si";

export default function AboutPage() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-16">

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-6xl font-bold text-[#5567C2] mb-8"
      >
        About Me
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="bg-white dark:bg-[#0B1DE6] text-black dark:text-white p-6 rounded-xl shadow-md space-y-6"
      >
        <p className="text-lg leading-relaxed">
          I’m a passionate <span className="font-semibold text-[#5567C2]">Backend Engineer</span> focused on building
          scalable and secure server-side applications using modern technologies
          like <SiNestjs className="inline-block text-red-600" /> NestJS, <FaServer className="inline-block text-gray-700" /> Node.js,
          and <SiPostgresql className="inline-block text-blue-700" /> PostgreSQL.
        </p>

        <p className="text-lg leading-relaxed">
          I also enjoy frontend development—working with <FaReact className="inline-block text-blue-500" /> React,
          <SiTailwindcss className="inline-block text-teal-500" /> Tailwind CSS, and <FaFigma className="inline-block text-pink-500" /> Figma to
          design clean user interfaces and prototypes.
        </p>

        <p className="text-lg leading-relaxed">
          Beyond full-stack development, I have a strong interest in <span className="font-semibold text-[#5567C2]">Artificial Intelligence</span> and <span className="font-semibold text-[#5567C2]">Machine Learning</span>.
          I’m certified in Machine Learning and Deep Learning through Coursera,
          and have built AI-driven solutions using <SiOpenai className="inline-block text-green-600" /> OpenAI APIs.
        </p>

        <p className="text-lg leading-relaxed">
          I’ve created tools like custom chatbots and Slack integrations, applying real-world AI to improve workflows.
        </p>

        {/* Icon Bar */}
        <div className="flex justify-center space-x-8 py-6 text-4xl text-[#5567C2] dark:text-white">
          <SiNestjs title="NestJS" />
          <FaServer title="Node.js" />
          <SiPostgresql title="PostgreSQL" />
          <FaReact title="React" />
          <SiTailwindcss title="Tailwind CSS" />
          <FaFigma title="Figma" />
          <FaPython title="Python" />
          <SiTensorflow title="TensorFlow" />
          <SiOpenai title="OpenAI" />
          <FaDocker title="Docker" />
          <SiGit title="Git" />
          <FaGithub title="GitHub" />
        </div>

        {/* AI Skills */}
        <div>
          <h2 className="text-2xl font-semibold text-[#5567C2] mb-2">AI & Machine Learning Skills</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm">
            <li className="flex items-center gap-2"><FaPython className="text-yellow-600" /> Python</li>
            <li className="flex items-center gap-2"><SiTensorflow className="text-orange-600" /> TensorFlow</li>
            <li className="flex items-center gap-2"><FaRobot className="text-gray-600" /> Deep Learning</li>
            <li className="flex items-center gap-2"><SiOpenai className="text-green-600" /> OpenAI APIs</li>
          </ul>
        </div>

        {/* DevOps Skills */}
        <div>
          <h2 className="text-2xl font-semibold text-[#5567C2]mb-2">DevOps Skills</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm">
            <li className="flex items-center gap-2"><FaDocker className="text-blue-500" /> Docker</li>
            <li className="flex items-center gap-2"><SiGit className="text-orange-600" /> Git</li>
            <li className="flex items-center gap-2"><FaServer className="text-gray-700" /> CI/CD</li>
          </ul>
        </div>

        {/* Technologies & Tools */}
        <div>
          <h2 className="text-2xl font-semibold text-[#5567C2] mb-2">Technologies & Tools</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm">
            <li className="flex items-center gap-2"><SiNestjs className="text-red-600" /> NestJS</li>
            <li className="flex items-center gap-2"><SiPostgresql className="text-blue-700" /> PostgreSQL</li>
            <li className="flex items-center gap-2"><SiTypescript className="text-blue-600" /> TypeScript</li>
            <li className="flex items-center gap-2"><SiJavascript className="text-yellow-600" /> JavaScript</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
