import { motion } from 'motion/react';
import { Mail, MessageCircle, Send } from 'lucide-react';
import { useState } from 'react';
import { FloatingBubble, TwinklingStar, SpinningFlower } from './FrutigerElements';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! We\'ll get back to you soon. 🍀');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-[#F0FFF8] relative overflow-hidden">
      {/* Frutiger Aero Elements */}
      <FloatingBubble size={90} delay={0} className="absolute top-20 left-16 opacity-40" />
      <FloatingBubble size={75} delay={1.5} className="absolute bottom-32 right-20 opacity-45" />
      
      <TwinklingStar size={50} delay={0.5} className="absolute top-1/3 right-10 opacity-50" />
      <TwinklingStar size={40} delay={2} className="absolute bottom-1/4 left-24 opacity-45" />
      
      <SpinningFlower size={65} delay={0} className="absolute top-40 right-32 opacity-30" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl mb-4 text-[#2D8B5F]"
            style={{ fontFamily: 'Quicksand, sans-serif', fontWeight: 700 }}
          >
            💬 Get In Touch
          </h2>
          <p
            className="text-xl text-[#1E6F4D] max-w-2xl mx-auto"
            style={{ fontFamily: 'Nunito, sans-serif' }}
          >
            Questions? Feedback? We'd love to hear from you!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-lg mb-2 text-[#2D8B5F]"
                style={{ fontFamily: 'Quicksand, sans-serif', fontWeight: 600 }}
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-6 py-4 rounded-2xl border-2 border-[#9FDFBF] focus:border-[#2D8B5F] focus:outline-none transition-colors"
                style={{ fontFamily: 'Nunito, sans-serif' }}
                placeholder="Lucky You"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-lg mb-2 text-[#2D8B5F]"
                style={{ fontFamily: 'Quicksand, sans-serif', fontWeight: 600 }}
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-6 py-4 rounded-2xl border-2 border-[#9FDFBF] focus:border-[#2D8B5F] focus:outline-none transition-colors"
                style={{ fontFamily: 'Nunito, sans-serif' }}
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-lg mb-2 text-[#2D8B5F]"
                style={{ fontFamily: 'Quicksand, sans-serif', fontWeight: 600 }}
              >
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={6}
                className="w-full px-6 py-4 rounded-2xl border-2 border-[#9FDFBF] focus:border-[#2D8B5F] focus:outline-none transition-colors resize-none"
                style={{ fontFamily: 'Nunito, sans-serif' }}
                placeholder="Tell us what's on your mind..."
                required
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-5 text-xl text-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3"
              style={{
                fontFamily: 'Quicksand, sans-serif',
                fontWeight: 700,
                background: 'linear-gradient(135deg, #2D8B5F 0%, #1E6F4D 100%)',
              }}
            >
              <Send size={24} />
              Send Message
            </motion.button>
          </form>

          <div className="mt-12 pt-8 border-t-2 border-[#F0FFF8] grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-[#2D8B5F] rounded-xl flex items-center justify-center">
                <Mail className="text-white" size={24} />
              </div>
              <div>
                <p
                  className="text-[#2D8B5F]"
                  style={{ fontFamily: 'Quicksand, sans-serif', fontWeight: 600 }}
                >
                  Email Us
                </p>
                <p
                  className="text-[#1E6F4D]"
                  style={{ fontFamily: 'Nunito, sans-serif' }}
                >
                  hello@fourleafcafe.com
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 5 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-[#87CEEB] rounded-xl flex items-center justify-center">
                <MessageCircle className="text-white" size={24} />
              </div>
              <div>
                <p
                  className="text-[#2D8B5F]"
                  style={{ fontFamily: 'Quicksand, sans-serif', fontWeight: 600 }}
                >
                  Live Chat
                </p>
                <p
                  className="text-[#1E6F4D]"
                  style={{ fontFamily: 'Nunito, sans-serif' }}
                >
                  Available 9am - 6pm
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}