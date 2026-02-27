import { motion } from 'framer-motion';
import { Award, ShieldCheck, MapPin } from 'lucide-react';

const CertificateCard = ({ cert, index, onClick }: { cert: any, index: number, onClick: () => void }) => {
  return (
    <motion.div
      layoutId={`cert-card-${cert.name}`}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative min-h-[320px] glass-effect rounded-[2rem] p-8 border border-white/5 hover:border-cyan-400/30 transition-all duration-500 cursor-pointer overflow-hidden flex flex-col"
    >
      {/* Background Accent */}
      <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-cyan-400/5 rounded-full blur-3xl group-hover:bg-cyan-400/10 transition-colors duration-700" />

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-8">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 p-3 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-500">
            <Award className="w-full h-full text-black" strokeWidth={2.5} />
          </div>
          <div className="flex flex-col items-end gap-2">
            <span className="text-[10px] font-black tracking-widest uppercase text-cyan-400/50 group-hover:text-cyan-400 transition-colors">
              {cert.date}
            </span>
            <div className="flex items-center gap-1 text-[8px] font-black uppercase text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
              <ShieldCheck size={10} />
              Verified
            </div>
          </div>
        </div>

        <motion.h3
          layoutId={`cert-title-${cert.name}`}
          className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-gradient transition-all duration-300"
        >
          {cert.name}
        </motion.h3>

        <div className="flex items-center gap-2 text-gray-500 text-xs font-bold uppercase tracking-tighter">
          <MapPin size={12} className="text-cyan-500/70" />
          {cert.organization}
        </div>
      </div>

      <div className="relative z-10 flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-white/5">
        {cert.skills?.slice(0, 3).map((skill: string) => (
          <span key={skill} className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[8px] font-black text-gray-500 uppercase tracking-tighter">
            {skill}
          </span>
        ))}
        {cert.skills?.length > 3 && (
          <span className="text-[8px] font-black text-gray-600 items-center justify-center flex">+{cert.skills.length - 3}</span>
        )}
      </div>
    </motion.div>
  );
};

export default CertificateCard;
