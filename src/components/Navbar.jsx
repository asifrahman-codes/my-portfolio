import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
  const sections = navLinks
    .map((link) => document.querySelector(link.href))
    .filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      const visibleSection = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visibleSection) {
        setActiveSection(visibleSection.target.id);
      }
    },
    {
      rootMargin: "-30% 0px -60% 0px",
      threshold: [0, 0.2, 0.5, 1],
    }
  );

  sections.forEach((section) => observer.observe(section));

  return () => observer.disconnect();
}, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-xl">
      <div className="container">
        <nav
          className="flex h-16 items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="text-lg font-bold tracking-tight text-white transition hover:text-zinc-200"
          >
            Asif<span className="text-indigo-400">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative text-sm font-medium transition ${
                  activeSection === link.href.substring(1)
                  ? "text-white"
                  : "text-zinc-400 hover:text-white"
                }`}
                >
                {link.name}
                  {activeSection === link.href.substring(1) && (
                    <span className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-indigo-400" />
                    )}
              </a>
            ))}

            {/* Resume */}
            <a
              href="/Asif_Rahman_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900/50 px-4 py-2 text-sm font-medium text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-900 hover:text-white"
            >
              <Download size={16} />
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="rounded-lg border border-transparent p-2 text-zinc-300 transition hover:border-zinc-800 hover:bg-zinc-900 hover:text-white md:hidden"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-zinc-800/70 py-4 md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-zinc-300 transition hover:bg-zinc-900 hover:text-white"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="/Asif_Rahman_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900/50 px-4 py-3 text-sm font-medium text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-900 hover:text-white"
              >
                <Download size={16} />
                Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;