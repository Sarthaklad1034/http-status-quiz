import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const OptionsGrid = ({ options, onSelect, disabled }) => {
  return (
    <motion.div 
      className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto px-4"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {options.map((option) => (
        <motion.div key={option.text} variants={item}>
          <Button
            variant={disabled ? "ghost" : "default"}
            className="w-full h-24 text-lg font-medium rounded-xl hover:scale-105 transition-transform duration-200 bg-gradient-to-br from-secondary/10 to-background hover:from-primary/20 hover:to-primary/5"
            onClick={() => onSelect(option)}
            disabled={disabled}
          >
            {option.text}
          </Button>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default OptionsGrid;