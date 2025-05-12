// If this is not what you meant, use `next/link` instead
// import Link from "next/link"; // Uncomment if using Next.js Link

type ServiceDetail = {
  icon: React.ReactNode;
  description: string;
};

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  details: ServiceDetail[];
  detailLink: string;
};

export default function ServiceCard({ icon, title, details, detailLink }: ServiceCardProps) {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-gray-100 rounded-full shadow-sm hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      </div>

      {/* Detail List */}
      <div className="space-y-4 mb-4">
        {details.map((detail, index) => (
          <div
            key={index}
            className="flex items-start gap-3 bg-gray-50 border border-gray-200 rounded-lg p-3 hover:bg-white hover:shadow-sm transition"
          >
            <div className="w-5 h-5">{detail.icon}</div>
            <p className="text-sm text-gray-700">{detail.description}</p>
          </div>
        ))}
      </div>

      {/* Detail Link */}
      <a
        href={detailLink}
        className="inline-flex items-center gap-2 text-[#5567C2] hover:text-blue-700 text-sm font-medium transition-colors duration-200"
      >
        <img src="/images/icons8-info-50 (1).png" alt="Detail Info" className="w-5 h-5" />
        Learn more
      </a>
    </div>
  );
}
