import { motion } from 'motion/react';
import { UserPlus, Star, Gift, Coffee, Users, Sparkles, Check, Trophy, ShoppingBag, Tag, Zap } from 'lucide-react';
import cloverIcon from 'figma:asset/7d9d530fc8433f195e7611236d6ec80e2188e570.png';
import { TwinklingStar, FloatingBubble, SpinningFlower } from './FrutigerElements';

// ─── Data ────────────────────────────────────────────────────────────────────

const steps = [
  {
    icon: UserPlus,
    step: '01',
    title: 'Join Free',
    description: 'Create your Four Leaf account in minutes — no credit card needed.',
  },
  {
    icon: Star,
    step: '02',
    title: 'Earn Lucky Points',
    description: 'Get 10 Lucky Points for every $1 you spend in-store or online.',
  },
  {
    icon: Gift,
    step: '03',
    title: 'Redeem Rewards',
    description: 'Unlock free drinks, pastries, and exclusive member-only perks.',
  },
];

const tiers = [
  {
    emoji: '🌱',
    name: 'Sprout',
    range: '0 – 149 pts',
    accent: '#52A076',
    accentLight: '#E8F5EE',
    featured: false,
    benefits: [
      'Earn 10 pts per $1 spent',
      'Free birthday pastry',
      'Early access to new menu items',
      'Monthly member newsletter',
    ],
  },
  {
    emoji: '🍀',
    name: 'Clover',
    range: '150 – 399 pts',
    accent: '#2D8B5F',
    accentLight: '#D6F0E4',
    featured: false,
    benefits: [
      'Everything in Sprout',
      'Double points on Tuesdays',
      'Free drink on your birthday',
      'Exclusive Clover seasonal drinks',
      'Priority mobile order queue',
    ],
  },
  {
    emoji: '⭐',
    name: 'Lucky',
    range: '400+ pts',
    accent: '#C49A00',
    accentLight: '#FFF8DC',
    featured: true,
    benefits: [
      'Everything in Clover',
      'Triple points every weekend',
      'Free cake slice on birthday',
      'Complimentary monthly drink',
      'Exclusive Lucky member events',
      'Early seasonal menu previews',
    ],
  },
];

const earningWays = [
  {
    icon: Coffee,
    title: 'Every Purchase',
    points: '+10 pts / $1',
    description: 'Earn points on every single order, every day.',
    color: '#2D8B5F',
    bg: '#E8F5EE',
  },
  {
    icon: Gift,
    title: 'Birthday Bonus',
    points: '+200 pts',
    description: 'We celebrate you with bonus points on your birthday.',
    color: '#C49A00',
    bg: '#FFF8DC',
  },
  {
    icon: Users,
    title: 'Refer a Friend',
    points: '+150 pts',
    description: 'Share the luck — earn points for every friend you bring.',
    color: '#52A076',
    bg: '#E8F5EE',
  },
  {
    icon: Sparkles,
    title: 'Seasonal Challenges',
    points: 'Up to +500 pts',
    description: 'Complete limited-time challenges for big point bonuses.',
    color: '#1E6F4D',
    bg: '#D6F0E4',
  },
];

const rewardsCatalog = [
  { icon: Coffee, name: 'Free Drip Coffee', points: 150, gradient: 'from-[#52A076] to-[#2D8B5F]' },
  { icon: Gift, name: 'Free Pastry', points: 200, gradient: 'from-[#2D8B5F] to-[#1E6F4D]' },
  { icon: Zap, name: 'Free Specialty Drink', points: 300, gradient: 'from-[#1E6F4D] to-[#2D8B5F]' },
  { icon: ShoppingBag, name: 'Lucky Merch Discount', points: 400, gradient: 'from-[#52A076] to-[#1E6F4D]' },
  { icon: Tag, name: 'Buy One Get One', points: 500, gradient: 'from-[#2D8B5F] to-[#52A076]' },
  { icon: Trophy, name: 'Free Cake Slice', points: 600, gradient: 'from-[#C49A00] to-[#A07800]' },
];

// ─── Component ────────────────────────────────────────────────────────────────

export function Rewards() {
  return (
    <section id="rewards" className="relative overflow-hidden">

      {/* ── 1. HERO BANNER ─────────────────────────────────────────────── */}
      <div
        className="relative overflow-hidden py-28 sm:py-36"
        style={{ background: 'linear-gradient(135deg, #1E6F4D 0%, #2D8B5F 50%, #52A076 100%)' }}
      >
        {/* Decorative elements */}
        <TwinklingStar size={60} delay={0} className="absolute top-12 right-16 opacity-40" />
        <TwinklingStar size={40} delay={1.2} className="absolute bottom-16 left-24 opacity-35" />
        <TwinklingStar size={50} delay={0.6} className="absolute top-1/2 right-1/3 opacity-25" />
        <FloatingBubble size={120} delay={0} className="absolute top-8 left-4 opacity-15" />
        <FloatingBubble size={80} delay={1.5} className="absolute bottom-8 right-4 opacity-15" />
        <SpinningFlower className="absolute bottom-10 right-24 opacity-20" />

        {/* Rotating clover watermark */}
        <motion.img
          src={cloverIcon}
          alt=""
          className="absolute left-[-40px] top-1/2 -translate-y-1/2 w-64 h-64 opacity-10 pointer-events-none"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />
        <motion.img
          src={cloverIcon}
          alt=""
          className="absolute right-[-20px] top-8 w-48 h-48 opacity-10 pointer-events-none"
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Pill badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6 text-sm font-semibold tracking-widest uppercase"
            style={{
              background: 'rgba(255,255,255,0.15)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.3)',
              color: 'rgba(255,255,255,0.9)',
              fontFamily: 'Nunito, sans-serif',
            }}
          >
            <span>🍀</span> Loyalty Program
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-8xl text-white mb-6 leading-tight"
            style={{ fontFamily: 'Quicksand, sans-serif', fontWeight: 700 }}
          >
            Four Leaf
            <br />
            <span style={{ color: '#A8E6CF' }}>Rewards</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl mb-10 max-w-2xl mx-auto"
            style={{
              fontFamily: 'Nunito, sans-serif',
              color: 'rgba(255,255,255,0.82)',
              lineHeight: 1.6,
            }}
          >
            Every sip, every bite, every visit — earns you luck.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.06, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="px-10 py-4 rounded-full text-lg font-bold shadow-xl transition-shadow hover:shadow-2xl"
              style={{
                fontFamily: 'Quicksand, sans-serif',
                fontWeight: 700,
                background: 'white',
                color: '#1E6F4D',
              }}
            >
              Join Free — It's Lucky
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.06, y: -3, background: 'rgba(255,255,255,0.15)' }}
              whileTap={{ scale: 0.97 }}
              className="px-10 py-4 rounded-full text-lg font-bold transition-all"
              style={{
                fontFamily: 'Quicksand, sans-serif',
                fontWeight: 700,
                background: 'rgba(255,255,255,0.08)',
                border: '2px solid rgba(255,255,255,0.6)',
                color: 'white',
              }}
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-10 mt-16"
          >
            {[
              { value: '10 pts', label: 'per $1 spent' },
              { value: '3 Tiers', label: 'of rewards' },
              { value: 'Free', label: 'to join' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div
                  className="text-3xl sm:text-4xl font-bold text-white"
                  style={{ fontFamily: 'Quicksand, sans-serif' }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-sm mt-1"
                  style={{ fontFamily: 'Nunito, sans-serif', color: 'rgba(255,255,255,0.65)' }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── 2. HOW IT WORKS ────────────────────────────────────────────── */}
      <div className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p
              className="text-sm font-bold tracking-widest uppercase mb-3"
              style={{ fontFamily: 'Nunito, sans-serif', color: '#52A076' }}
            >
              Simple as Luck
            </p>
            <h3
              className="text-4xl sm:text-5xl text-[#2D8B5F]"
              style={{ fontFamily: 'Quicksand, sans-serif', fontWeight: 700 }}
            >
              How It Works
            </h3>
          </motion.div>

          <div className="relative">
            {/* Connector line — desktop only */}
            <div
              className="hidden lg:block absolute top-12 left-1/2 -translate-x-1/2 w-2/3 h-0.5"
              style={{
                background: 'repeating-linear-gradient(to right, #52A076 0, #52A076 10px, transparent 10px, transparent 20px)',
                opacity: 0.4,
              }}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
              {steps.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Circle badge */}
                  <div
                    className="w-24 h-24 rounded-full flex items-center justify-center mb-6 shadow-lg relative"
                    style={{ background: 'linear-gradient(135deg, #2D8B5F, #52A076)' }}
                  >
                    <s.icon className="text-white" size={36} />
                    <div
                      className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{
                        background: '#FFD700',
                        color: '#7A5000',
                        fontFamily: 'Quicksand, sans-serif',
                      }}
                    >
                      {s.step}
                    </div>
                  </div>
                  <h4
                    className="text-2xl mb-3 text-[#2D8B5F]"
                    style={{ fontFamily: 'Quicksand, sans-serif', fontWeight: 700 }}
                  >
                    {s.title}
                  </h4>
                  <p
                    className="text-[#1E6F4D] leading-relaxed max-w-xs"
                    style={{ fontFamily: 'Nunito, sans-serif', fontSize: '1.05rem' }}
                  >
                    {s.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── 3. TIER SYSTEM ─────────────────────────────────────────────── */}
      <div className="py-24" style={{ background: '#F0FFF8' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p
              className="text-sm font-bold tracking-widest uppercase mb-3"
              style={{ fontFamily: 'Nunito, sans-serif', color: '#52A076' }}
            >
              Grow With Every Visit
            </p>
            <h3
              className="text-4xl sm:text-5xl text-[#2D8B5F]"
              style={{ fontFamily: 'Quicksand, sans-serif', fontWeight: 700 }}
            >
              Your Lucky Journey
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {tiers.map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative rounded-3xl p-8 transition-shadow duration-300"
                style={{
                  background: 'white',
                  border: tier.featured ? `2px solid ${tier.accent}` : '1.5px solid rgba(168,213,193,0.35)',
                  boxShadow: tier.featured
                    ? `0 8px 40px rgba(196,154,0,0.18), 0 2px 12px rgba(196,154,0,0.1)`
                    : '0 4px 20px rgba(45,139,95,0.08)',
                }}
              >
                {/* "Most Popular" ribbon for Lucky tier */}
                {tier.featured && (
                  <div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase whitespace-nowrap"
                    style={{
                      background: 'linear-gradient(135deg, #C49A00, #FFD700)',
                      color: '#5A3E00',
                      fontFamily: 'Quicksand, sans-serif',
                      boxShadow: '0 4px 12px rgba(196,154,0,0.35)',
                    }}
                  >
                    ⭐ Most Exclusive
                  </div>
                )}

                {/* Tier header */}
                <div className="text-center mb-8">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-4 shadow-md"
                    style={{ background: tier.accentLight }}
                  >
                    {tier.emoji}
                  </div>
                  <h4
                    className="text-3xl mb-1"
                    style={{
                      fontFamily: 'Quicksand, sans-serif',
                      fontWeight: 700,
                      color: tier.accent,
                    }}
                  >
                    {tier.name}
                  </h4>
                  <div
                    className="inline-block px-4 py-1 rounded-full text-sm font-semibold mt-1"
                    style={{
                      background: tier.accentLight,
                      color: tier.accent,
                      fontFamily: 'Nunito, sans-serif',
                    }}
                  >
                    {tier.range}
                  </div>
                </div>

                {/* Benefits list */}
                <ul className="space-y-3">
                  {tier.benefits.map((b, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div
                        className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                        style={{ background: tier.accentLight }}
                      >
                        <Check size={12} style={{ color: tier.accent }} strokeWidth={3} />
                      </div>
                      <span
                        className="text-[#1E6F4D] leading-snug"
                        style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.97rem' }}
                      >
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Bottom accent bar */}
                <div
                  className="mt-8 h-1 rounded-full w-full"
                  style={{ background: `linear-gradient(to right, ${tier.accent}, ${tier.accentLight})` }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 4. WAYS TO EARN ────────────────────────────────────────────── */}
      <div className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p
              className="text-sm font-bold tracking-widest uppercase mb-3"
              style={{ fontFamily: 'Nunito, sans-serif', color: '#52A076' }}
            >
              Multiply Your Luck
            </p>
            <h3
              className="text-4xl sm:text-5xl text-[#2D8B5F]"
              style={{ fontFamily: 'Quicksand, sans-serif', fontWeight: 700 }}
            >
              Ways to Earn
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {earningWays.map((way, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="rounded-3xl p-7 transition-shadow duration-300"
                style={{
                  background: way.bg,
                  border: '1.5px solid rgba(168,213,193,0.3)',
                  boxShadow: '0 4px 20px rgba(45,139,95,0.07)',
                }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-sm"
                  style={{ background: way.color }}
                >
                  <way.icon className="text-white" size={26} />
                </div>
                <h4
                  className="text-xl mb-1"
                  style={{
                    fontFamily: 'Quicksand, sans-serif',
                    fontWeight: 700,
                    color: '#2D8B5F',
                  }}
                >
                  {way.title}
                </h4>
                <div
                  className="text-2xl font-bold mb-3"
                  style={{
                    fontFamily: 'Quicksand, sans-serif',
                    fontWeight: 700,
                    color: '#C49A00',
                  }}
                >
                  {way.points}
                </div>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: 'Nunito, sans-serif', color: '#1E6F4D' }}
                >
                  {way.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 5. REWARDS CATALOG ─────────────────────────────────────────── */}
      <div className="py-24" style={{ background: '#F0FFF8' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p
              className="text-sm font-bold tracking-widest uppercase mb-3"
              style={{ fontFamily: 'Nunito, sans-serif', color: '#52A076' }}
            >
              Your Points, Your Prizes
            </p>
            <h3
              className="text-4xl sm:text-5xl text-[#2D8B5F]"
              style={{ fontFamily: 'Quicksand, sans-serif', fontWeight: 700 }}
            >
              Redeem Your Luck
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rewardsCatalog.map((reward, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className={`relative rounded-3xl p-7 bg-gradient-to-br ${reward.gradient} flex items-center gap-5 cursor-pointer transition-shadow duration-300`}
                style={{ boxShadow: '0 6px 24px rgba(45,139,95,0.18)' }}
              >
                {/* Icon circle */}
                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                  <reward.icon className="text-white" size={30} />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <h4
                    className="text-xl text-white leading-tight mb-2"
                    style={{ fontFamily: 'Quicksand, sans-serif', fontWeight: 700 }}
                  >
                    {reward.name}
                  </h4>
                  {/* Points badge */}
                  <div
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-bold"
                    style={{
                      background: '#FFD700',
                      color: '#7A5000',
                      fontFamily: 'Quicksand, sans-serif',
                    }}
                  >
                    <Star size={12} fill="#7A5000" /> {reward.points} pts
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-8 text-sm"
            style={{ fontFamily: 'Nunito, sans-serif', color: '#52A076' }}
          >
            Rewards available in-store and on our app • Points never expire while your account is active
          </motion.p>
        </div>
      </div>

      {/* ── 6. JOIN CTA BANNER ─────────────────────────────────────────── */}
      <div
        className="relative overflow-hidden py-28"
        style={{ background: 'linear-gradient(135deg, #52A076 0%, #2D8B5F 50%, #1E6F4D 100%)' }}
      >
        {/* Decorative elements */}
        <TwinklingStar size={55} delay={0.4} className="absolute top-10 left-16 opacity-35" />
        <TwinklingStar size={45} delay={1.8} className="absolute bottom-10 right-20 opacity-30" />
        <FloatingBubble size={100} delay={0.8} className="absolute top-1/2 left-8 opacity-15 -translate-y-1/2" />
        <FloatingBubble size={70} delay={2} className="absolute top-1/4 right-8 opacity-15" />
        <SpinningFlower className="absolute bottom-8 left-32 opacity-20" />

        <motion.img
          src={cloverIcon}
          alt=""
          className="absolute right-[-30px] bottom-[-20px] w-56 h-56 opacity-10 pointer-events-none"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="text-6xl mb-6"
              style={{ lineHeight: 1 }}
            >
              🍀
            </div>
            <h3
              className="text-4xl sm:text-5xl lg:text-6xl text-white mb-5"
              style={{ fontFamily: 'Quicksand, sans-serif', fontWeight: 700, lineHeight: 1.15 }}
            >
              Start Earning Today
            </h3>
            <p
              className="text-xl mb-10 max-w-xl mx-auto"
              style={{
                fontFamily: 'Nunito, sans-serif',
                color: 'rgba(255,255,255,0.8)',
                lineHeight: 1.6,
              }}
            >
              Join thousands of Four Leaf members already earning rewards with every visit.
            </p>

            <motion.button
              whileHover={{ scale: 1.07, y: -4 }}
              whileTap={{ scale: 0.97 }}
              className="px-12 py-5 rounded-full text-xl font-bold shadow-2xl"
              style={{
                fontFamily: 'Quicksand, sans-serif',
                fontWeight: 700,
                background: 'white',
                color: '#1E6F4D',
              }}
            >
              Join the Club — It's Free 🍀
            </motion.button>

            <p
              className="mt-5 text-sm"
              style={{ fontFamily: 'Nunito, sans-serif', color: 'rgba(255,255,255,0.55)' }}
            >
              No credit card required • Cancel anytime
            </p>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
