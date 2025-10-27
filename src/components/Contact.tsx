import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Mail, MapPin, Phone, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    { icon: Mail, text: 'ruthvik0811@gmail.com', link: 'mailto:ruthvik0811@gmail.com' },
    { icon: Phone, text: '+91 8297475089', link: 'tel:+918297475089' },
    { icon: MapPin, text: 'Hyderabad, Telangana', link: '#' },
  ];

  const socialLinks = [
    { icon: Github, link: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, link: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, link: 'mailto:ruthvik0811@gmail.com', label: 'Email' },
  ];

  return (
    <section id="contact" className="min-h-screen py-20 px-4 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient glow-text mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400">Let's work together on your next project</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={index}
                    href={info.link}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 text-gray-400 hover:text-gradient transition-all duration-300"
                  >
                    <div className="p-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg">
                      <Icon className="w-5 h-5 text-black" />
                    </div>
                    <span>{info.text}</span>
                  </motion.a>
                );
              })}
            </div>

            <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 glass-effect rounded-lg group"
                    aria-label={social.label}
                  >
                    <Icon className="w-6 h-6 text-yellow-400 group-hover:text-orange-500 transition-colors duration-300" />
                  </motion.a>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 glass-effect rounded-xl p-6"
            >
              <p className="text-gray-400 leading-relaxed">
                I'm always interested in hearing about new projects and opportunities.
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="glass-effect rounded-xl p-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2 font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-yellow-400/30 rounded-lg text-white focus:border-orange-500 focus:outline-none transition-colors duration-300"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white mb-2 font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-yellow-400/30 rounded-lg text-white focus:border-orange-500 focus:outline-none transition-colors duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white mb-2 font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-black/50 border border-yellow-400/30 rounded-lg text-white focus:border-orange-500 focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg font-semibold text-black flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-center"
                >
                  Message sent successfully!
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
