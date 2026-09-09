import { motion } from 'framer-motion';
import { Image as ImageIcon } from 'lucide-react';
import { Certificate } from '../data/portfolioData';

interface CertificateCardProps {
  cert: Certificate;
  index: number;
  onClick: () => void;
}

const CertificateCard = ({ cert, onClick }: CertificateCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      onClick={onClick}
      className="p-6 rounded-2xl bg-[#0b0f17]/90 border border-white/10 hover:border-cyan-500/35 transition-all duration-200 cursor-pointer flex flex-col justify-between group shadow-xl relative overflow-hidden"
    >
      <div>
        {/* Top bar */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-white/5 border border-white/10 text-cyan-300">
            {cert.category}
          </span>
          <span className="text-[11px] font-mono text-slate-500">{cert.issueDate}</span>
        </div>

        {/* Thumbnail Preview if available */}
        {cert.image && (
          <div className="w-full h-32 rounded-xl overflow-hidden mb-4 bg-black/40 border border-white/5 relative group-hover:border-cyan-500/20 transition-colors">
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17] via-transparent to-transparent" />
            <div className="absolute bottom-2 right-2 px-2 py-1 rounded bg-black/70 text-[10px] font-mono text-slate-300 flex items-center gap-1 backdrop-blur-sm">
              <ImageIcon size={10} />
              <span>Verify</span>
            </div>
          </div>
        )}

        <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-1 line-clamp-2">
          {cert.title}
        </h4>
        <p className="text-xs font-mono text-slate-400 mb-3">
          {cert.issuer}
        </p>

        <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-4">
          {cert.description}
        </p>
      </div>

      {/* Footer */}
      <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
        <span className="truncate max-w-[150px] text-[11px] text-slate-500">{cert.credentialId}</span>
        <span className="text-cyan-400 group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
          Details →
        </span>
      </div>
    </motion.div>
  );
};

export default CertificateCard;
