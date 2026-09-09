import { ArrowUp, Github, Linkedin, Mail, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onResumeClick: () => void;
}

const Footer = ({ onResumeClick }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-[#05070b]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Branding & Tagline */}
        <div className="flex items-center gap-3 text-center md:text-left">
          <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-xs font-mono font-bold text-cyan-400">
            {PERSONAL_INFO.initials}
          </div>
          <div>
            <p className="text-sm font-bold text-white tracking-tight">
              {PERSONAL_INFO.name}
            </p>
            <p className="text-xs font-mono text-slate-500">
              LeetCode Guardian (2268) • Software Engineer
            </p>
          </div>
        </div>

        {/* Center: Social & Quick Actions */}
        <div className="flex items-center gap-3">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors border border-white/5"
            aria-label="GitHub Profile"
          >
            <Github size={16} />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors border border-white/5"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors border border-white/5"
            aria-label="Email Ruthvik"
          >
            <Mail size={16} />
          </a>
          <button
            onClick={onResumeClick}
            className="px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-cyan-400 text-xs font-mono transition-colors border border-white/5 flex items-center gap-1.5"
          >
            <FileText size={14} />
            <span>Resume</span>
          </button>
        </div>

        {/* Right: Copyright & Back to Top */}
        <div className="flex items-center gap-4 text-xs font-mono text-slate-500">
          <span>© {currentYear} Ruthvik Maturu.</span>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
            aria-label="Scroll to top of page"
          >
            <span>Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
