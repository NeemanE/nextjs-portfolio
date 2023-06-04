import Link from "next/link";

export default function Header() {
  const scrollToSection = (sectionId, event) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 bg-[#f7f7f7] z-10 shadow">
      <nav className="flex justify-start pl-10">
        <div className="flex space-x-4">
          <Link
            className="py-5 px-5"
            href="/"
            onClick={(e) => scrollToSection("home", e)}
          >
            Home
          </Link>
          <Link
            className="py-5 px-5"
            href="/"
            onClick={(e) => scrollToSection("services", e)}
          >
            Services
          </Link>
          <Link
            className="py-5 px-5"
            href="#about"
            onClick={(e) => scrollToSection("about", e)}
          >
            About
          </Link>
          <Link
            className="py-5 px-5"
            href="#contact"
            onClick={(e) => scrollToSection("contact", e)}
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
