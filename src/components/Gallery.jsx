import { useState } from 'react';
import { Play, ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const galleryItems = [
    {
      src: "/assets/hero_bg.png",
      title: "School Campus Front View",
      category: "campus",
      desc: "Beautiful green surroundings and the front facade of Little Flower School."
    },
    {
      src: "/assets/gallery_classroom.png",
      title: "Active Classroom Learning",
      category: "academics",
      desc: "Students engaged in collaborative exercises led by our teaching staff."
    },
    {
      src: "/assets/science_lab.png",
      title: "Practical Chemistry Lab Session",
      category: "academics",
      desc: "Secondary level students conducting acid-base experiments."
    },
    {
      src: "/assets/gallery_sports.png",
      title: "Annual Football Tournament",
      category: "sports",
      desc: "Friendly inter-house competition at the school playground."
    },
    {
      src: "/assets/computer_lab.png",
      title: "Computer Class Session",
      category: "academics",
      desc: "Primary students learning digital paint brush tools and typing skills."
    },
    {
      src: "/assets/library.png",
      title: "Reading Hours in Library",
      category: "campus",
      desc: "Students enjoying quiet research and book reading sessions."
    }
  ];

  const categories = [
    { value: 'all', label: 'All Media' },
    { value: 'academics', label: 'Academics' },
    { value: 'sports', label: 'Sports' },
    { value: 'campus', label: 'Campus & Facilities' }
  ];

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  const openLightbox = (index) => {
    // Find index of the item in the filtered array
    const originalItem = filteredItems[index];
    const originalIndex = galleryItems.findIndex(item => item.src === originalItem.src);
    setLightboxIndex(originalIndex);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prevIndex) => 
      prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1
    );
  };

  const showNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prevIndex) => 
      prevIndex === galleryItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm font-bold uppercase tracking-widest text-school-gold-600">Moments</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-school-navy-900 mt-1 font-serif">Life at Little Flower</h2>
          <div className="w-16 h-1 bg-school-gold-500 mx-auto mt-4 rounded-full" />
          <p className="text-slate-500 mt-4 text-sm sm:text-base">
            Glimpses into our academic sessions, sports tournaments, labs, and interactive events.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                filter === cat.value
                  ? 'bg-school-navy-900 text-white shadow-md'
                  : 'bg-slate-50 text-school-navy-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-slate-100"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=600";
                }}
              />
              
              {/* Cover overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-school-navy-950/90 via-school-navy-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left">
                <span className="p-2 bg-school-gold-500 rounded-full w-fit mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <ZoomIn className="w-4 h-4 text-school-navy-950" />
                </span>
                
                <h4 className="text-white text-base sm:text-lg font-bold font-serif transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                  {item.title}
                </h4>
                
                <p className="text-slate-300 text-xs mt-1 line-clamp-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 z-50 bg-slate-950/95 flex items-center justify-center p-4 animate-fade-in"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-7 h-7" />
            </button>

            {/* Previous Button */}
            <button
              onClick={showPrev}
              className="absolute left-4 p-3 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Next Button */}
            <button
              onClick={showNext}
              className="absolute right-4 p-3 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Media Canvas */}
            <div
              className="max-w-4xl max-h-[80vh] w-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative rounded-xl overflow-hidden bg-black/50 max-h-[70vh]">
                <img
                  src={galleryItems[lightboxIndex].src}
                  alt={galleryItems[lightboxIndex].title}
                  className="max-w-full max-h-[70vh] object-contain rounded-xl"
                />
              </div>
              
              <div className="text-center text-white mt-4 max-w-xl">
                <h4 className="text-lg font-bold font-serif text-school-gold-400">
                  {galleryItems[lightboxIndex].title}
                </h4>
                <p className="text-sm text-slate-350 mt-1">
                  {galleryItems[lightboxIndex].desc}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
