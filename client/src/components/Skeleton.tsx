const Skeleton = () => (
  <div className="glass-effect rounded-xl p-8 text-center animate-pulse">
    <div className="w-16 h-16 bg-white/10 rounded-2xl mx-auto mb-4" />
    <div className="w-24 h-6 bg-white/10 rounded mx-auto mb-2" />
    <div className="w-32 h-4 bg-white/10 rounded mx-auto" />
  </div>
);

export default Skeleton;
