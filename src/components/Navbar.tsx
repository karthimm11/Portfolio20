import React, { useState, useEffect } from 'react';
import { MenuIcon, CloseIcon, CodeIcon } from './Icons';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', href);
      setActiveSection(targetId);
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="navbar-container" aria-label="Main Navigation">
        {/* Brand / Logo */}
        <a
          href="#home"
          className="navbar-brand"
          onClick={(e) => handleNavClick(e, '#home')}
          aria-label="Karthik K S - Home"
        >
          <span className="brand-icon">
            <CodeIcon size={20} />
          </span>
          <span className="brand-text">
            Karthik <span>K S</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="nav-desktop-links" role="menubar">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                className={`nav-link ${isActive ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, item.href)}
                role="menuitem"
                aria-current={isActive ? 'page' : undefined}
              >
                {item.name}
                {isActive && <span className="active-dot" aria-hidden="true" />}
              </a>
            );
          })}
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          className="mobile-menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-nav-menu"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {isOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
        </button>

        {/* Mobile Backdrop & Drawer */}
        {isOpen && (
          <div
            className="mobile-backdrop"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
        )}

        <div
          id="mobile-nav-menu"
          className={`mobile-nav-drawer ${isOpen ? 'open' : ''}`}
          aria-hidden={!isOpen}
        >
          <div className="mobile-drawer-header">
            <span className="mobile-brand-title">Navigation</span>
            <button
              type="button"
              className="mobile-drawer-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <CloseIcon size={22} />
            </button>
          </div>

          <div className="mobile-nav-links">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  <span>{item.name}</span>
                  {isActive && <span className="active-badge">Active</span>}
                </a>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
};
