import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { Card } from '@/components/ui/Card';

const ScoreBoard = ({ score }) => {
  return (
    <Card className="bg-secondary/10 hover:bg-secondary/20 transition-colors p-4 rounded-xl">
      <motion.div 
        className="flex items-center gap-3"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
      >
        <Trophy className="w-6 h-6 text-yellow-500" />
        <div className="flex flex-col">
          <span className="text-sm text-foreground/70">Score</span>
          <motion.span 
  key={score}
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  className="font-bold text-lg flex justify-center items-center"
>
  {score}
</motion.span>

        </div>
      </motion.div>
    </Card>
  );
};
export default ScoreBoard;