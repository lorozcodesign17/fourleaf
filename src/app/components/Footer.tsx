import { motion } from 'motion/react';
import { Facebook, Instagram, Twitter, Heart } from 'lucide-react';
import cloverIcon from 'figma:asset/7d9d530fc8433f195e7611236d6ec80e2188e570.png';
import logo from 'figma:asset/341f1702a4bc1d90672f206e4c5869d6a4343883.png';

export function Footer() {
  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
  ];

  return (
    <footer
      className="relative pt-16 pb-8 overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #2D8B5F 0%, #1a5c3a 100%)',
      }}
    >
      {/* Decorative Clovers */}
      <motion.div
        className="absolute top-10 left-10 opacity-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        <img src={cloverIcon} alt="" className="w-32 h-32" />
      </motion.div>
      <motion.div
        className="absolute bottom-10 right-10 opacity-10"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        <img src={cloverIcon} alt="" className="w-32 h-32" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-5">
              <div style={{ height: '89px', overflow: 'hidden' }}>
                <img
                  src={logo}
                  alt="Four Leaf Cafe"
                  style={{
                    height: '200px',
                    width: 'auto',
                    marginTop: '-55px',
                    filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.2))',
                  }}
                />
              </div>
            </div>
            <p
              className="text-white/90 mb-6 max-w-md"
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              Where every visit feels like finding a four-leaf clover. Fresh pastries,
              lucky drinks, and whimsical vibes since 2025.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <social.icon className="text-white" size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="text-xl mb-6 text-white"
              style={{ fontFamily: 'Quicksand, sans-serif', fontWeight: 700 }}
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              {['About', 'Menu', 'Locations', 'Contact', 'Rewards'].map((item) => (
                <li key={item}>
                  <motion.a
                    href={`#${item.toLowerCase()}`}
                    whileHover={{ x: 5 }}
                    className="text-white/80 hover:text-white transition-colors"
                    style={{ fontFamily: 'Nunito, sans-serif' }}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3
              className="text-xl mb-6 text-white"
              style={{ fontFamily: 'Quicksand, sans-serif', fontWeight: 700 }}
            >
              Hours
            </h3>
            <ul
              className="space-y-2 text-white/80"
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              <li>Monday - Friday</li>
              <li className="text-white">7:00 AM - 8:00 PM</li>
              <li className="mt-4">Saturday - Sunday</li>
              <li className="text-white">8:00 AM - 9:00 PM</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/15 flex flex-col md:flex-row justify-between items-center gap-3">
          <p
            className="text-white/60 text-sm text-center md:text-left"
            style={{ fontFamily: 'Nunito, sans-serif' }}
          >
            © 2025 Four Leaf Café & Bakery. All rights reserved.
          </p>
          <motion.div
            className="flex items-center gap-1.5 text-white/60 text-sm"
            style={{ fontFamily: 'Nunito, sans-serif' }}
            whileHover={{ scale: 1.05 }}
          >
            Made with <Heart className="text-[#FF6B6B]" fill="#FF6B6B" size={13} /> and luck
          </motion.div>
        </div>
      </div>
    </footer>
  );
}