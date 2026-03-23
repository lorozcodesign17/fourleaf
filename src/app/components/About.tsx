import { motion } from 'motion/react';
import { Coffee, Heart, Sparkles } from 'lucide-react';
import cloverIcon from 'figma:asset/7d9d530fc8433f195e7611236d6ec80e2188e570.png';
import { FloatingBubble, SwimmingFish, GrassStrands } from './FrutigerElements';

export function About() {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 right-10 opacity-10"
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ duration: 20, repeat: Infinity }}
      >
        <img src={cloverIcon} alt="" className="w-64 h-64" />
      </motion.div>

      {/* Frutiger Aero Elements */}
      <FloatingBubble size={80} delay={0} className="absolute top-32 left-10 opacity-60" />
      <FloatingBubble size={60} delay={1.5} className="absolute top-60 left-32 opacity-50" />
      <FloatingBubble size={100} delay={0.8} className="absolute bottom-40 right-20 opacity-40" />
      
      <SwimmingFish size={100} delay={0.5} className="absolute top-1/4 right-16 opacity-30" />
      
      <div className="absolute bottom-0 left-0 right-0 opacity-20">
        <GrassStrands />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl mb-6 text-[#2D8B5F]"
            style={{ fontFamily: 'Quicksand, sans-serif', fontWeight: 700 }}
          >
            ✨ About Us
          </h2>
          <p
            className="text-xl text-[#1E6F4D] max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Nunito, sans-serif' }}
          >
            Welcome to Four Leaf Café & Bakery, where every visit feels like finding
            a four-leaf clover! We blend the glossy, nostalgic aesthetic of Frutiger
            Aero with modern café culture to create a space that's fresh, whimsical,
            and full of joy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {/* Value 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -10 }}
            className="text-center p-8 rounded-3xl bg-gradient-to-br from-[#F0FFF8] to-white shadow-lg hover:shadow-2xl transition-shadow duration-300"
            style={{ border: '1.5px solid rgba(168, 213, 193, 0.3)' }}
          >
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#2D8B5F] to-[#1E6F4D] rounded-2xl mb-6 shadow-lg"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Coffee className="text-white" size={38} />
            </motion.div>
            <h3
              className="text-2xl mb-3 text-[#2D8B5F]"
              style={{ fontFamily: 'Quicksand, sans-serif', fontWeight: 700 }}
            >
              Fresh & Quality
            </h3>
            <p
              className="text-[#1E6F4D]"
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              We bake fresh daily and source the finest ingredients for every cup and bite
            </p>
          </motion.div>

          {/* Value 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -10 }}
            className="text-center p-8 rounded-3xl bg-gradient-to-br from-[#F0FFF8] to-white shadow-lg hover:shadow-2xl transition-shadow duration-300"
            style={{ border: '1.5px solid rgba(135, 206, 235, 0.3)' }}
          >
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#87CEEB] to-[#5FA8D3] rounded-2xl mb-6 shadow-lg"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Heart className="text-white" size={38} fill="white" />
            </motion.div>
            <h3
              className="text-2xl mb-3 text-[#2D8B5F]"
              style={{ fontFamily: 'Quicksand, sans-serif', fontWeight: 700 }}
            >
              Made with Love
            </h3>
            <p
              className="text-[#1E6F4D]"
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              Every recipe is crafted with care, passion, and a sprinkle of luck
            </p>
          </motion.div>

          {/* Value 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -10 }}
            className="text-center p-8 rounded-3xl bg-gradient-to-br from-[#F0FFF8] to-white shadow-lg hover:shadow-2xl transition-shadow duration-300"
            style={{ border: '1.5px solid rgba(255, 215, 0, 0.25)' }}
          >
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-2xl mb-6 shadow-lg"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Sparkles className="text-white" size={38} />
            </motion.div>
            <h3
              className="text-2xl mb-3 text-[#2D8B5F]"
              style={{ fontFamily: 'Quicksand, sans-serif', fontWeight: 700 }}
            >
              Whimsical Vibes
            </h3>
            <p
              className="text-[#1E6F4D]"
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              A playful, dreamy atmosphere that makes every visit feel magical
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}