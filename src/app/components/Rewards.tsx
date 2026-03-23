import { motion } from 'motion/react';
import { Smartphone, Gift, Star, TrendingUp } from 'lucide-react';
import cloverIcon from 'figma:asset/7d9d530fc8433f195e7611236d6ec80e2188e570.png';
import { TwinklingStar, FloatingBubble, SwimmingFish } from './FrutigerElements';
import bubbleBackground from 'figma:asset/b04d20ed657732d176fad5040a94146804720730.png';

export function Rewards() {
  const benefits = [
    {
      icon: Gift,
      title: 'Free Birthday Treat',
      description: 'Get a free pastry on your special day',
    },
    {
      icon: Star,
      title: 'Earn Points',
      description: 'Every $1 spent = 10 lucky points',
    },
    {
      icon: TrendingUp,
      title: 'Exclusive Offers',
      description: 'Early access to seasonal specials',
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10">
          <img src={cloverIcon} alt="" className="w-40 h-40" />
        </div>
        <div className="absolute bottom-20 right-10">
          <img src={cloverIcon} alt="" className="w-40 h-40" />
        </div>
      </div>

      {/* Frutiger Aero Elements */}
      <TwinklingStar size={55} delay={0} className="absolute top-24 right-24 opacity-50" />
      <TwinklingStar size={45} delay={1.5} className="absolute bottom-24 left-20 opacity-45" />
      
      <FloatingBubble size={85} delay={0} className="absolute top-1/3 left-10 opacity-40" />
      <FloatingBubble size={70} delay={1} className="absolute bottom-1/3 right-16 opacity-45" />
      
      <SwimmingFish size={90} delay={0.8} className="absolute top-1/2 right-32 opacity-25" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            🍀 Lucky Rewards
          </h2>
          <p
            className="text-xl text-[#1E6F4D] max-w-2xl mx-auto"
            style={{ fontFamily: 'Nunito, sans-serif' }}
          >
            Join our loyalty program and let luck reward you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative mx-auto w-80 h-[600px] bg-gradient-to-br from-[#2D8B5F] to-[#1E6F4D] rounded-[3rem] shadow-2xl p-4">
              <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                <div className="h-full flex flex-col items-center justify-center p-8 relative">
                  {/* Background image layer with opacity */}
                  <div 
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url(${bubbleBackground})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      opacity: 0.4,
                    }}
                  />
                  
                  {/* Content layer with full opacity */}
                  <div className="relative z-10 flex flex-col items-center">
                    <motion.img
                      src={cloverIcon}
                      alt="Clover"
                      className="w-32 h-32 mb-8"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                    />
                    <div className="text-center text-white">
                      <h3
                        className="text-3xl mb-4 text-[#175d39]"
                        style={{ fontFamily: 'Quicksand, sans-serif', fontWeight: 700 }}
                      >
                        250 Points
                      </h3>
                      <p
                        className="text-lg text-[#295c5b]"
                        style={{ fontFamily: 'Nunito, sans-serif' }}
                      >
                        Your Lucky Balance
                      </p>
                    </div>
                  </div>
                  
                  {/* Floating stars around phone */}
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute z-10"
                      style={{
                        left: i % 2 === 0 ? '10%' : '80%',
                        top: `${20 + i * 20}%`,
                      }}
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2 + i * 0.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      <Star className="text-[#FFD700]" fill="#FFD700" size={20} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 8 }}
                  className="flex items-start gap-4 bg-gradient-to-r from-[#F0FFF8] to-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
                  style={{ border: '1.5px solid rgba(168,213,193,0.3)', borderLeft: '3px solid #52A076' }}
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-[#2D8B5F] rounded-xl flex items-center justify-center">
                    <benefit.icon className="text-white" size={28} />
                  </div>
                  <div>
                    <h3
                      className="text-2xl mb-2 text-[#2D8B5F]"
                      style={{ fontFamily: 'Quicksand, sans-serif', fontWeight: 700 }}
                    >
                      {benefit.title}
                    </h3>
                    <p
                      className="text-[#1E6F4D]"
                      style={{ fontFamily: 'Nunito, sans-serif' }}
                    >
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="mt-10 px-10 py-5 text-xl text-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-3 mx-auto lg:mx-0"
              style={{
                fontFamily: 'Quicksand, sans-serif',
                fontWeight: 700,
                background: 'linear-gradient(135deg, #2D8B5F 0%, #1E6F4D 100%)',
              }}
            >
              <Smartphone size={24} />
              Download App
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}