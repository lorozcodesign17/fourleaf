import { motion } from 'motion/react';
import coffeeCup from 'figma:asset/7a8b1c918cf4d51a3774012f5374ef4b70001072.png';
import cloverIcon from 'figma:asset/7d9d530fc8433f195e7611236d6ec80e2188e570.png';
import bubbleBackground from 'figma:asset/b04d20ed657732d176fad5040a94146804720730.png';

export function Hero() {
  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative flex items-center overflow-hidden"
      style={{ minHeight: '100svh', paddingTop: '4rem' }}
    >
      {/* ── 1. Background fades in first ── */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
        style={{
          backgroundImage: `url(${bubbleBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Gradient overlay — heavier on left for text legibility, lighter on right */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8, delay: 0.3 }}
        style={{
          background:
            'linear-gradient(105deg, rgba(240,255,248,0.92) 0%, rgba(220,248,235,0.80) 35%, rgba(200,235,220,0.55) 60%, rgba(135,206,235,0.25) 100%)',
        }}
      />

      {/* Cloud blobs — bloom in softly */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5, delay: 0.6 }}
      >
        <div className="absolute top-12 left-16 w-[28rem] h-56 bg-white rounded-full blur-3xl opacity-50" />
        <div className="absolute top-48 right-24 w-80 h-44 bg-white rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-24 left-1/3 w-96 h-48 bg-white rounded-full blur-3xl opacity-45" />
      </motion.div>

      {/* ── Main content grid ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-16 lg:py-0" style={{ minHeight: 'calc(100svh - 4rem)' }}>

        {/* ── LEFT: text slides in from the left, after cup lands ── */}
        <div className="flex flex-col justify-center">
          <motion.h1
            className="text-6xl sm:text-7xl lg:text-8xl mb-5"
            style={{
              fontFamily: 'Quicksand, sans-serif',
              fontWeight: 700,
              color: '#2D8B5F',
              textTransform: 'capitalize',
              lineHeight: 1.05,
            }}
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.95, ease: [0.22, 1, 0.36, 1] }}
          >
            Lucky you!
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl mb-8 max-w-md"
            style={{
              fontFamily: 'Nunito, sans-serif',
              fontWeight: 400,
              color: '#52A076',
              lineHeight: 1.75,
            }}
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 1.12, ease: [0.22, 1, 0.36, 1] }}
          >
            Enter a glossy world of luck where dreamy greens and shimmering
            blues set the vibe. Our cloud‑soft pastries and sparkle‑kissed
            drinks taste like pure serendipity.
          </motion.p>

          <motion.div
            className="flex items-center gap-4 flex-wrap"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.button
              onClick={scrollToMenu}
              className="px-10 py-4 text-base text-white rounded-full transition-all"
              style={{
                fontFamily: 'Quicksand, sans-serif',
                fontWeight: 700,
                background: 'linear-gradient(135deg, #52A076 0%, #2D8B5F 100%)',
                boxShadow: '0 8px 28px rgba(82,160,118,0.50)',
              }}
              whileHover={{ scale: 1.06, y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              Explore Menu ✨
            </motion.button>

            <motion.button
              onClick={scrollToAbout}
              className="px-10 py-4 text-base rounded-full border-2 transition-all"
              style={{
                fontFamily: 'Quicksand, sans-serif',
                fontWeight: 600,
                color: '#2D8B5F',
                borderColor: 'rgba(82,160,118,0.6)',
                background: 'rgba(255,255,255,0.55)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
              }}
              whileHover={{ scale: 1.06, y: -3, background: 'rgba(255,255,255,0.85)' }}
              whileTap={{ scale: 0.97 }}
            >
              Our Story
            </motion.button>
          </motion.div>
        </div>

        {/* ── RIGHT: cup drops fast from top, then floats ── */}
        <motion.div
          className="relative flex items-center justify-center"
          initial={{ opacity: 0, y: -420 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 160,
            damping: 16,
            delay: 0.18,
          }}
        >
          {/* Glow ring behind cup */}
          <motion.div
            className="absolute w-72 h-72 rounded-full pointer-events-none"
            style={{
              background:
                'radial-gradient(circle, rgba(82,160,118,0.18) 0%, transparent 70%)',
            }}
            animate={{ scale: [1, 1.12, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.3 }}
          />

          {/* Cup — continuous float loop (starts after spring settles) */}
          <motion.img
            src={coffeeCup}
            alt="Four Leaf Coffee Cup"
            className="w-full max-w-sm lg:max-w-md h-auto relative z-10 drop-shadow-2xl"
            animate={{ y: [0, -18, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1.2,
            }}
          />

          {/* Floating clover — fades in after cup lands */}
          <motion.img
            src={cloverIcon}
            alt="Clover"
            className="absolute w-14 h-14 bottom-10 right-6 z-20"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 1],
              y: [0, -20, 0],
              rotate: [0, 15, -15, 0],
            }}
            transition={{
              opacity: { duration: 0.8, delay: 1.4, times: [0, 1, 1] },
              y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.4 },
              rotate: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.4 },
            }}
          />

          {/* Decorative bubbles — bloom in after cup lands */}
          {[
            { size: 60, right: '20%', top: '30%', d: 0 },
            { size: 80, right: '35%', top: '40%', d: 0.15 },
            { size: 100, right: '10%', top: '50%', d: 0.3 },
          ].map((b, i) => (
            <motion.div
              key={`bubble-${i}`}
              className="absolute rounded-full border border-white/50 bg-white/15 pointer-events-none"
              style={{ width: b.size, height: b.size, right: b.right, top: b.top }}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{
                opacity: [0.25, 0.45, 0.25],
                scale: [1, 1.18, 1],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1.35 + b.d,
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* ── Scroll indicator — appears last ── */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2 }}
        whileHover={{ scale: 1.1 }}
        aria-label="Scroll down"
      >
        <span
          className="text-xs tracking-widest uppercase text-[#52A076]/70"
          style={{ fontFamily: 'Quicksand, sans-serif', fontWeight: 600 }}
        >
          scroll
        </span>
        <motion.div
          className="w-6 h-10 border-2 border-[#52A076]/40 rounded-full flex justify-center pt-1.5"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        >
          <div className="w-1 h-2.5 bg-[#52A076]/50 rounded-full" />
        </motion.div>
      </motion.button>
    </section>
  );
}
