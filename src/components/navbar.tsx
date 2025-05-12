import ReusableLink from "./reusable-link-button";
import ThemeToggle from "./ThemeToggle/page";

export default function Navbar() {
  return (
    <nav className="text-white px-6 py-4  border rounded-md
        border-[#0B1DE6] flex gap-4 items-center dark:border-white">
      <div className="w-30 h-24 mt-2 ml-4">
        <img src="/images/my-logo.png" alt="Logo"/>
      </div>

      <div className="flex gap-10 mt-10 ml-27">
        <ReusableLink href="/">Home</ReusableLink>
        <ReusableLink href="/about">About</ReusableLink>
        <ReusableLink href="/projects">Projects</ReusableLink>
        <ReusableLink href="/skills">Skills</ReusableLink>
        <ReusableLink href="/ContactPage">Contact</ReusableLink>
        <ReusableLink href="/services">Services</ReusableLink>
      </div>
      {/* makedark ligh toggle button */}
      <div className="flex justify-end p-4"> {/* Position the toggle button */}
          <ThemeToggle />
        </div>
    </nav>
  )
}
