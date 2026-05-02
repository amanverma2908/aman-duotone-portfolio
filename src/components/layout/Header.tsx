import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/src/context/ThemeContext';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 4);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-ink/10 bg-paper/80 text-ink shadow-sm backdrop-blur-[3px] dark:border-paper/10 dark:bg-ink/80 dark:text-paper'
          : 'border-b border-transparent bg-transparent text-white mix-blend-difference backdrop-blur-none'
      }`}
    >
      <div className="text-xl font-display font-bold tracking-tighter uppercase">
        Aman Verma
      </div>
      <nav className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-widest">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="relative after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:ease-out hover:after:origin-bottom-left hover:after:scale-x-100"
          >
            {link.label}
          </a>
        ))}
      </nav>
      <nav className="flex items-center gap-6">
        <button
          onClick={toggleTheme}
          className="flex items-center gap-2 text-sm font-mono font-medium uppercase tracking-widest hover:opacity-70 transition-opacity"
        >
          {theme === 'light' ? (
            <>
              <Moon size={16} /> Dark
            </>
          ) : (
            <>
              <Sun size={16} /> Light
            </>
          )}
        </button>
      </nav>
    </header>
  );
}
