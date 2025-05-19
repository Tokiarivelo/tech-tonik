'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

type EmotionCardProps = {
  emotion: string;
  color: string;
  icon: React.ReactNode;
  href?: string;
};

export default function EmotionCard({ emotion, color, icon, href }: EmotionCardProps) {
  return (
    <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.95 }} className="flex-1 min-w-[280px]">
      <Link
        href={href || '#'}
        className={`block p-8 rounded-xl bg-gradient-to-br from-${color}-50 to-${color}-100 text-center shadow-lg hover:shadow-xl transition-shadow`}
      >
        <div className="text-4xl mb-4 flex justify-center">
          <span className={`text-${color}-500`}>{icon}</span>
        </div>
        <h3
          className={`text-2xl font-bold bg-gradient-to-r from-${color}-600 to-${color}-800 bg-clip-text text-transparent`}
        >
          {emotion}
        </h3>
      </Link>
    </motion.div>
  );
}
