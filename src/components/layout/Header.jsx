import React from 'react';
import { motion } from 'framer-motion';
import ScoreBoard from '@/components/game/ScoreBoard';
import LivesIndicator from '@/components/game/LivesIndicator';

const Header = ({ score, lives }) => {
  return (
    <motion.header 
      className="border-b bg-background/30 backdrop-blur rounded-t-xl"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.h1 
            className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            HTTP Status Quiz
          </motion.h1>
          
          <div className="flex items-center gap-4 sm:gap-6"> {/* Adjusted gap for mobile */}
            <ScoreBoard score={score} />
            <LivesIndicator lives={lives} />
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
