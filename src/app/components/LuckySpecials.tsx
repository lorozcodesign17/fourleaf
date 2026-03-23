import { motion } from 'motion/react';
import { Sparkles, Star } from 'lucide-react';
import cloverIcon from 'figma:asset/7d9d530fc8433f195e7611236d6ec80e2188e570.png';

export function LuckySpecials() {
  return (
    <section className="py-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #9FDFBF 0%, #7EC8A3 50%, #5FB98E 100%)',
      }}
    >
      {/* Decorative Elements */}
      <motion.div
        className="absolute top-10 left-10 opacity-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        <img src={cloverIcon} alt="" className="w-32 h-32" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-10 right-10 opacity-20"
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        <img src={cloverIcon} alt="" className="w-32 h-32" />
      </motion.div>

      {/* Floating Stars */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${10 + i * 15}%`,
            top: `${20 + (i % 3) * 30}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 2 + i * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Star className="text-[#FFD700]" fill="#FFD700" size={24} />
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block mb-6"
          >
            <Sparkles className="text-[#FFD700]" size={48} />
          </motion.div>

          <h2
            className="text-5xl sm:text-6xl md:text-7xl mb-6 text-white"
            style={{
              fontFamily: 'Quicksand, sans-serif',
              fontWeight: 700,
              textShadow: '0 4px 20px rgba(30, 111, 77, 0.5)',
            }}
          >
            Lucky Specials
          </h2>

          <p
            className="text-xl sm:text-2xl mb-8 text-white/95 max-w-3xl mx-auto"
            style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 500 }}
          >
            This week's magical creations, crafted with extra luck! ✨
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Special 1 */}
            <motion.div
              whileHover={{ scale: 1.04, rotate: 1.5 }}
              className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300"
              style={{ border: '1.5px solid rgba(255,255,255,0.6)' }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FFD700] rounded-full mb-4">
                <img src={cloverIcon} alt="" className="w-10 h-10" />
              </div>
              <h3
                className="text-2xl mb-3 text-[#2D8B5F]"
                style={{ fontFamily: 'Quicksand, sans-serif', fontWeight: 700 }}
              >
                Four Leaf Latte
              </h3>
              <p
                className="text-[#1E6F4D] mb-4"
                style={{ fontFamily: 'Nunito, sans-serif' }}
              >
                Vanilla, caramel, matcha & mint - four lucky flavors in one cup
              </p>
              <div className="inline-block mt-1 px-4 py-1.5 rounded-full text-base font-bold text-white"
                style={{ background: 'linear-gradient(135deg, #FF8C42 0%, #FF6B1A 100%)', fontFamily: 'Quicksand, sans-serif' }}
              >
                $6.99
              </div>
            </motion.div>

            {/* Special 2 */}
            <motion.div
              whileHover={{ scale: 1.04, rotate: -1.5 }}
              className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300"
              style={{ border: '1.5px solid rgba(255,255,255,0.6)' }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#87CEEB] rounded-full mb-4">
                <Star className="text-[#FFD700]" fill="#FFD700" size={32} />
              </div>
              <h3
                className="text-2xl mb-3 text-[#2D8B5F]"
                style={{ fontFamily: 'Quicksand, sans-serif', fontWeight: 700 }}
              >
                Lucky Star Cake
              </h3>
              <p
                className="text-[#1E6F4D] mb-4"
                style={{ fontFamily: 'Nunito, sans-serif' }}
              >
                Lemon blueberry cake with edible glitter and gold stars
              </p>
              <div className="inline-block mt-1 px-4 py-1.5 rounded-full text-base font-bold text-white"
                style={{ background: 'linear-gradient(135deg, #FF8C42 0%, #FF6B1A 100%)', fontFamily: 'Quicksand, sans-serif' }}
              >
                $7.50
              </div>
            </motion.div>

            {/* Special 3 */}
            <motion.div
              whileHover={{ scale: 1.04, rotate: 1.5 }}
              className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300"
              style={{ border: '1.5px solid rgba(255,255,255,0.6)' }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#9FDFBF] rounded-full mb-4">
                <Sparkles className="text-white" size={32} />
              </div>
              <h3
                className="text-2xl mb-3 text-[#2D8B5F]"
                style={{ fontFamily: 'Quicksand, sans-serif', fontWeight: 700 }}
              >
                Rainbow Smoothie
              </h3>
              <p
                className="text-[#1E6F4D] mb-4"
                style={{ fontFamily: 'Nunito, sans-serif' }}
              >
                Layered tropical fruits creating a colorful lucky charm
              </p>
              <div className="inline-block mt-1 px-4 py-1.5 rounded-full text-base font-bold text-white"
                style={{ background: 'linear-gradient(135deg, #FF8C42 0%, #FF6B1A 100%)', fontFamily: 'Quicksand, sans-serif' }}
              >
                $8.25
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
