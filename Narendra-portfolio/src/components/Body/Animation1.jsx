import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import "./animation1.css"
const Animation1 = ({ text, onComplete }) => {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, letters.length * 200 + 1000); // Adjust timing as needed

    return () => clearTimeout(timer);
  }, [letters.length, onComplete]);

  return (
    // <motion.div
    //   style={{ display: 'flex', overflow: 'hidden' }}
    //   variants={container}
    //   initial="hidden"
    //   animate="visible"
    // >
    //   {letters.map((letter, index) => (
    //     <motion.span
    //       key={index}
    //       variants={child}
    //       style={{ display: 'inline-block', marginRight: '0.05em' }}
    //     >
    //       {letter === ' ' ? '\u00A0' : letter}
    //     </motion.span>
    //   ))}
    // </motion.div>
    <motion.div className="text">
    {text.split("").map((letter, index) => (
      <motion.span
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1, delay: index * 0.1 }}
      >
        {letter}
      </motion.span>
    ))}
  </motion.div>
  );
};

export default Animation1;
