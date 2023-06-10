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

  return (
    <header className="sticky top-0 bg-gray-200 z-10 shadow relative">
      <nav className="flex justify-between items-center pl-2 pr-1 sm:pl-10 sm:pr-10">
        <div className="flex sm:hidden">
          <button onClick={() => setIsMenuOpen(true)}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png' alt="menu" className="w-6 h-6 m-3"/>
          </button>
        </div>
        <div className={`flex flex-col space-y-4 text-center absolute top-0 left-0 py-3 w-full bg-gray-200 transform transition-transform ease-out duration-300 ${isMenuOpen ? 'menu-open' : 'menu-closed'} sm:relative sm:flex-row sm:space-y-0 sm:space-x-6`}>
          {isMenuOpen && (
            <button className="absolute top-2 left-6 text-2xl" onClick={() => setIsMenuOpen(false)}>
              &#10005;
            </button>
          )}
          <Link
            className="py-2 px-2 sm:py-5 sm:px-5"
            href="/"
            onClick={(e) => scrollToSection("home", e)}
          >
            Home
          </Link>
          <Link
            className="py-2 px-2 sm:py-5 sm:px-5"
            href="/"
            onClick={(e) => scrollToSection("services", e)}
          >
            Services
          </Link>
          <Link
            className="py-2 px-2 sm:py-5 sm:px-5"
            href="#about"
            onClick={(e) => scrollToSection("about", e)}
          >
            About
          </Link>
          <Link
            className="py-2 px-2 sm:py-5 sm:px-5"
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
