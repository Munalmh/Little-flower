import { GraduationCap, Award, Compass, CheckCircle2 } from 'lucide-react';

export default function Academics() {
  const levels = [
    {
      icon: <Compass className="w-8 h-8 text-school-navy-900" />,
      title: "Pre-Primary Level",
      grades: "Nursery, LKG & UKG",
      desc: "Nurturing early childhood development through play-based learning, sensory exploration, and basic social-emotional skills.",
      highlights: ["Play-based learning", "Sensory activities", "Basic phonics & numbers", "Social skill building"]
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-school-navy-900" />,
      title: "Lower Primary Level",
      grades: "Class 1 & 2",
      desc: "Introducing formal academic concepts in reading, writing, mathematics, and environmental studies in a gentle, engaging environment.",
      highlights: ["Core reading & writing", "Foundational mathematics", "Creative arts & music", "Interactive story hours"]
    },
    {
      icon: <Award className="w-8 h-8 text-school-navy-900" />,
      title: "Upper Primary Level",
      grades: "Class 3 & 4",
      desc: "Developing independent thinking, critical reasoning, introductory computer literacy, and collaborative project-based learning.",
      highlights: ["Critical thinking", "Introductory computers", "Science & environment", "Collaborative projects"]
    }
  ];

  const facilities = [
    {
      image: "/assets/science_lab.png",
      title: "Discovery Center",
      desc: "An interactive room where young students engage with science models, nature study materials, and simple safety-first experiments that spark their curiosity about the physical world.",
      features: ["Simple Science Models", "Safety-first Environment", "Hands-on Activity Kits", "Nature Study Materials"]
    },
    {
      image: "/assets/computer_lab.png",
      title: "Computer Center",
      desc: "Our child-friendly computer center introduces students to basic digital literacy, educational games, typing skills, and creative drawing tools.",
      features: ["Child-friendly Desktop systems", "Educational learning software", "Guided instructor supervision", "Basic typing & drawing apps"]
    },
    {
      image: "/assets/library.png",
      title: "Resource Library",
      desc: "A cozy and colorful reading room housing illustrated books, children's literature, storybooks, and educational games to foster a lifelong love for reading.",
      features: ["Colorful Reading Alcoves", "Illustrated Storybooks", "Educational Board Games", "Guided Reading Sessions"]
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
