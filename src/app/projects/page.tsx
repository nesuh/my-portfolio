import ProjectCard from "@/components/project-card";

export default function ProjectsPage() {
  return (
    <section  id="projects" className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-6xl font-bold mb-10 text-[#5567C2] text-center">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ProjectCard
          title="Todo List Manager"
          description="A task management tool that allows users to create, update, and track their tasks. It features a clean, user-friendly interface with task categorization and due date management."
          imageUrl="/assets/todo-list.jpg"
          githubLink="https://github.com/nesuh/todo-list"
          detailLink="/projects/todo-list-manager"
        />
        <ProjectCard
          title="GPT Assistant"
          description="A chatbot powered by OpenAI’s API, designed to answer common queries or interact with users in real-time. The app can be integrated with various messaging platforms."
          imageUrl="/assets/chat-gpt-image-assistance.jpg"
          githubLink="https://github.com/nesuh/gpt-assistant"
          detailLink="/projects/gpt-assistant"
        />
        <ProjectCard
          title="DMU Placement System"
          description="An automated system for university student-department placement. It streamlines the allocation of students to departments based on their preferences and available resources."
          imageUrl="/assets/placement-system.jpg"
          githubLink="https://github.com/nesuh/dmu-placement"
          detailLink="/projects/dmu-placement-system"
        />
        <ProjectCard
          title="Slack API Registration"
          description="A tool that automates the setup and registration process of Slack teams, enabling quick and easy onboarding for organizations."
          imageUrl="/assets/slack-api.jpg"
          githubLink="https://github.com/nesuh/slack-api-tool"
          detailLink="/projects/slack-api-registration"
        />
        <ProjectCard
          title="Music Management System"
          description="A music management platform for organizing tracks, playlists, and metadata efficiently. It supports audio preview, genre tagging, and artist cataloging."
          imageUrl="/assets/music-managment-system.jpg"
          githubLink="https://github.com/yourusername/music-management"
          detailLink="/projects/music-management-system"
        />
        <ProjectCard
          title="GPT Assistant v2"
          description="An upgraded version of the GPT chatbot with smarter context handling and conversation memory."
          imageUrl="/assets/chat-gpt-image-assistance.jpg"
          githubLink="https://github.com/yourusername/gpt-assistant-v2"
          detailLink="/projects/gpt-assistant-v2"
        />
      </div>
    </section>
  );
}
