"use client";

import { motion } from "framer-motion";

interface IFadeInRight {
  children: React.ReactNode;
  delay?: number;
}

const FadeInRight = ({ children, delay = 0 }: IFadeInRight) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default FadeInRight;
