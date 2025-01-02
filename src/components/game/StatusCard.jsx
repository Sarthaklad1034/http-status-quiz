import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';

const StatusCard = ({ statusCode, description, isRevealed }) => {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-2xl mx-auto"
    >
      <Card className="p-8 md:p-12 bg-gradient-to-br from-background via-secondary/5 to-secondary/10 backdrop-blur-sm border-2 hover:border-primary/20 transition-all duration-300">
        <div className="text-center space-y-6">
          <motion.h2 
            className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
          >
            {statusCode}
          </motion.h2>
          {isRevealed && (
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-lg md:text-xl text-foreground/80"
            >
              {description}
            </motion.p>
          )}
        </div>
      </Card>
    </motion.div>
  );
};

export default StatusCard;