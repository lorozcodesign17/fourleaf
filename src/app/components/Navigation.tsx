import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'motion/react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(45, 139, 95, 0.88)' : '#52A076',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        boxShadow: scrolled
          ? '0 4px 24px rgba(30, 111, 77, 0.25), 0 1px 0 rgba(255,255,255,0.08)'
          : '0 2px 8px rgba(0,0,0,0.1)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo Text */}
          <motion.div
            className="cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('hero')}
          >
            <h1 
              className="text-white text-2xl"
              style={{ fontFamily: 'Quicksand, sans-serif', fontWeight: 600 }}
            >
              four leaf
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {['about', 'menu', 'locations', 'contact'].map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="relative text-white/90 hover:text-white transition-colors text-sm lowercase tracking-wide group"
                style={{ fontFamily: 'Quicksand, sans-serif', fontWeight: 600 }}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-white/70 rounded-full transition-all duration-300 group-hover:w-full" />
              </motion.button>
            ))}
            <motion.button
              onClick={() => scrollToSection('rewards')}
              className="px-5 py-2 text-sm rounded-full text-[#2D8B5F] font-semibold transition-all"
              style={{
                fontFamily: 'Quicksand, sans-serif',
                background: 'rgba(255,255,255,0.92)',
              }}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,1)' }}
              whileTap={{ scale: 0.97 }}
            >
              rewards 🍀
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2.5 rounded-xl hover:bg-white/10 transition-colors"
            style={{ minWidth: '44px', minHeight: '44px' }}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4 border-t border-white/15 mt-1 pt-2"
          >
            {['about', 'menu', 'locations', 'contact', 'rewards'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left px-4 py-4 text-white hover:bg-white/10 rounded-xl transition-colors text-base lowercase"
                style={{ fontFamily: 'Quicksand, sans-serif', fontWeight: 600, minHeight: '44px' }}
              >
                {item}{item === 'rewards' ? ' 🍀' : ''}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}