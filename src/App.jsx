import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Notices from './components/Notices';
import AboutUs from './components/AboutUs';
import Academics from './components/Academics';
import Gallery from './components/Gallery';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const options = {
      root: null,
      rootMargin: '-30% 0px -40% 0px', // Trigger when section occupies the middle of the screen
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const scrollToSection = (id) => {
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
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      {/* Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Sections */}
      <main className="flex-grow">
        
        {/* Hero Section */}
        <Hero 
          onTourClick={() => scrollToSection('about')} 
          onApplyClick={() => scrollToSection('contact')} 
        />
        
        {/* Notices Section */}
        <Notices />
        
        {/* About Us Section */}
        <AboutUs />
        
        {/* Academics Section */}
        <Academics />
        
        {/* Gallery Section */}
        <Gallery />
        
        {/* Contact Us Section */}
        <ContactUs />
        
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
