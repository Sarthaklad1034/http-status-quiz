import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { Card } from '@/components/ui/Card';

const LivesIndicator = ({ lives }) => {
  return (
    <Card className="bg-secondary/10 p-3">
      <div className="flex items-center gap-2">
        <div className="flex gap-1">
          {[...Array(3)].map((_, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8 }}
              animate={{ 
                scale: index < lives ? 1 : 0.8,
                opacity: index < lives ? 1 : 0.3
              }}
              transition={{ duration: 0.2 }}
            >
              <Heart
                className={`w-5 h-5 ${
                  index < lives ? 'text-error fill-error' : 'text-foreground/30'
                }`}
              />
            </motion.div>
          ))}
        </div>
        <span className="text-sm text-foreground/70">Lives</span>
      </div>
    </Card>
  );
};

export default LivesIndicator;