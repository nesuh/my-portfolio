import ServiceCard from "@/components/service-card";

export default function Services() {
  return (
    <section>
      <h1 className="text-6xl font-bold mb-10 text-[#5567C2] text-center">Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ServiceCard
          icon={<img src="/images/icons8-backend-50.png" alt="Backend" className="w-10 h-10" />}
          title="Backend Development (Main Expertise)"
          details={[
            {
              icon: <img src="/images/icons8-api-50.png" alt="API" className="w-5 h-5" />,
              description:
                "Design and development of robust RESTful APIs using NestJS, Express, TypeScript, and Python.",
            },
            {
              icon: <img src="/images/icons8-database-50.png" alt="Database" className="w-5 h-5" />,
              description:
                "Database design and management with PostgreSQL and MongoDB.",
            },
              {
              icon: <img src="/images/icons8-puzzle-50.png" alt="Integration" className="w-5 h-5" />,
              description:
                "Integration with third-party services (email, payment, notifications, etc.)",
            },
              {
              icon: <img src="/images/icons8-lock-50.png" alt="Database" className="w-5 h-5" />,
              description:
                "Authentication & authorization (JWT, OAuth2)",
            },
              {
              icon: <img src="/images/icons8-architecture-50.png" alt="Database" className="w-5 h-5" />,
              description:
                "Clean architecture, multi-tenancy, and modular codebase",
            },
          ]}
          detailLink="/services/backend-development"
        />

        <ServiceCard
          icon={<img src="/images/icons8-frontend-50.png" alt="Web Dev" className="w-10 h-10" />}
          title="Frontend Development"
          details={[
            {
              icon: <img src="/images/icons8-api-50.png" alt="API" className="w-5 h-5" />,
              description:
                "Building responsive web interfaces using React, Tailwind CSS, and HTML/CSS",
            },
            {
              icon: <img src="/images/icons8-api-50.png" alt="API" className="w-5 h-5" />,
              description:
                "Integration with backend APIs",
            },
                {
              icon: <img src="/images/icons8-api-50.png" alt="API" className="w-5 h-5" />,
              description:
                "SPA (Single Page Application) development with React + Vite",
            },
          ]}
          detailLink="/services/frontend-development"
        />
          <ServiceCard
          icon={<img src="/images/icons8-machine-learning-50.png" alt="AI & Machine Learning" className="w-10 h-10" />}
          title="AI & Machine Learning (Practical Experience)"
          details={[
            {
              icon: <img src="/images/icons8-api-50.png" alt="API" className="w-5 h-5" />,
              description:
                "Certified in Machine Learning and Deep Learning from Coursera",
            },
            {
              icon: <img src="/images/icons8-api-50.png" alt="API" className="w-5 h-5" />,
              description:
                "Built small AI-powered applications using OpenAI API (e.g., GPT-3/4 based tools)",
            },
              {
              icon: <img src="/images/icons8-api-50.png" alt="API" className="w-5 h-5" />,
              description:
                "Practical experience in prompt engineering and integrating AI with backend systems",
            },
          ]}
          detailLink="/services/ai-machine-learning"
        />
        <ServiceCard
          icon={<img src="/images/icons8-ui-ux-design-50.png" alt="UI/UX Design" className="w-10 h-10" />}
          title=" UI/UX Design"
          details={[
            {
              icon: <img src="/images/icons8-api-50.png" alt="API" className="w-5 h-5" />,
              description:
                "Creating modern and intuitive user interfaces with Figma",
            },
            {
             icon: <img src="/images/icons8-api-50.png" alt="API" className="w-5 h-5" />,
              description:
                "Wireframing and prototyping for web and mobile applications",
            },
              {
             icon: <img src="/images/icons8-api-50.png" alt="API" className="w-5 h-5" />,
              description:
                "Focused on usability and clean design systems",
            },
          ]}
          detailLink="/services/ui-ux-design"
        />
      </div>
    </section>
  );
}
