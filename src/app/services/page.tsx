import { FiDatabase, FiLock, FiBox, FiLayers } from 'react-icons/fi'; // backend icons example
import { FaReact, FaFigma, FaPuzzlePiece, FaRobot, FaUserShield } from 'react-icons/fa';
import { MdOutlineIntegrationInstructions, MdSecurity } from 'react-icons/md';
import ServiceCard from '@/components/service-card';

export default function Services() {
  return (
    <section id="services" className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-6xl font-bold mb-10 text-[#5567C2] text-center">Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ServiceCard
          icon={<FiBox size={40} className="text-[#5567C2]" />}
          title="Backend Development (Main Expertise)"
          details={[
            {
              icon: <MdOutlineIntegrationInstructions size={20} className="text-[#5567C2]" />,
              description:
                'Design and development of robust RESTful APIs using NestJS, Express, TypeScript, and Python.',
            },
            {
              icon: <FiDatabase size={20} className="text-[#5567C2]" />,
              description: 'Database design and management with PostgreSQL and MongoDB.',
            },
            {
              icon: <FaPuzzlePiece size={20} className="text-[#5567C2]" />,
              description: 'Integration with third-party services (email, payment, notifications, etc.)',
            },
            {
              icon: <FiLock size={20} className="text-[#5567C2]" />,
              description: 'Authentication & authorization (JWT, OAuth2)',
            },
            {
              icon: <FiLayers size={20} className="text-[#5567C2]" />,
              description: 'Clean architecture, multi-tenancy, and modular codebase',
            },
          ]}
          detailLink="/services/backend-development"
        />

        <ServiceCard
          icon={<FaReact size={40} className="text-[#5567C2]" />}
          title="Frontend Development"
          details={[
            {
              icon: <FaReact size={20} className="text-[#5567C2]" />,
              description: 'Building responsive web interfaces using React, Tailwind CSS, and HTML/CSS',
            },
            {
              icon: <MdOutlineIntegrationInstructions size={20} className="text-[#5567C2]" />,
              description: 'Integration with backend APIs',
            },
            {
              icon: <FaReact size={20} className="text-[#5567C2]" />,
              description: 'SPA (Single Page Application) development with React + Vite',
            },
          ]}
          detailLink="/services/frontend-development"
        />

        <ServiceCard
          icon={<FaRobot size={40} className="text-[#5567C2]" />}
          title="AI & Machine Learning (Practical Experience)"
          details={[
            {
              icon: <FaUserShield size={20} className="text-[#5567C2]" />,
              description: 'Certified in Machine Learning and Deep Learning from Coursera',
            },
            {
              icon: <FaRobot size={20} className="text-[#5567C2]" />,
              description: 'Built small AI-powered apps using OpenAI API (e.g., GPT-3/4 based tools)',
            },
            {
              icon: <MdSecurity size={20} className="text-[#5567C2]" />,
              description: 'Prompt engineering and AI + backend integration',
            },
          ]}
          detailLink="/services/ai-machine-learning"
        />

        <ServiceCard
          icon={<FaFigma size={40} className="text-[#5567C2]" />}
          title="UI/UX Design"
          details={[
            {
              icon: <FaFigma size={20} className="text-[#5567C2]" />,
              description: 'Creating modern and intuitive user interfaces with Figma',
            },
            {
              icon: <FiBox size={20} className="text-[#5567C2]" />,
              description: 'Wireframing and prototyping for web and mobile apps',
            },
            {
              icon: <FaPuzzlePiece size={20} className="text-[#5567C2]" />,
              description: 'Focused on usability and clean design systems',
            },
          ]}
          detailLink="/services/ui-ux-design"
        />
      </div>
    </section>
  );
}
