import { GraduationCap, Award, Compass, CheckCircle2 } from 'lucide-react';

export default function Academics() {
  const levels = [
    {
      icon: <Compass className="w-8 h-8 text-school-navy-900" />,
      title: "Primary Level",
      grades: "Grade 1 - 5",
      desc: "Focusing on building core literacy, numeracy, social skills, and creative self-expression in young minds.",
      highlights: ["Interactive learning", "Language foundations", "Arts & crafts program", "E-learning basics"]
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-school-navy-900" />,
      title: "Lower Secondary Level",
      grades: "Grade 6 - 8",
      desc: "Deepening theoretical knowledge, introducing advanced scientific concepts, and cultivating teamwork values.",
      highlights: ["Hands-on lab experiments", "Pre-algebra & geometry", "Computer applications", "Inter-school debates"]
    },
    {
      icon: <Award className="w-8 h-8 text-school-navy-900" />,
      title: "Secondary Level",
      grades: "Grade 9 - 10 (SEE Prep)",
      desc: "Comprehensive academic training aligned with the national curriculum, equipping students for SEE achievements.",
      highlights: ["Rigorous exam preparation", "Specialized Science streams", "Career guidance counseling", "Computer coding classes"]
    }
  ];

  const facilities = [
    {
      image: "/assets/science_lab.png",
      title: "Science Laboratory",
      desc: "A fully equipped laboratory that allows students to perform practical experiments in Physics, Chemistry, and Biology. Features modern microscopes, chemical agents, and safety equipment to foster scientific inquiry.",
      features: ["Advanced Microscopes", "Full Safety Equipment", "Chemical Reagents & Apparatus", "Hands-on Student Desks"]
    },
    {
      image: "/assets/computer_lab.png",
      title: "Computer Center",
      desc: "Our state-of-the-art computer center has rows of modern desktop systems with high-speed internet. Students learn digital literacy, document building, internet research, and basic coding paradigms.",
      features: ["Latest Desktop systems", "High-speed Internet connection", "Individual student seating", "Coding & Office Suite training"]
    },
    {
      image: "/assets/library.png",
      title: "Resource Library",
      desc: "A quiet, welcoming reading haven housing over 5,000 reference books, classic novels, children's literature, and educational journals. It encourages reading habits and assists in course-related research.",
      features: ["5,000+ Books & Journals", "Cozy Reading Alcoves", "Academic Reference Section", "Newspaper & Bulletin board"]
    }
  ];

  return (
    <section id="academics" className="py-20 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-school-gold-600">Curricula & Spaces</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-school-navy-900 mt-1 font-serif">Academic Excellence</h2>
          <div className="w-16 h-1 bg-school-gold-500 mx-auto mt-4 rounded-full" />
          <p className="text-slate-500 mt-4 text-sm sm:text-base">
            We provide standard national curriculums enhanced by modern technology, interactive labs, and holistic developmental methodologies.
          </p>
        </div>

        {/* Levels Section */}
        <div className="mb-20">
          <div className="text-left mb-8">
            <h3 className="text-2xl font-bold text-school-navy-900 font-serif">Educational Stages</h3>
            <p className="text-slate-400 text-sm mt-1">Nurturing progress step by step.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {levels.map((level, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 bg-school-gold-500/10 border border-school-gold-500/20 rounded-xl w-fit mb-6">
                    {level.icon}
                  </div>
                  
                  <span className="block text-xs uppercase tracking-widest text-school-gold-600 font-bold mb-1">
                    {level.grades}
                  </span>
                  
                  <h4 className="text-xl font-bold text-school-navy-900 font-serif mb-3">
                    {level.title}
                  </h4>
                  
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    {level.desc}
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-6 space-y-2">
                  <span className="block text-xs font-extrabold uppercase tracking-wider text-school-navy-900 mb-2">Key Offerings</span>
                  {level.highlights.map((item, idy) => (
                    <div key={idy} className="flex items-center text-xs sm:text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-school-gold-500 mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Facilities Section */}
        <div>
          <div className="text-left mb-10">
            <h3 className="text-2xl font-bold text-school-navy-900 font-serif">Modern Learning Facilities</h3>
            <p className="text-slate-400 text-sm mt-1">Providing state-of-the-art infrastructure for practical understanding.</p>
          </div>

          <div className="space-y-16">
            {facilities.map((fac, idx) => (
              <div
                key={idx}
                className={`flex flex-col lg:flex-row items-center gap-10 ${
                  idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Facility Image with dynamic frame styling */}
                <div className="w-full lg:w-1/2 relative">
                  <div className="absolute -inset-1.5 bg-gradient-to-r from-school-gold-500 to-amber-400 rounded-2xl blur opacity-25" />
                  <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 aspect-[16/10]">
                    <img
                      src={fac.image}
                      alt={fac.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800";
                      }}
                    />
                  </div>
                </div>

                {/* Facility Content */}
                <div className="w-full lg:w-1/2 text-left space-y-6">
                  <div className="inline-flex bg-school-navy-900 text-white rounded-lg px-3 py-1 text-xs font-bold uppercase tracking-wider">
                    Facility {idx + 1}
                  </div>
                  
                  <h4 className="text-2xl font-bold text-school-navy-900 font-serif">
                    {fac.title}
                  </h4>
                  
                  <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                    {fac.desc}
                  </p>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    {fac.features.map((feat, idy) => (
                      <div key={idy} className="flex items-center text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-school-gold-500 mr-2 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
