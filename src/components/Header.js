import Link from "next/link";
import React from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const scrollToSection = (sectionId, event) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(true);
      } else {
        setIsMenuOpen(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="sticky top-0 bg-gray-200 z-10 shadow relative">
      <nav className="flex justify-between items-center pl-2 pr-1 lg:pl-10 lg:pr-10">
        <div className="flex lg:hidden">
          <button onClick={() => setIsMenuOpen(true)}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
              alt="menu"
              className="w-6 h-6 m-3"
            />
          </button>
        </div>
        <div
          className={`flex flex-col space-y-4 text-center absolute top-0 left-0 py-3 w-full bg-gray-200 transform transition-transform ease-out duration-300 ${
            isMenuOpen ? "menu-open" : "menu-closed"
          } lg:relative lg:flex-row lg:space-y-0 lg:space-x-6`}
        >
          {isMenuOpen && (
            <button
              className="absolute top-2 left-6 text-2xl lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            >
              &#10005;
            </button>
          )}
          <Link
            className="py-2 px-2 lg:py-5 lg:px-5"
            href="/"
            onClick={(e) => scrollToSection("home", e)}
          >
            Home
          </Link>
          <Link
            className="py-2 px-2 lg:py-5 lg:px-5"
            href="#services"
            onClick={(e) => scrollToSection("services", e)}
          >
            Services
          </Link>
          <Link
            className="py-2 px-2 lg:py-5 lg:px-5"
            href="#about"
            onClick={(e) => scrollToSection("about", e)}
          >
            About
          </Link>
          <Link
            className="py-2 px-2 lg:py-5 lg:px-5"
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