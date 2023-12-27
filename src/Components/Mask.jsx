import styles from '../mask.module.scss';
import { useState } from 'react';
import { motion } from 'framer-motion';
import useMousePosition from './useMousePosition';

const Mask = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <main className={styles.main}>
      <motion.div
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
      >
        <p
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          I'm a passionate learner weaving together React JS, AWS, Flutter, and Figma to continually evolve and create meaningful digital experiences.
        </p>
      </motion.div>

      <div className={styles.body}>
        <p>
        I'm a <span>versatile and proficient</span> software engineer dedicated to crafting robust and innovative solutions for complex technical challenges.
        </p>
      </div>
    </main>
  );
};

export default Mask;
