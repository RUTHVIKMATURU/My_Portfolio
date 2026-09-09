import { motion } from 'framer-motion';
import { X, Award } from 'lucide-react';
import { useEffect } from 'react';
import { Certificate } from '../data/portfolioData';

interface CertificateModalProps {
  cert: Certificate;
  onClose: () => void;
}

const CertificateModal = ({ cert, onClose }: CertificateModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center p-3 sm:p-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-[#04060a]/85 backdrop-blur-md cursor-pointer"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: 'spring', damping: 28, stiffness: 350 }}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#0b0f17] border border-white/15 rounded-2xl shadow-2xl p-6 sm:p-8 z-10 custom-scrollbar"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors border border-white/10"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* Certificate Image Preview */}
        {cert.image && (
          <div className="w-full rounded-xl overflow-hidden bg-black/40 border border-white/10 mb-6 max-h-72 flex items-center justify-center">
            <img
              src={cert.image}
              alt={cert.title}
              className="max-h-72 w-auto object-contain"
            />
          </div>
        )}

        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-cyan-500/10 border border-cyan-500/25 text-cyan-400">
              {cert.category}
            </span>
            <span className="text-xs font-mono text-slate-500">• {cert.issueDate}</span>
          </div>

          <h3 className="text-2xl font-bold text-white tracking-tight">
            {cert.title}
          </h3>

          <div className="flex items-center gap-2 text-sm font-mono text-slate-400">
            <Award size={15} className="text-cyan-400" />
            <span>Issued by {cert.issuer}</span>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed">
            {cert.description}
          </p>

          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs font-mono">
            <span className="text-slate-400">Credential ID</span>
            <span className="text-cyan-300 font-semibold">{cert.credentialId}</span>
          </div>

          <div>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
              Verified Competencies
            </span>
            <div className="flex flex-wrap gap-1.5">
              {cert.skills.map((s) => (
                <span
                  key={s}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 border border-white/10 text-slate-200"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CertificateModal;
