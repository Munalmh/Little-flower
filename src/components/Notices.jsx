import { useState } from 'react';
import { Calendar, Bell, FileText, ArrowRight, X, ChevronRight } from 'lucide-react';

export default function Notices() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedNotice, setSelectedNotice] = useState(null);

  const noticesData = [
    {
      id: 1,
      title: "Admissions Open for Academic Year 2026/27",
      date: "May 28, 2026",
      category: "admission",
      type: "Important",
      summary: "Admissions are officially open for Pre-Primary and Primary classes (Nursery to Class 4). Collect forms from the school desk.",
      content: "Little Flower School is pleased to announce that registrations and admissions for the upcoming academic session 2026/27 are now open. We invite parents and guardians to visit the school administration office between 9:00 AM and 3:00 PM on working days to collect admission prospectuses and application forms. Entrance tests will be conducted on a rolling basis starting next week. For fee details, syllabus outlines, and scholarship options, please visit our admission inquiry desk."
    },
    {
      id: 2,
      title: "First Terminal Examination Schedule Announced",
      date: "May 25, 2026",
      category: "academic",
      type: "General",
      summary: "The detailed schedule for the upcoming First Terminal Examinations starting from June 15 has been published.",
      content: "The First Terminal Examinations for classes Nursery to IV are scheduled to begin on June 15, 2026. The full subject-wise exam schedule, along with rules and regulations, has been distributed to students and is also pinned on classroom notice boards. Students are requested to clear all outstanding school dues before June 8 to obtain their Admit Cards. Regular classes will run as normal until June 10, after which preparation holidays will commence. We wish all students the very best for their preparations."
    },
    {
      id: 3,
      title: "Annual Sports Week 2026 Rescheduled",
      date: "May 22, 2026",
      category: "event",
      type: "Update",
      summary: "Due to local election logistics, the annual sports week has been moved to November 10-15.",
      content: "We wish to inform all teachers, students, and parent groups that our Annual Sports Week, originally scheduled for next month, has been rescheduled to November 10th through 15th, 2026, due to regional logistic events and venue availability. Preparations and trials for track events, soccer, volleyball, and table tennis will continue after the regular classes in the sports grounds. We appreciate your cooperation and look forward to an exciting and competitive tournament in November."
    },
    {
      id: 4,
      title: "Parent-Teacher Association (PTA) General Meeting",
      date: "May 18, 2026",
      category: "general",
      type: "Important",
      summary: "All parents are requested to attend the general assembly meeting this Saturday at 10:00 AM.",
      content: "Our termly Parent-Teacher Association general body meeting is scheduled for Saturday, June 6, 2026, starting at 10:00 AM in the school assembly hall. The main agenda points of this meeting will include: reviews of academic progress, discussions on extra-curricular plans, presentation of school development reports, and interactive feedback sessions with teachers. Your presence is vital in building a strong home-school partnership. Light refreshments will be served at the end of the meeting."
    }
  ];

  const filteredNotices = activeTab === 'all' 
    ? noticesData 
    : noticesData.filter(notice => notice.category === activeTab);

  return (
    <section className="py-16 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div className="text-left">
            <span className="text-sm font-bold uppercase tracking-widest text-school-gold-600">Bulletins</span>
            <h2 className="text-3xl font-extrabold text-school-navy-900 mt-1 font-serif">News & Notices</h2>
            <p className="text-slate-500 mt-2 max-w-xl">Stay updated with the latest events, announcements, and scheduling updates from our school administration.</p>
          </div>

          {/* Categories Tab Filters */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {['all', 'admission', 'academic', 'event', 'general'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-school-navy-900 text-white shadow-md'
                    : 'bg-white text-school-navy-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {tab === 'all' ? 'All Bulletins' : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Notices Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredNotices.map((notice) => (
            <div
              key={notice.id}
              className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 text-left relative flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
                    notice.type === 'Important' 
                      ? 'bg-red-50 text-red-600 border border-red-150' 
                      : 'bg-school-gold-50 text-school-gold-700 border border-school-gold-200'
                  }`}>
                    {notice.type}
                  </span>
                  <div className="flex items-center text-xs text-slate-400 font-semibold">
                    <Calendar className="w-3.5 h-3.5 mr-1" />
                    {notice.date}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-school-navy-900 line-clamp-1 mb-2 group-hover:text-school-gold-600 transition-colors">
                  {notice.title}
                </h3>
                
                <p className="text-slate-500 text-sm line-clamp-3 mb-6">
                  {notice.summary}
                </p>
              </div>

              <button
                onClick={() => setSelectedNotice(notice)}
                className="inline-flex items-center text-sm font-bold text-school-navy-900 hover:text-school-gold-600 transition-colors mt-auto self-start"
              >
                Read Full Announcement
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Notice Detail Modal Overlay */}
        {selectedNotice && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in-up">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedNotice(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-school-navy-900 hover:bg-slate-100 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="mb-6">
                <div className="flex items-center space-x-3 mb-3">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
                    selectedNotice.type === 'Important' 
                      ? 'bg-red-50 text-red-600 border border-red-200' 
                      : 'bg-school-gold-50 text-school-gold-700 border border-school-gold-200'
                  }`}>
                    {selectedNotice.type}
                  </span>
                  <div className="flex items-center text-xs text-slate-400 font-semibold">
                    <Calendar className="w-3.5 h-3.5 mr-1" />
                    {selectedNotice.date}
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-school-navy-900 font-serif leading-tight">
                  {selectedNotice.title}
                </h3>
              </div>

              {/* Modal Body */}
              <div className="prose max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-4 border-t border-slate-100 pt-6">
                <p className="font-semibold text-school-navy-800">
                  {selectedNotice.summary}
                </p>
                <p>
                  {selectedNotice.content}
                </p>
              </div>

              {/* Modal Footer */}
              <div className="mt-8 pt-4 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => setSelectedNotice(null)}
                  className="bg-school-navy-900 hover:bg-school-navy-950 text-white font-bold py-2.5 px-6 rounded-lg transition-all text-sm"
                >
                  Close Notice
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
