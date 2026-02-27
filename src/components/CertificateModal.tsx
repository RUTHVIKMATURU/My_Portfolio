import { motion } from 'framer-motion';
import { X, Award, Calendar, ShieldCheck } from 'lucide-react';

interface Certificate {
  name: string;
  organization: string;
  date: string;
  description: string;
  skills: string[];
  credentialId?: string;
  image?: string;
}

interface CertificateModalProps {
  cert: Certificate;
  onClose: () => void;
}

const CertificateModal = ({ cert, onClose }: CertificateModalProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/90 backdrop-blur-md"
      />

      <motion.div
        layoutId={`cert-card-${cert.name}`}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-effect rounded-[2rem] p-6 md:p-12 shadow-2xl border border-cyan-400/20"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white/50 hover:text-white group"
        >
          <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
        </button>

        <div className={`relative z-10 ${cert.image ? 'grid lg:grid-cols-[1.2fr,0.8fr] gap-12' : 'max-w-2xl mx-auto text-center'}`}>
          {/* Left Side: Content */}
          <div className="space-y-8">
            <div className={cert.image ? '' : 'flex flex-col items-center'}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-2 text-cyan-500 font-black uppercase tracking-[0.2em] text-[10px] mb-4"
              >
                <ShieldCheck size={14} />
                Verified Certificate
              </motion.div>

              <motion.h2
                layoutId={`cert-title-${cert.name}`}
                className="text-3xl md:text-5xl font-black text-white leading-tight mb-4"
              >
                {cert.name}
              </motion.h2>

              <div className={`flex flex-wrap items-center gap-6 text-gray-400 text-sm ${cert.image ? '' : 'justify-center'}`}>
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-blue-500/10">
                    <Award size={18} className="text-blue-500" />
                  </div>
                  <span className="font-bold text-white/80">{cert.organization}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-cyan-400/10">
                    <Calendar size={18} className="text-cyan-400" />
                  </div>
                  <span className="font-bold text-white/80">{cert.date}</span>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h3 className="text-xs font-black uppercase tracking-widest text-gray-500 border-l-2 border-yellow-400 pl-3">
                  Description
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg font-medium">
                  {cert.description}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xs font-black uppercase tracking-widest text-gray-500 border-l-2 border-yellow-400 pl-3">
                  Skills Validated
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cert.skills?.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-1.5 text-[10px] font-black uppercase tracking-tighter bg-white/5 border border-white/10 rounded-full text-gray-300 hover:text-cyan-400 hover:border-cyan-400/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {cert.credentialId && (
                <div className="p-4 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between group overflow-hidden relative">
                  <div className="relative z-10">
                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Credential ID</p>
                    <p className="text-sm font-mono text-white/70">{cert.credentialId}</p>
                  </div>
                  <ShieldCheck size={40} className="absolute -right-2 -bottom-2 text-white/5 group-hover:text-cyan-400/10 transition-colors duration-500" />
                </div>
              )}
            </motion.div>

          </div>

          {/* Right Side: Media/Preview */}
          {cert.image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="sticky top-0 aspect-[4/3] lg:aspect-square bg-gradient-to-br from-white/5 to-white/[0.02] rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden group">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-700"
                />

                {/* Decorative corner accents */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-400/5 blur-3xl rounded-full" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500/5 blur-3xl rounded-full" />
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CertificateModal;
