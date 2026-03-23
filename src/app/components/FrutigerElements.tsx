import { motion } from 'motion/react';
import goldfishSticker from '@/assets/goldfish_sticker.png';
import starrSticker from '@/assets/starr_1.png';

export function Bubble({ size = 60, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))' }}
    >
      <defs>
        <radialGradient id={`bubble-grad-${size}`} cx="30%" cy="30%">
          <stop offset="0%" style={{ stopColor: 'rgba(255,255,255,0.9)', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: 'rgba(168,213,226,0.6)', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: 'rgba(168,213,226,0.3)', stopOpacity: 1 }} />
        </radialGradient>
      </defs>
      <circle
        cx="50"
        cy="50"
        r="48"
        fill={`url(#bubble-grad-${size})`}
        stroke="rgba(255,255,255,0.8)"
        strokeWidth="2"
      />
      <ellipse
        cx="35"
        cy="30"
        rx="15"
        ry="20"
        fill="rgba(255,255,255,0.6)"
        opacity="0.8"
      />
    </svg>
  );
}

export function Star({ size = 60, className = '', color = '#FFD166' }: { size?: number; className?: string; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id={`star-grad-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: color, stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#FFF59D', stopOpacity: 1 }} />
        </linearGradient>
        <filter id={`star-shadow-${size}`}>
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
          <feOffset dx="0" dy="4" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.3" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        d="M50 10 L60 40 L90 40 L65 60 L75 90 L50 70 L25 90 L35 60 L10 40 L40 40 Z"
        fill={`url(#star-grad-${size})`}
        filter={`url(#star-shadow-${size})`}
      />
      <ellipse
        cx="40"
        cy="30"
        rx="8"
        ry="12"
        fill="rgba(255,255,255,0.5)"
      />
    </svg>
  );
}

export function Flower({ size = 60, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      <defs>
        <radialGradient id={`flower-grad-${size}`}>
          <stop offset="0%" style={{ stopColor: '#A8E6CF', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#7BC8A4', stopOpacity: 1 }} />
        </radialGradient>
        <filter id={`flower-shadow-${size}`}>
          <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
          <feOffset dx="0" dy="3" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.25" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Petals */}
      {[0, 72, 144, 216, 288].map((angle, i) => (
        <ellipse
          key={i}
          cx="50"
          cy="50"
          rx="20"
          ry="35"
          fill={`url(#flower-grad-${size})`}
          transform={`rotate(${angle} 50 50) translate(0 -15)`}
          filter={`url(#flower-shadow-${size})`}
        />
      ))}
      {/* Center */}
      <circle cx="50" cy="50" r="12" fill="#FFF" opacity="0.9" />
      <circle cx="50" cy="50" r="8" fill="#FFD166" />
    </svg>
  );
}

export function Goldfish({ size = 80, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size * 0.75} viewBox="0 0 100 75" className={className}>
      <defs>
        <linearGradient id={`fish-grad-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#FFB347', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#FF8C42', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#FF6347', stopOpacity: 1 }} />
        </linearGradient>
        <filter id={`fish-shadow-${size}`}>
          <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
          <feOffset dx="0" dy="3" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.3" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Body */}
      <ellipse
        cx="50"
        cy="37"
        rx="30"
        ry="25"
        fill={`url(#fish-grad-${size})`}
        filter={`url(#fish-shadow-${size})`}
      />
      {/* Tail */}
      <path
        d="M 20 37 Q 5 20, 10 10 Q 8 30, 15 37 Q 8 44, 10 65 Q 5 55, 20 37 Z"
        fill={`url(#fish-grad-${size})`}
        opacity="0.9"
        filter={`url(#fish-shadow-${size})`}
      />
      {/* Top fin */}
      <path
        d="M 45 12 Q 50 5, 55 12 L 50 25 Z"
        fill={`url(#fish-grad-${size})`}
        opacity="0.85"
      />
      {/* Eye */}
      <circle cx="65" cy="30" r="6" fill="#2C3E50" />
      <circle cx="67" cy="28" r="2" fill="white" />
    </svg>
  );
}

export function GrassStrands({ className = '' }: { className?: string }) {
  return (
    null
  );
}

// Animated wrapper components
export function FloatingBubble({
  size = 60,
  delay = 0,
  duration = 4,
  className = '',
}: {
  size?: number;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -20, 0],
        scale: [1, 1.1, 1],
        opacity: [0.6, 0.9, 0.6],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <Bubble size={size} />
    </motion.div>
  );
}

export function TwinklingStar({
  size = 40,
  delay = 0,
  className = '',
}: {
  size?: number;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -20, 0],
        rotate: [0, 15, -15, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <img
        src={starrSticker}
        alt="Star"
        style={{ width: size * 1.3, height: size * 1.3, objectFit: 'contain' }}
      />
    </motion.div>
  );
}

export function SwimmingFish({
  size = 80,
  delay = 0,
  className = '',
}: {
  size?: number;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      animate={{
        x: [0, 10, 0],
        y: [0, -5, 0],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <img
        src={goldfishSticker}
        alt="Goldfish"
        style={{ width: size * 1.3, height: 'auto', objectFit: 'contain' }}
      />
    </motion.div>
  );
}

export function SpinningFlower({
  size = 50,
  delay = 0,
  className = '',
}: {
  size?: number;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      animate={{
        rotate: [0, 360],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      <Flower size={size} />
    </motion.div>
  );
}