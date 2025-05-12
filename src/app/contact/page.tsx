"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiTwitter, SiTelegram } from "react-icons/si";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus("");

    // Simulate form submission (use your backend API to handle this in a real project)
    setTimeout(() => {
      setIsSubmitting(false);
      setFormStatus("Your message has been sent successfully!");
      setFormData({ fullName: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-[#0B1DE6] mb-8"
      >
        Contact Me
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="bg-white dark:bg-[#0B1DE6] text-black dark:text-white p-6 rounded-xl shadow-md space-y-6"
      >
        <p className="text-lg leading-relaxed">
          I’m always open to collaborating on interesting projects, solving real-world problems, or just having a chat about tech.
          Feel free to reach out to me using any of the methods below:
        </p>

        {/* Contact Information */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-lg">
            <FaEnvelope className="text-gray-700 dark:text-white" />
            <a href="mailto:your-email@example.com" className="text-[#5567C2] hover:text-blue-700">
              your-email@example.com
            </a>
          </div>

          <div className="flex items-center gap-3 text-lg">
            <FaLinkedin className="text-blue-600" />
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5567C2] hover:text-blue-700"
            >
              LinkedIn Profile
            </a>
          </div>

          <div className="flex items-center gap-3 text-lg">
            <FaGithub className="text-gray-700 dark:text-white" />
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5567C2] hover:text-blue-700"
            >
              GitHub Profile
            </a>
          </div>

          <div className="flex items-center gap-3 text-lg">
            <SiTwitter className="text-blue-400" />
            <a
              href="https://twitter.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5567C2] hover:text-blue-700"
            >
              Twitter Profile
            </a>
          </div>

          <div className="flex items-center gap-3 text-lg">
            <SiTelegram className="text-blue-500" />
            <a
              href="https://t.me/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5567C2] hover:text-blue-700"
            >
              Telegram Contact
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <h2 className="text-3xl font-semibold text-[#0B1DE6]">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4 mt-6">
            <div>
              <label htmlFor="fullName" className="block text-sm text-gray-700 dark:text-gray-100">Full Name</label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0B1DE6]"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-gray-700 dark:text-gray-100">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0B1DE6]"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-gray-700 dark:text-gray-100">Message</label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0B1DE6]"
                required
              />
            </div>

            <div className="text-right">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#5567C2] text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400"
              >
                {isSubmitting ? "Submitting..." : "Send Message"}
              </button>
            </div>

            {formStatus && (
              <div className="mt-4 text-center text-lg font-medium text-green-500">{formStatus}</div>
            )}
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}
