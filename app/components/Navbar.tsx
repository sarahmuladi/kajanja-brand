"use client";

import { useState } from "react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Why Us", href: "#why-us" },
  { name: "Vision", href: "#vision" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        
        {/* Logo + Company Name */}
        <a
          href="#home"
          className="flex items-center gap-3 "
          onClick={() => setIsOpen(false)}
        >
          {/* Logo placeholder */}
          <div className="flex items-center justify-center text-sm  font-bold ">
            <img src="/Images/KB_Logo.png" alt="Kajanja Brand"  width={80}   height={80} />
          </div>

          <div className="leading-none">
            <p className="text-lg font-bold tracking-tight text-primary">
              KAJANJA BRAND
            </p>
            <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-primary">
              Company Limited
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-primary transition-colors duration-200 hover:text-black"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            className="rounded-full bg-primary px-5 py-3 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent"
          >
            Start a Conversation
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <span className="text-xl">×</span>
          ) : (
            <span className="text-xl">☰</span>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-gray-100 bg-white px-6 py-6 shadow-lg md:hidden">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-gray-100 py-4 text-base font-medium text-gray-800"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-5 rounded-full bg-accent px-5 py-3.5 text-center text-sm font-medium text-white"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
