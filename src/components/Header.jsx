import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-xl border-b border-white/10 shadow-2xl z-50 transition-all duration-300">
      {/* Subtle background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-purple-900/20"></div>
      
      <nav className="container mx-auto flex justify-between items-center py-4 px-6 relative z-10">
        {/* Enhanced Logo */}
        <div
          className="relative group cursor-pointer select-none"
          onClick={() => {
            document
              .querySelector("#hero")
              ?.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false);
          }}
        >
          <div className="text-2xl md:text-3xl font-black tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 hover:from-blue-300 hover:via-cyan-300 hover:to-blue-300 transition-all duration-300">
            MyPortfolio
          </div>
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
        </div>

        {/* Enhanced Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative p-2 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400/50 rounded-lg bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 transition-all duration-300"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 relative">
              <span
                className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                  isOpen ? 'rotate-45 top-3' : 'top-1'
                }`}
              />
              <span
                className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out top-3 ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                  isOpen ? '-rotate-45 top-3' : 'top-5'
                }`}
              />
            </div>
          </button>
        </div>

        {/* Enhanced Navigation Menu */}
        <ul
          className={`${
            isOpen 
              ? "opacity-100 visible translate-y-0" 
              : "opacity-0 invisible -translate-y-4 md:opacity-100 md:visible md:translate-y-0"
          } absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-xl border-b border-white/10 md:static md:flex md:space-x-1 md:w-auto md:bg-transparent md:backdrop-blur-0 md:border-0 transition-all duration-300 ease-out`}
        >
          {[
            { name: "Home", href: "#hero" },
            { name: "About", href: "#about" },
            { name: "Skills", href: "#skills" },
            { name: "Projects", href: "#projects" },
            { name: "Contact", href: "#contact" }
          ].map((item, index) => (
            <li key={item.name} className={`animate-fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
              <a
                href={item.href}
                className="group block px-6 py-4 md:px-4 md:py-2 cursor-pointer relative text-gray-300 hover:text-white font-medium text-lg md:text-base transition-all duration-300 md:rounded-lg md:hover:bg-white/10"
                onClick={() => setIsOpen(false)}
              >
                <span className="relative z-10">{item.name}</span>
                
                {/* Desktop underline effect */}
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-3/4 transition-all duration-300 ease-out hidden md:block"></span>
                
                {/* Mobile highlight effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:hidden"></div>
                
                {/* Desktop glow effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/0 via-blue-400/10 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg blur-sm hidden md:block"></div>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom border glow effect */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
    </header>
  );
};

export default Header;