import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaInfoCircle } from "react-icons/fa";

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl?: string;
  githubLink: string;
  detailLink: string;
};

export default function ProjectCard({
  title,
  description,
  imageUrl,
  githubLink,
  detailLink,
}: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-[#0B1DE6] text-black dark:text-white border border-gray-200 dark:border-gray-700 rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow duration-300">
      
      {imageUrl && (
        <div className="overflow-hidden rounded-lg mb-4">
          <Image
            src={imageUrl}
            alt={title}
            width={300}
            height={300}
            className="w-full h-48 object-cover transform transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}

      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 dark:text-gray-100 mb-5 text-sm leading-relaxed">
        {description}
      </p>

      <div className="flex items-center justify-between gap-4 mt-4">
        {/* GitHub Button */}
        <Link
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#5567C2] hover:bg-blue-700 text-white px-4 py-2 text-sm rounded-lg transition duration-300"
        >
          <FaGithub className="w-5 h-5" 
          />
          View on GitHub
        </Link>

        {/* Detail Info */}
        <Link
          href={detailLink}
          className="flex items-center gap-1 text-[#5567C2] hover:text-blue-700 transition duration-200"
        >
         <FaInfoCircle className="w-5 h-5" />
          <span className="text-sm">Details</span>
        </Link>
      </div>
    </div>
  );
}
