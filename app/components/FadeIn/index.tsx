"use client";

import { motion } from "framer-motion";

interface IFadeIn {
  children: React.ReactNode;
  delay?: number;
}

const FadeIn = ({ children, delay = 0 }: IFadeIn) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default FadeIn;
