import { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear errors when typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full Name is required.';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required.';
    if (!formData.message.trim()) newErrors.message = 'Message content is required.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Simulate API Submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-school-navy-950" />,
      title: "School Location",
      details: "Sehari, Ward No. 1, Nawalpur, Gandaki, Nepal",
      action: "Find us on map"
    },
    {
      icon: <Phone className="w-6 h-6 text-school-navy-950" />,
      title: "Call Administration",
      details: "+977-78-123456 / +977-9800000000",
      action: "Available 9 AM - 4 PM"
    },
    {
      icon: <Mail className="w-6 h-6 text-school-navy-950" />,
      title: "Write an Email",
      details: "info@littleflowernawalpur.edu.np",
      action: "Response within 24 hours"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-school-gold-600">Connect</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-school-navy-900 mt-1 font-serif">Contact Our Team</h2>
          <div className="w-16 h-1 bg-school-gold-500 mx-auto mt-4 rounded-full" />
          <p className="text-slate-500 mt-4 text-sm sm:text-base">
            Reach out for enrollment details, fees schedules, tour requests, or any general concerns. We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Details & Map Card */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-6">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="flex gap-4 bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
                  <div className="p-3 bg-school-gold-500/10 rounded-xl h-fit border border-school-gold-500/20">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-school-navy-900 font-serif">{info.title}</h4>
                    <p className="text-slate-600 text-sm mt-1">{info.details}</p>
                    <span className="text-xs text-slate-400 font-semibold block mt-1 uppercase tracking-wider">{info.action}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Google Map Mockup / Embed Visual */}
            <div className="bg-white rounded-2xl border border-slate-100 p-4 shadow-sm overflow-hidden space-y-4">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2">
                <span>Google Map Reference</span>
                <span className="text-school-gold-600">Sehari, Nawalpur</span>
              </div>
              
              <div className="relative rounded-xl overflow-hidden aspect-video border border-slate-100 bg-slate-50 flex items-center justify-center group">
                {/* Visual map design mockup */}
                <div className="absolute inset-0 opacity-80 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] flex items-center justify-center">
                  {/* Stylized vector map paths */}
                  <svg className="absolute w-full h-full text-slate-200 stroke-current stroke-2" fill="none">
                    <path d="M 0 40 L 400 40 M 100 0 L 100 200 M 0 130 C 150 130, 200 90, 400 90 M 280 0 L 280 200" />
                  </svg>
                  {/* Pin locator */}
                  <div className="relative flex items-center justify-center z-10 animate-bounce">
                    <div className="absolute w-8 h-8 bg-school-gold-500/30 rounded-full animate-ping" />
                    <MapPin className="w-10 h-10 text-red-500 fill-red-100 filter drop-shadow-md" />
                  </div>
                </div>

                <div className="absolute bottom-2 inset-x-2 bg-school-navy-950/85 backdrop-blur-sm rounded-lg p-3 flex justify-between items-center text-white">
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-school-gold-400">Target Location</span>
                    <span className="text-xs font-bold font-serif">Little Flower School, Sehari</span>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Sehari,Nawalpur,Nepal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold bg-school-gold-500 hover:bg-school-gold-600 text-school-navy-950 py-1.5 px-3 rounded transition-colors"
                  >
                    Open Maps
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Styled Form Card */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-100 p-8 shadow-sm text-left">
            <h3 className="text-xl font-bold font-serif text-school-navy-900 mb-6">Send an Inquiry Message</h3>
            
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center py-12 text-center space-y-4 animate-fade-in">
                <div className="p-4 bg-green-50 rounded-full border border-green-200 text-green-500 scale-110">
                  <CheckCircle className="w-12 h-12" />
                </div>
                <h4 className="text-2xl font-bold text-school-navy-900 font-serif">Message Sent Successfully!</h4>
                <p className="text-slate-500 max-w-sm text-sm sm:text-base leading-relaxed">
                  Thank you for writing. We have received your inquiry and our desk representative will contact you shortly via email.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="bg-school-navy-900 hover:bg-school-navy-950 text-white font-bold py-2.5 px-6 rounded-lg transition-colors text-sm"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-extrabold uppercase tracking-wider text-school-navy-800 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-slate-50 border rounded-xl py-3 px-4 text-sm outline-none transition-all ${
                      errors.name 
                        ? 'border-red-400 focus:border-red-400 bg-red-50/20' 
                        : 'border-slate-200 focus:border-school-navy-900 focus:bg-white'
                    }`}
                    placeholder="Enter your name"
                  />
                  {errors.name && (
                    <div className="flex items-center text-xs text-red-500 mt-1.5 font-semibold">
                      <AlertCircle className="w-3.5 h-3.5 mr-1" />
                      {errors.name}
                    </div>
                  )}
                </div>

                {/* Email & Subject Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-extrabold uppercase tracking-wider text-school-navy-800 mb-2">
                      Email Address
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full bg-slate-50 border rounded-xl py-3 px-4 text-sm outline-none transition-all ${
                        errors.email 
                          ? 'border-red-400 focus:border-red-400 bg-red-50/20' 
                          : 'border-slate-200 focus:border-school-navy-900 focus:bg-white'
                      }`}
                      placeholder="e.g. parent@mail.com"
                    />
                    {errors.email && (
                      <div className="flex items-center text-xs text-red-500 mt-1.5 font-semibold">
                        <AlertCircle className="w-3.5 h-3.5 mr-1" />
                        {errors.email}
                      </div>
                    )}
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-extrabold uppercase tracking-wider text-school-navy-800 mb-2">
                      Inquiry Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full bg-slate-50 border rounded-xl py-3 px-4 text-sm outline-none transition-all ${
                        errors.subject 
                          ? 'border-red-400 focus:border-red-400 bg-red-50/20' 
                          : 'border-slate-200 focus:border-school-navy-900 focus:bg-white'
                      }`}
                      placeholder="e.g. Admission Inquiry"
                    />
                    {errors.subject && (
                      <div className="flex items-center text-xs text-red-500 mt-1.5 font-semibold">
                        <AlertCircle className="w-3.5 h-3.5 mr-1" />
                        {errors.subject}
                      </div>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-extrabold uppercase tracking-wider text-school-navy-800 mb-2">
                    Inquiry Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full bg-slate-50 border rounded-xl py-3 px-4 text-sm outline-none transition-all resize-none ${
                      errors.message 
                        ? 'border-red-400 focus:border-red-400 bg-red-50/20' 
                        : 'border-slate-200 focus:border-school-navy-900 focus:bg-white'
                    }`}
                    placeholder="Enter details of your question or message"
                  />
                  {errors.message && (
                    <div className="flex items-center text-xs text-red-500 mt-1.5 font-semibold">
                      <AlertCircle className="w-3.5 h-3.5 mr-1" />
                      {errors.message}
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2 bg-school-navy-900 hover:bg-school-navy-950 text-white font-bold py-3.5 px-6 rounded-xl shadow-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-0.5 active:translate-y-0 text-sm sm:text-base"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending inquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Submit Inquiry</span>
                    </>
                  )}
                </button>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
