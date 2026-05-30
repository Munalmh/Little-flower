import { GraduationCap, ArrowUp } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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
    <footer className="bg-school-navy-950 text-white border-t border-white/5 pt-16 pb-8 text-left relative overflow-hidden">
      
      {/* Decorative Blur Circles */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-school-gold-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Footer Top Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-white/10 pb-12 mb-10">
          
          {/* Logo and About Brand */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={handleScrollToTop}>
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 overflow-hidden shadow-inner">
                <img
                  src="/assets/logo.png"
                  alt="Little Flower School Logo"
                  className="w-9 h-9 object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <GraduationCap style={{ display: 'none' }} className="w-6 h-6 text-school-gold-400" />
              </div>
              <div>
                <span className="block text-base font-extrabold tracking-tight text-white">
                  LITTLE FLOWER
                </span>
                <span className="block text-[10px] font-bold uppercase tracking-widest text-school-gold-400 -mt-1">
                  Sehari, Nawalpur
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed pt-2">
              Empowering student educational tracks and character building in Nawalpur through modern learning standards since 1998 AD.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-school-gold-400 mb-4 font-serif">Quick Navigation</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {['home', 'about', 'academics', 'gallery', 'contact'].map((id) => (
                <li key={id}>
                  <button
                    onClick={() => handleNavClick(id)}
                    className="text-slate-400 hover:text-white transition-colors duration-200 capitalize font-medium"
                  >
                    {id === 'about' ? 'About Us' : id === 'contact' ? 'Contact Us' : id}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Administration timings & quick info */}
          <div>
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-school-gold-400 mb-4 font-serif">Office Hours</h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
              <li>
                <span className="block text-white font-semibold">Sunday - Thursday</span>
                <span>9:00 AM - 4:00 PM</span>
              </li>
              <li>
                <span className="block text-white font-semibold">Friday</span>
                <span>9:00 AM - 2:00 PM</span>
              </li>
              <li>
                <span className="block text-white font-semibold">Saturday</span>
                <span className="text-school-gold-500 font-medium">Weekly Holiday</span>
              </li>
            </ul>
          </div>

          {/* Social Links & Newsletter Mock */}
          <div className="space-y-4">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-school-gold-400 mb-4 font-serif">Follow Our Updates</h4>
            <div className="flex space-x-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-school-gold-500 transition-all text-slate-350 hover:text-white"
                aria-label="Facebook Link"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-school-gold-500 transition-all text-slate-350 hover:text-white"
                aria-label="Twitter Link"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-school-gold-500 transition-all text-slate-350 hover:text-white"
                aria-label="Instagram Link"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
            </div>
            <div className="pt-2">
              <span className="block text-xs text-slate-400">Principal Desk:</span>
              <a href="mailto:principal@littleflowernawalpur.edu.np" className="text-xs font-bold text-school-gold-400 hover:text-school-gold-300">
                principal@littleflowernawalpur.edu.np
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom Rights */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 space-y-4 sm:space-y-0">
          <div>
            &copy; {new Date().getFullYear()} Little Flower School, Sehari, Nawalpur. All Rights Reserved.
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={handleScrollToTop}
              className="flex items-center justify-center p-2 bg-white/5 border border-white/10 hover:border-school-gold-500 rounded-lg hover:bg-white/10 text-white transition-all duration-300 shadow-md group"
              aria-label="Back to Top"
            >
              <span className="mr-1 font-bold">Scroll to Top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
