import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useRef } from 'react';
import { Mail, MapPin, Phone, Linkedin, Github, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import ReCAPTCHA from 'react-google-recaptcha';

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || 'YOUR_SITE_KEY_HERE';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'loading') return;

    setStatus('loading');
    setErrorMessage('');

    const token = recaptchaRef.current?.getValue();
    if (!token) {
      setStatus('error');
      setErrorMessage('Please complete the reCAPTCHA verification.');
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, recaptchaToken: token }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || data.errors?.[0]?.msg || 'Something went wrong');
      }

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      recaptchaRef.current?.reset();
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
    <section id="contact" className="min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-[10%] -right-[10%] w-[30%] h-[30%] bg-cyan-500/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-[10%] -left-[10%] w-[30%] h-[30%] bg-blue-600/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-gradient glow-text mb-4 uppercase tracking-tighter">
            Get In Touch
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-400 font-medium">Let's work together on your next project</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column: Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-widest text-gradient">Contact Information</h3>

            <div className="space-y-6 mb-12">
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

            <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-widest text-gradient">Connect With Me</h3>
            <div className="flex gap-4">
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

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 glass-effect rounded-3xl p-8 border border-white/5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-400/5 blur-2xl rounded-full" />
              <p className="text-gray-400 leading-relaxed font-medium italic relative z-10">
                "I'm always interested in hearing about new projects and opportunities.
                Whether you have a question or just want to say hi, feel free to reach out!"
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="glass-effect rounded-3xl p-8 md:p-10 space-y-6 border border-white/5 relative">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:border-cyan-400/50 focus:outline-none focus:bg-white/10 transition-all duration-300 font-medium"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:border-cyan-400/50 focus:outline-none focus:bg-white/10 transition-all duration-300 font-medium"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:border-cyan-400/50 focus:outline-none focus:bg-white/10 transition-all duration-300 font-medium"
                  placeholder="Inquiry about project..."
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:border-cyan-400/50 focus:outline-none focus:bg-white/10 transition-all duration-300 resize-none font-medium"
                  placeholder="Tell me more..."
                />
              </div>

              <div className="flex justify-center md:justify-start">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={SITE_KEY}
                  theme="dark"
                />
              </div>

              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center justify-center gap-3 py-4 bg-cyan-400/10 border border-cyan-400/20 rounded-2xl text-cyan-400 font-bold"
                  >
                    <CheckCircle2 size={24} />
                    Message Sent Successfully!
                  </motion.div>
                ) : status === 'error' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center justify-center gap-3 py-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-500 font-bold"
                  >
                    <AlertCircle size={24} />
                    {errorMessage || 'Something went wrong. Try again!'}
                  </motion.div>
                ) : (
                  <motion.button
                    type="submit"
                    disabled={status === 'loading'}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl font-black text-black flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-blue-500/20 uppercase tracking-widest text-sm"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="animate-spin" size={20} />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
