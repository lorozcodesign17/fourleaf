import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { useState } from 'react';
import { TwinklingStar, FloatingBubble, SpinningFlower } from './FrutigerElements';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Matcha Cloud Latte',
    description: 'matcha latte topped with sweet cream foam',
    price: '$5.75',
    image: 'https://images.unsplash.com/photo-1583525999977-2b928def9ab6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    category: 'Coffee & Matcha',
  },
  {
    id: 2,
    name: 'Strawberry Matcha Latte',
    description: 'layered strawberry milk and matcha',
    price: '$5.75',
    image: 'https://images.unsplash.com/photo-1771405317905-44d78aa82d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    category: 'Coffee & Matcha',
  },
  {
    id: 3,
    name: 'Matcha Tiramisu',
    description: 'tres leches cake infused with matcha',
    price: '$7.25',
    image: 'https://images.unsplash.com/photo-1768165335825-c2552c6b2299?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    category: 'Sweet Treats',
  },
  {
    id: 4,
    name: 'Lucky Clover Concha',
    description: 'classic concha with matcha sugar topping',
    price: '$4.50',
    image: 'https://images.unsplash.com/photo-1617859047277-9f47d2bd9696?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    category: 'Bakery',
  },
  {
    id: 5,
    name: 'Sky Blue Lychee Ade',
    description: 'lychee soda with butterfly pea and lemon',
    price: '$5.75',
    image: 'https://images.unsplash.com/photo-1605491840323-c8e4915913c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    category: 'Lucky Ades',
  },
  {
    id: 6,
    name: 'Golden Custard Bun',
    description: 'soft milk bun with matcha cream',
    price: '$4.00',
    image: 'https://images.unsplash.com/photo-1637194502327-c99c94943680?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    category: 'Lucky Specials',
  },
];

export function FeaturedMenu() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-white to-[#F0FFF8] relative overflow-hidden">
      {/* Frutiger Aero decorative elements */}
      <TwinklingStar size={50} delay={0} className="absolute top-20 left-10 opacity-50" />
      <TwinklingStar size={40} delay={1} className="absolute top-40 right-20 opacity-40" />
      <TwinklingStar size={45} delay={2} className="absolute bottom-32 left-1/4 opacity-45" />
      
      <FloatingBubble size={70} delay={0.5} className="absolute top-60 right-40 opacity-50" />
      <FloatingBubble size={90} delay={1.2} className="absolute bottom-20 right-10 opacity-40" />
      
      <SpinningFlower size={60} delay={0} className="absolute top-32 right-10 opacity-30" />
      <SpinningFlower size={55} delay={1.5} className="absolute bottom-40 left-16 opacity-35" />

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
            ✨ Featured Menu
          </h2>
          <p
            className="text-xl text-[#1E6F4D] max-w-2xl mx-auto"
            style={{ fontFamily: 'Nunito, sans-serif' }}
          >
            Handcrafted with luck and love, every day
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setHoveredId(item.id)}
              onHoverEnd={() => setHoveredId(null)}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Glossy card with gradient border */}
              <div 
                className="relative rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(240,255,248,0.95) 100%)',
                  border: '2px solid rgba(168, 213, 226, 0.3)',
                }}
              >
                {/* Glossy shine overlay */}
                <div 
                  className="absolute inset-0 opacity-40 pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 50%, rgba(168,213,226,0.3) 100%)',
                  }}
                />

                {/* Image container with platform effect */}
                <div className="relative overflow-hidden p-6 pb-4">
                  <div 
                    className="relative rounded-2xl overflow-hidden"
                    style={{
                      boxShadow: '0 10px 30px rgba(82, 160, 118, 0.2), 0 5px 15px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Glossy reflection on image */}
                    <div 
                      className="absolute inset-0 opacity-30 pointer-events-none"
                      style={{
                        background: 'linear-gradient(to bottom, rgba(255,255,255,0.4) 0%, transparent 40%)',
                      }}
                    />
                  </div>

                  {/* Floating category badge */}
                  <motion.div 
                    className="absolute top-8 left-8 px-4 py-1.5 rounded-full text-sm shadow-lg backdrop-blur-sm"
                    style={{ 
                      fontFamily: 'Quicksand, sans-serif', 
                      fontWeight: 600,
                      background: 'linear-gradient(135deg, #A8E6CF 0%, #7BC8A4 100%)',
                      color: '#2D8B5F',
                      border: '1.5px solid rgba(255,255,255,0.6)',
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {item.category}
                  </motion.div>

                  {/* Heart button */}
                  <motion.button
                    className="absolute top-8 right-8 p-2.5 rounded-full shadow-lg backdrop-blur-md"
                    style={{
                      background: 'rgba(255, 255, 255, 0.9)',
                      border: '1.5px solid rgba(168,213,226,0.4)',
                    }}
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Heart className="text-[#FF6B6B]" size={20} />
                  </motion.button>
                </div>
                
                {/* Content section */}
                <div className="relative px-6 pb-6 pt-2">
                  <h3
                    className="text-2xl mb-2 text-[#2D8B5F]"
                    style={{ fontFamily: 'Quicksand, sans-serif', fontWeight: 700 }}
                  >
                    {item.name}
                  </h3>
                  <p
                    className="text-[#52A076] mb-4 text-sm"
                    style={{ fontFamily: 'Nunito, sans-serif', lineHeight: 1.6 }}
                  >
                    {item.description}
                  </p>
                  <div
                    className="text-3xl text-[#2D8B5F]"
                    style={{ fontFamily: 'Quicksand, sans-serif', fontWeight: 700 }}
                  >
                    {item.price}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}