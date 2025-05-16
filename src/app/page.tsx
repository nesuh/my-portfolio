"use client";

import AntenheChat from "@/components/chat-model";
import Image from "next/image";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col-reverse md:flex-row items-center gap-10">

        {/* 👨‍💻 Text Section */}
        <div
          className="md:w-2/3"
          data-aos="fade-right"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#0B1DE6] mb-4 transition duration-500 hover:tracking-wide">
            Welcome, I Am Antenhe Sileshi!
          </h1>

          <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-4 hover:scale-[1.01] transition">
            I am a dedicated software engineer based in Ethiopia, with a strong focus on building scalable backend systems using modern technologies like <span className="font-semibold">Node.js</span>, <span className="font-semibold">NestJS</span>, <span className="font-semibold">PostgreSQL</span>, and cloud platforms. I’m passionate about solving real-world problems, especially in agriculture, fintech, and AI-driven solutions.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6 hover:scale-[1.01] transition">
            My long-term goal is to build SaaS platforms that empower Ethiopian businesses and contribute to the tech ecosystem.
          </p>

          {/* 📊 Stats Section */}
          <div className="flex gap-10 mt-6">
            {[
              { label: "Years of Learning", value: "5+" },
              { label: "Projects Completed", value: "12+" },
              { label: "Specialization", value: "Backend" },
            ].map((stat, index) => (
              <div
                key={index}
                className="group transform transition hover:scale-110 hover:-translate-y-1 duration-300 cursor-default"
              >
                <h2 className="text-3xl font-extrabold text-[#0B1DE6] group-hover:text-[#3c55f6]">
                  {stat.value}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 📸 Profile Image */}
        <div className="md:w-1/3" data-aos="fade-left">
          <div className="relative w-full rounded-2xl overflow-hidden shadow-xl transform transition duration-500 group hover:rotate-1 hover:scale-105 hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1DE6]/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl z-10"></div>
            <Image
              src="/images/anta.png"
              alt="Antenhe Silessji"
              width={300}
              height={300}
              className="rounded-2xl object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>
<div className="mt-6">
  <a
    href="/certificates/resume.pdf"
    download
    className="inline-block px-5 py-3 bg-[#0B1DE6] text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition"
  >
    📄 Download My Resume
  </a>
</div>

      {/* 🧠 ChatBot */}
      <div data-aos="fade-up" className="mt-16">
        <AntenheChat />
      </div>
    </section>
  );
}
