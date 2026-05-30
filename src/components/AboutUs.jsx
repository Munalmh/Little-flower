import { Eye, Shield, Award, Landmark } from 'lucide-react';

export default function AboutUs() {
  const historyEvents = [
    { year: "1998 AD", title: "Inception", desc: "Established as a pre-primary school with just a handful of students and a dream to serve Sehari, Nawalpur." },
    { year: "2008 AD", title: "Campus Expansion", desc: "Constructed new classrooms and outdoor play areas to accommodate growing early childhood education needs." },
    { year: "2018 AD", title: "Primary Level Upgrade", desc: "Expanded classes up to Class 4 to provide a solid foundation for elementary education." },
    { year: "2024 AD", title: "Modern Campus Upgrade", desc: "Equipped classrooms with interactive learning tools and child-friendly facilities." }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-school-gold-600">Overview</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-school-navy-900 mt-1 font-serif">About Our School</h2>
          <div className="w-16 h-1 bg-school-gold-500 mx-auto mt-4 rounded-full" />
          <p className="text-slate-500 mt-4 text-sm sm:text-base">
            Little Flower School has been a cornerstone of educational excellence in Nawalpur, nurturing generations of students to become leaders, thinkers, and builders of tomorrow.
          </p>
        </div>

        {/* Principal Message Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Background elements */}
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-school-gold-500/10 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-school-navy-900/5 rounded-2xl -z-10" />
            
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-100 max-w-md">
              <img
                src="/assets/principal.png"
                alt="School Principal"
                className="w-full object-cover aspect-[4/5] object-top"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600";
                }}
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-school-navy-950 via-school-navy-900/80 to-transparent p-6 text-white text-left">
                <span className="block text-xs uppercase tracking-wider text-school-gold-400 font-bold">Principal</span>
                <span className="text-lg font-bold">XYZ</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 text-left space-y-6">
            <span className="text-xs uppercase tracking-widest text-school-gold-600 font-bold block">A Welcome Note</span>
            <h3 className="text-2xl font-bold text-school-navy-900 font-serif leading-snug">
              "We believe every child is a unique blossom waiting to unfold in its own beautiful way."
            </h3>
            
            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                Dear Parents, Guardians, and Students,
              </p>
              <p>
                Welcome to Little Flower School. As we journey through the educational landscape, our core purpose remains steadfast: to cultivate curiosity, character, and competence in our students. We are not just teaching subjects; we are teaching students how to think critically, communicate clearly, and act with integrity.
              </p>
              <p>
                Our school has been serving the Nawalpur community for over two decades. In this time, we have focused on holistic development, blending state-of-the-art facilities with warm, personalized mentoring. We encourage our pupils to push boundaries, discover passions, and embrace diversity.
              </p>
              <p>
                I invite you to explore our website and visit our green campus in Sehari to feel the vibrancy of our community. Let us work together to make your child's educational experience memorable and rewarding.
              </p>
            </div>
            
            <div className="pt-4 border-t border-slate-100">
              <p className="font-extrabold text-school-navy-900 text-base">XYZ</p>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Principal</p>
            </div>
          </div>
        </div>

        {/* Mission and Vision cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {/* Mission Card */}
          <div className="group bg-slate-50 border border-slate-100 rounded-2xl p-8 hover:bg-school-navy-900 hover:text-white transition-all duration-500 shadow-sm hover:shadow-xl text-left hover:-translate-y-1">
            <div className="p-3 bg-school-gold-500/10 rounded-xl w-fit group-hover:bg-school-gold-500/20 border border-school-gold-500/20 mb-6 transition-colors">
              <Shield className="w-8 h-8 text-school-gold-500" />
            </div>
            <h3 className="text-2xl font-bold mb-4 font-serif group-hover:text-school-gold-400 transition-colors">Our Mission</h3>
            <p className="text-slate-600 group-hover:text-slate-300 transition-colors text-sm sm:text-base leading-relaxed">
              To provide a safe, respectful, and nurturing environment where student learning is enriched through modern curricula, collaborative partnerships, and values-based guidance, empowering students to lead with accountability.
            </p>
          </div>

          {/* Vision Card */}
          <div className="group bg-slate-50 border border-slate-100 rounded-2xl p-8 hover:bg-school-navy-900 hover:text-white transition-all duration-500 shadow-sm hover:shadow-xl text-left hover:-translate-y-1">
            <div className="p-3 bg-school-gold-500/10 rounded-xl w-fit group-hover:bg-school-gold-500/20 border border-school-gold-500/20 mb-6 transition-colors">
              <Eye className="w-8 h-8 text-school-gold-500" />
            </div>
            <h3 className="text-2xl font-bold mb-4 font-serif group-hover:text-school-gold-400 transition-colors">Our Vision</h3>
            <p className="text-slate-600 group-hover:text-slate-300 transition-colors text-sm sm:text-base leading-relaxed">
              To emerge as a premier educational institution of Nawalpur that fosters intellectual growth, ethical values, creative potential, and global perspectives in pupils, enabling them to excel in a dynamic world.
            </p>
          </div>
        </div>

        {/* History Timeline */}
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-sm">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-school-navy-900/5 py-1.5 px-4 rounded-full border border-school-navy-900/10 text-xs font-bold text-school-navy-800 uppercase tracking-widest">
              <Landmark className="w-3.5 h-3.5 text-school-gold-600" />
              <span>Our Timeline</span>
            </div>
            <h3 className="text-2xl font-bold text-school-navy-900 mt-3 font-serif">Journey of Excellence</h3>
            <p className="text-slate-500 text-sm mt-2">How we grew to become one of the region's top schools.</p>
          </div>

          <div className="relative border-l border-slate-200 ml-4 md:ml-8 space-y-8 text-left max-w-4xl mx-auto">
            {historyEvents.map((event, idx) => (
              <div key={idx} className="relative pl-8 sm:pl-10 group">
                {/* Timeline Bullet */}
                <div className="absolute top-1.5 -left-[7px] w-3 h-3 rounded-full bg-slate-300 group-hover:bg-school-gold-500 group-hover:scale-125 border border-white transition-all duration-300" />
                
                {/* Content */}
                <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6">
                  <div className="text-base font-extrabold text-school-gold-600 tracking-wider min-w-[70px]">
                    {event.year}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-school-navy-900 group-hover:text-school-gold-600 transition-colors">
                      {event.title}
                    </h4>
                    <p className="text-slate-500 text-sm mt-1 leading-relaxed max-w-2xl">
                      {event.desc}
                    </p>
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
