
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#work" },
  { label: "Skills", href: "#tools" },
  { label: "Academic", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Highlight the section currently nearest the top of the viewport.
  useEffect(() => {
    const updateActiveSection = () => {
      // Account for the fixed header when checking section positions.
      const scrollPosition = window.scrollY + 180;

      // Sort sections by their real page position, not navbar order.
      const sections = navLinks
        .map((link) => {
          const id = link.href.slice(1);
          const element = document.getElementById(id);

          return {
            id,
            element,
            top: element
              ? element.getBoundingClientRect().top + window.scrollY
              : Infinity,
          };
        })
        .filter((section) => section.element)
        .sort((a, b) => a.top - b.top);

      if (sections.length === 0) return;

      let currentSection = sections[0].id;

      sections.forEach((section) => {
        if (section.top <= scrollPosition) {
          currentSection = section.id;
        }
      });

      // Keep Contact active when the visitor reaches the bottom of the page.
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;

      if (isAtBottom) {
        currentSection = sections[sections.length - 1].id;
      }

      setActiveSection(currentSection);
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });
    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("hashchange", updateActiveSection);

    // Clean up listeners when the header component unmounts.
    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, []);

  // Close the mobile menu whenever a navigation link is selected.
  const handleNavigation = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-(--color-silver-sage)/15 bg-(--color-obsidian)/90 text-(--color-warm-ivory) backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-10 lg:px-12"
      >
        {/* Personal wordmark links visitors back to the Hero section. */}
        <a
          href="#home"
          onClick={handleNavigation}
          className="text-2xl font-bold tracking-tight transition-colors hover:text-(--color-silver-sage)"
        >
          Sunny<span className="text-(--color-moss-grey)">.</span>
        </a>

        {/* Desktop navigation highlights the currently active section. */}
        <div className="hidden items-center gap-2 lg:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);

            return (
              <a
                key={link.label}
                href={link.href}
                onClick={handleNavigation}
                aria-current={isActive ? "location" : undefined}
                className={`rounded-full px-3 py-2 text-sm transition-colors ${
                  isActive
                    ? "bg-(--color-forest-green) text-(--color-warm-ivory)"
                    : "text-(--color-silver-sage) hover:bg-(--color-deep-forest) hover:text-(--color-warm-ivory)"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Display the menu toggle on smaller screens. */}
        <button
          type="button"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-(--color-silver-sage)/30 text-xl transition-colors hover:bg-(--color-deep-forest) lg:hidden"
        >
          {menuOpen ? "×" : "☰"}
        </button>

        {/* Mobile navigation shares the same links and active-section state. */}
        <div
          id="mobile-navigation"
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute inset-x-0 top-full border-b border-(--color-silver-sage)/20 bg-(--color-obsidian) px-6 py-4 shadow-xl shadow-black/20 lg:hidden`}
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={handleNavigation}
                  aria-current={isActive ? "location" : undefined}
                  className={`rounded-lg px-4 py-3 text-sm transition-colors ${
                    isActive
                      ? "bg-(--color-forest-green) text-(--color-warm-ivory)"
                      : "text-(--color-silver-sage) hover:bg-(--color-deep-forest) hover:text-(--color-warm-ivory)"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>

        {/* Keep the contact shortcut visible on desktop. */}
        <a
          href="#contact"
          onClick={handleNavigation}
          className="hidden items-center gap-2 rounded-full bg-(--color-warm-ivory) px-5 py-3 text-sm font-semibold text-(--color-obsidian) transition-colors hover:bg-(--color-silver-sage) lg:inline-flex"
        >
          Let's talk
          <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}

export default SiteHeader;
