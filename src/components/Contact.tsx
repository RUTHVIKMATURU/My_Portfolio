import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Linkedin, Github, FileText, Copy, Check, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  onResumeClick: () => void;
}

const Contact = ({ onResumeClick }: ContactProps) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open mail client with prefilled body
    const subject = encodeURIComponent(`Inquiry from ${formState.name} for Ruthvik Maturu`);
    const body = encodeURIComponent(`Hi Ruthvik,\n\n${formState.message}\n\nBest,\n${formState.name} (${formState.email})`);
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-t from-cyan-500/10 via-blue-600/5 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section Header with Strong Recruiter Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-3">
            <Send size={13} />
            LET'S BUILD TOGETHER
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Have a challenging problem{' '}
            <span className="text-gradient-cyan">worth solving?</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-3">
            Whether you’re hiring for high-performance software engineering, applied AI systems, or looking for an engineer with Olympiad-level algorithmic rigor — my inbox is always open.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Details & Quick Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-7 rounded-2xl bg-[#0b0f17]/90 border border-white/10 shadow-xl space-y-6">
              <h3 className="text-lg font-bold text-white tracking-tight flex items-center justify-between">
                <span>Direct Contact Information</span>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Quick Response
                </span>
              </h3>

              {/* Email with 1-click copy */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 truncate">
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
                    <Mail size={18} />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs sm:text-sm font-mono text-white hover:text-cyan-300 transition-colors truncate block"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Phone */}
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-colors flex items-center gap-3 group"
              >
                <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                    Phone / WhatsApp
                  </span>
                  <span className="text-xs sm:text-sm font-mono text-white group-hover:text-emerald-300 transition-colors">
                    {PERSONAL_INFO.phone}
                  </span>
                </div>
              </a>

              {/* Location */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                    Location
                  </span>
                  <span className="text-xs sm:text-sm text-white">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>

              {/* Verified Profiles Row */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <Linkedin size={15} className="text-blue-400" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <Github size={15} />
                  <span>GitHub</span>
                </a>

                <button
                  onClick={onResumeClick}
                  className="flex-1 py-3 rounded-xl bg-cyan-500/10 hover:bg-cyan-500 hover:text-black border border-cyan-500/25 text-cyan-400 text-xs font-semibold flex items-center justify-center gap-2 transition-all"
                >
                  <FileText size={15} />
                  <span>Resume</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Direct Message Composer */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleFormSubmit}
              className="p-7 sm:p-9 rounded-2xl bg-[#0b0f17]/90 border border-white/10 shadow-xl space-y-4"
            >
              <h3 className="text-lg font-bold text-white tracking-tight">
                Send a Direct Message
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Recruiter, hiring manager, or engineering leader? Leave a note and it will trigger an instant email connection.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Alex Johnson"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-sm placeholder-slate-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g., alex@company.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-sm placeholder-slate-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                  Message / Role Opportunity
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell me about your team, challenges, or the engineering role you have in mind..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-sm placeholder-slate-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-sm transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 flex items-center justify-center gap-2"
              >
                <span>Initiate Conversation</span>
                <Send size={15} />
              </button>

              {submitted && (
                <p className="text-xs text-emerald-400 text-center font-mono pt-2">
                  ✓ Email client dispatched. Looking forward to speaking with you!
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
