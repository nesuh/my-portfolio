import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#5567C2] text-white py-6 px-6 mt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Branding and About */}
        <div>
          <h2 className="text-xl font-semibold mb-2">My Portfolio</h2>
          <p className="text-sm">
            A showcase of software engineering skills, focused on backend systems, SaaS platforms,
            and impactful tech solutions for Ethiopia and beyond.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Explore</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="/about" className="hover:underline">About Me</a></li>
            <li><a href="/projects" className="hover:underline">Projects</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
            <li><a href="/services" className="hover:underline">Services</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect</h3>
          <ul className="flex flex-wrap items-center gap-4 text-xl">
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="https://github.com/nesuh" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="mailto:antenhesileshi@gmail.com" className="hover:text-gray-300">
                <FaEnvelope />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-10 text-sm opacity-80">
        &copy; {new Date().getFullYear()} My Portfolio / All rights reserved.
      </div>
    </footer>
  );
}
