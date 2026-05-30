import { useState, useEffect } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';

export default function Navbar({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
      
      // Update scrolled background style
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'academics', label: 'Academics' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleNavClick = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of the navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div id="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      <nav
        className={`sticky top-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? 'glassmorphism shadow-md py-3'
            : 'bg-white/95 border-b border-slate-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Branding */}
            <div
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={() => handleNavClick('home')}
            >
              <div className="relative w-12 h-12 flex items-center justify-center rounded-full bg-slate-50 border border-school-gold-200 overflow-hidden shadow-inner group-hover:scale-105 transition-transform duration-300">
                <img
                  src="/assets/logo.png"
                  alt="Little Flower School Logo"
                  className="w-10 h-10 object-contain"
                  onError={(e) => {
                    // Fallback to Icon if image fails to load
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <div style={{ display: 'none' }} className="text-school-navy-900">
                  <GraduationCap className="w-7 h-7 text-school-gold-600" />
                </div>
              </div>
              <div>
                <span className="block text-lg font-extrabold tracking-tight text-school-navy-900 group-hover:text-school-navy-800 transition-colors">
                  LITTLE FLOWER SCHOOL
                </span>
                <span className="block text-xs font-semibold uppercase tracking-widest text-school-gold-600 -mt-1">
                  Sehari, Nawalpur
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`nav-link text-school-navy-800 hover:text-school-navy-950 font-medium ${
                    activeSection === link.id
                      ? 'active text-school-gold-600'
                      : 'text-school-navy-500'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick('contact')}
                className="bg-school-navy-900 hover:bg-school-navy-950 text-white font-semibold py-2.5 px-5 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 text-sm"
              >
                Admission Open
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-lg text-school-navy-800 hover:bg-slate-100 focus:outline-none transition-colors duration-250"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 transition-all duration-300 ease-in-out origin-top shadow-xl ${
            isOpen ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-95 invisible h-0 pointer-events-none'
          }`}
        >
          <div className="px-4 pt-2 pb-6 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-base font-semibold transition-all duration-200 ${
                  activeSection === link.id
                    ? 'bg-school-gold-50 text-school-gold-700 border-l-4 border-school-gold-500'
                    : 'text-school-navy-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 px-4">
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full text-center bg-school-gold-500 hover:bg-school-gold-600 text-school-navy-950 font-bold py-3 px-4 rounded-lg shadow-md transition-all duration-300 text-base"
              >
                Admission Open
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
