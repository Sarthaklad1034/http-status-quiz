import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const AchievementPopup = ({ message, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: -20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: -20 }}
      className="fixed inset-0 flex items-center justify-center z-50"
    >
      <Card className="w-full sm:w-96 p-6 bg-background/95 backdrop-blur shadow-xl">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold whitespace-pre-line">{message}</h3>
          <Button 
            onClick={onClose}
            className="mt-4"
          >
            Continue
          </Button>
        </div>
      </Card>
      <div 
        className="fixed inset-0 bg-black/50 -z-10"
        onClick={onClose}
      />
    </motion.div>
  );
};

export default AchievementPopup;
