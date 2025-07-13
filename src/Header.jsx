import { useState, useEffect, useRef } from "react";
import logo from "./assets/logo.png";

export default function Header({ darkMode, setDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    if (!isMenuOpen) return;
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="w-full sticky top-0 z-50">
      <nav
        className={`max-w-7xl mx-auto px-4 py-3 flex items-center justify-between 
          ${darkMode ? 'bg-dark/80 border-b border-dark' : 'bg-white/70 border-b border-white/40'} 
          backdrop-blur-md shadow-lg rounded-b-2xl transition-all duration-300`}
      >
        {/* Logo */}
        <a href="#accueil" className="flex items-center gap-2">
          <img src={logo} alt="First Ambulance Logo" className="h-12 w-auto drop-shadow-md transition-transform duration-200 hover:scale-105" />
        </a>
        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#accueil" className={`font-semibold text-lg px-2 py-1 rounded-lg transition-all duration-200 ${darkMode ? 'text-white hover:bg-dark hover:text-secondary focus:bg-dark focus:text-secondary' : 'text-secondary hover:bg-red-50 hover:text-red-600 focus:bg-red-100 focus:text-red-700'}`}>Accueil</a>
          <a href="#services" className={`font-semibold text-lg px-2 py-1 rounded-lg transition-all duration-200 ${darkMode ? 'text-white hover:bg-dark hover:text-secondary focus:bg-dark focus:text-secondary' : 'text-secondary hover:bg-red-50 hover:text-red-600 focus:bg-red-100 focus:text-red-700'}`}>Services</a>
          <a href="#a-propos" className={`font-semibold text-lg px-2 py-1 rounded-lg transition-all duration-200 ${darkMode ? 'text-white hover:bg-dark hover:text-secondary focus:bg-dark focus:text-secondary' : 'text-secondary hover:bg-red-50 hover:text-red-600 focus:bg-red-100 focus:text-red-700'}`}>A propos de nous</a>
        </div>
        {/* Call to Action Button */}
        <a href="tel:0666858569" className={`hidden md:inline-block ml-6 px-5 py-2 rounded-xl shadow-md font-semibold text-base transition-all duration-200 focus:ring-2 focus:ring-secondary bg-secondary text-white hover:bg-red-700 hover:scale-105`}>Appeler</a>
        {/* Dark/Light Toggle Button */}
        {setDarkMode && (
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 p-2 rounded-full border border-gray-300 dark:border-dark bg-white dark:bg-dark text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-dark transition-all duration-200"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0112 21.75c-5.385 0-9.75-4.365-9.75-9.75 0-4.136 2.664-7.64 6.418-9.093a.75.75 0 01.908.911A7.501 7.501 0 0019.5 12c0 1.273-.237 2.492-.67 3.617a.75.75 0 01.922.92z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5M12 19.5V21M4.219 4.219l1.061 1.061M17.657 17.657l1.06 1.06M3 12h1.5M19.5 12H21M4.219 19.781l1.061-1.061M17.657 6.343l1.06-1.06M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />
              </svg>
            )}
          </button>
        )}
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden bg-transparent border-none text-secondary hover:bg-red-100 transition-all duration-200 focus:outline-none ml-2 p-2 rounded-lg"
          aria-label="Ouvrir le menu"
        >
          <svg className="w-7 h-7" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>
      </nav>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black opacity-15" />
          {/* Menu Panel */}
          <div ref={menuRef} className="relative ml-auto w-72 h-full flex flex-col pt-16 px-6 gap-6 rounded-l-2xl bg-white/60 dark:bg-dark/60 text-secondary dark:text-white backdrop-blur-lg shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 text-2xl bg-transparent border-none text-secondary dark:text-white hover:text-red-500 focus:outline-none p-2 rounded-lg"
              aria-label="Fermer le menu"
            >
              &times;
            </button>
            {/* Mobile Nav Links */}
            <a href="#accueil" onClick={() => setIsMenuOpen(false)} className="font-semibold text-lg px-2 py-1 rounded-lg transition-all duration-200">Accueil</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="font-semibold text-lg px-2 py-1 rounded-lg transition-all duration-200">Services</a>
            <a href="#a-propos" onClick={() => setIsMenuOpen(false)} className="font-semibold text-lg px-2 py-1 rounded-lg transition-all duration-200">A propos de nous</a>
            <a href="tel:0666858569" onClick={() => setIsMenuOpen(false)} className="mt-4 px-5 py-2 rounded-xl shadow-md font-semibold text-base transition-all duration-200 focus:ring-2 focus:ring-secondary bg-secondary text-white hover:bg-red-700 hover:scale-105">Appeler</a>
          </div>
        </div>
      )}
    </header>
  );
}
