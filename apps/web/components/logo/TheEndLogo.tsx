import { motion, AnimatePresence } from 'framer-motion';
import { DoorSVG, TextSVG, TFinalSVG } from './Elements';

function LogoAnimation() {
  return (
    <motion.svg width="1920" height="1080" viewBox="0 0 1920 1080">
      {/* Portes */}
      <motion.g
        initial={{ rotate: -45, x: -200 }}
        animate={{ rotate: 0, x: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{ originX: '100%', originY: '0%' }}
      >
        <DoorSVG side="left" color1="#394A56" />
      </motion.g>

      <motion.g
        initial={{ rotate: 45, x: 200 }}
        animate={{ rotate: 0, x: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{ originX: '0%', originY: '0%' }}
      >
        <DoorSVG side="right" color2="#22303F" />
      </motion.g>

      {/* Texte */}
      <AnimatePresence>
        <motion.g
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.0, duration: 1.0, ease: 'easeOut' }}
        >
          <TextSVG text="THE END PAGE" color="#2C6485" />
        </motion.g>
      </AnimatePresence>

      {/* Morph en T */}
      <motion.g
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 3.5, duration: 1.0, ease: 'easeOut' }}
      >
        <TFinalSVG color="#2C6485" />
      </motion.g>

      {/* Disparition finale */}
      <motion.g animate={{ opacity: 0 }} transition={{ delay: 5.0, duration: 1.0 }}>
        {/* regroupe ici tout ce qui doit disparaître */}
      </motion.g>
    </motion.svg>
  );
}
export default LogoAnimation;
