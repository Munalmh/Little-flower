import { ArrowRight, BookOpen, Calendar, ShieldCheck, Trophy } from 'lucide-react';

export default function Hero({ onTourClick, onApplyClick }) {
  const stats = [
    { icon: <BookOpen className="w-5 h-5 text-school-gold-400" />, label: "Quality Curriculums", value: "Primary - Sec" },
    { icon: <Trophy className="w-5 h-5 text-school-gold-400" />, label: "Success Rate", value: "100% SEE" },
    { icon: <ShieldCheck className="w-5 h-5 text-school-gold-400" />, label: "Established Year", value: "1998 AD" },
  ];

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-school-navy-950 text-white">
      {/* Background Image with Dark Navy Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/hero_bg.png"
          alt="Little Flower School Campus"
          className="w-full h-full object-cover object-center animate-pulse-slow opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-school-navy-950 via-school-navy-900/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-school-navy-950 via-transparent to-transparent" />
      </div>

      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-school-gold-500/10 blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-school-navy-500/20 blur-3xl" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Tagline & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left animate-slide-in-left">
            <div className="inline-flex items-center space-x-2 bg-school-gold-500/10 border border-school-gold-500/30 rounded-full py-1.5 px-4 text-xs sm:text-sm font-bold text-school-gold-300 tracking-wide uppercase">
              <Calendar className="w-4 h-4 text-school-gold-500" />
              <span>Admissions Open for Academic Year 2026/27</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white font-serif">
              Nurturing Minds,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-school-gold-400 to-amber-300">
                Shaping Futures
              </span>
            </h1>
            
            <p className="text-base sm:text-lg text-slate-350 max-w-xl font-normal leading-relaxed">
              Welcome to Little Flower School at Sehari, Nawalpur. We provide an inspiring learning environment that encourages academic excellence, creativity, and moral values.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={onApplyClick}
                className="group inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-school-gold-500 to-amber-500 hover:from-school-gold-600 hover:to-amber-600 text-school-navy-950 font-bold py-3.5 px-8 rounded-xl shadow-lg hover:shadow-school-gold-500/20 hover:-translate-y-0.5 transition-all duration-300"
              >
                <span>Admission Open</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={onTourClick}
                className="inline-flex items-center justify-center border-2 border-white/80 hover:border-white hover:bg-white/10 text-white font-semibold py-3.5 px-8 rounded-xl transition-all duration-300"
              >
                Take a Tour
              </button>
            </div>
          </div>

          {/* Floating Stats Badges / Cards */}
          <div className="lg:col-span-5 flex flex-col space-y-6 lg:pl-8 animate-slide-in-right">
            <div className="glassmorphism-dark rounded-2xl p-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-school-gold-500/10 rounded-full blur-xl" />
              <h3 className="text-xl font-bold font-serif text-school-gold-400 mb-4 border-b border-white/10 pb-2">
                Why Little Flower?
              </h3>
              
              <div className="space-y-4">
                {stats.map((stat, idx) => (
                  <div key={idx} className="flex items-center space-x-4 p-3 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors duration-300">
                    <div className="p-2.5 bg-school-gold-500/15 rounded-lg border border-school-gold-500/20">
                      {stat.icon}
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">{stat.label}</p>
                      <p className="text-base font-bold text-white">{stat.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick highlight banner */}
            <div className="bg-gradient-to-r from-school-gold-500 to-amber-500 rounded-2xl p-4 text-school-navy-950 font-bold shadow-lg flex items-center justify-between">
              <div>
                <span className="block text-xs uppercase tracking-widest text-school-navy-900/70">Location</span>
                <span className="text-sm sm:text-base">Sehari-1, Nawalpur, Nepal</span>
              </div>
              <div className="text-right">
                <span className="block text-xs uppercase tracking-widest text-school-navy-900/70">Phone</span>
                <span className="text-sm sm:text-base">+977-9800000000</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
