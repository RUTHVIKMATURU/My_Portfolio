import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MapPin, Phone, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const contactInfo = [
    { icon: Mail, text: 'ruthvik0811@gmail.com', link: 'mailto:ruthvik0811@gmail.com' },
    { icon: Phone, text: '+91 8297475089', link: 'tel:+918297475089' },
    { icon: MapPin, text: 'Hyderabad, Telangana', link: '#' },
  ];

  const socialLinks = [
    { icon: Github, link: 'https://github.com/RUTHVIKMATURU', label: 'GitHub' },
    { icon: Linkedin, link: 'https://www.linkedin.com/in/ruthvik-maturu-86545228b/', label: 'LinkedIn' },
    { icon: Mail, link: 'mailto:ruthvik0811@gmail.com', label: 'Email' },
  ];

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-[10%] -right-[10%] w-[30%] h-[30%] bg-cyan-500/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-[10%] -left-[10%] w-[30%] h-[30%] bg-blue-600/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-4xl mx-auto text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-gradient glow-text mb-4 uppercase tracking-tighter">
            Get In Touch
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-400 font-medium">Feel free to reach out for collaborations or just a friendly hello</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 text-left">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-widest text-gradient">Contact Details</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={index}
                    href={info.link}
                    whileHover={{ x: 10 }}
                    className="group flex items-center gap-4 text-gray-400 hover:text-cyan-400 transition-all duration-300"
                  >
                    <div className="p-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl shadow-lg shadow-blue-500/20">
                      <Icon className="w-5 h-5 text-black" />
                    </div>
                    <span className="font-bold">{info.text}</span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-widest text-gradient">Social Presence</h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, translateY: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 glass-effect rounded-2xl group border border-white/5 hover:border-cyan-400/30 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-6 h-6 text-cyan-400 group-hover:text-blue-500 transition-colors duration-300" />
                  </motion.a>
                );
              })}
            </div>

            <p className="mt-8 text-gray-500 leading-relaxed font-medium italic">
              "I'm always interested in hearing about new projects and opportunities.
              Drop me a message on LinkedIn or send an email!"
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
