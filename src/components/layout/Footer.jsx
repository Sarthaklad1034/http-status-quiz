import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      className="border-t bg-background/30 backdrop-blur rounded-b-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="px-6 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-center">
          <motion.p 
            className="text-sm text-foreground/70"
            whileHover={{ scale: 1.01 }}
          >
            Test your knowledge of HTTP status codes
          </motion.p>
          
          <motion.p 
            className="text-sm text-foreground/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            © {new Date().getFullYear()} HTTP Status Quiz. All rights reserved.
          </motion.p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;