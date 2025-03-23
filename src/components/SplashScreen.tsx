
import React, { useEffect, useState } from 'react';
import { Progress } from '@/components/ui/progress';
import { MapPin, Users, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

interface SplashScreenProps {
  onComplete: () => void;
  duration?: number;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ 
  onComplete, 
  duration = 3000 
}) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prevProgress => {
        const newProgress = prevProgress + 2;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, duration / 50);
    
    // Complete splash screen after duration
    const timer = setTimeout(() => {
      clearInterval(interval);
      setProgress(100);
      setTimeout(onComplete, 500); // Add small delay after reaching 100%
    }, duration);
    
    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [duration, onComplete]);
  
  return (
    <motion.div 
      className="fixed inset-0 bg-gradient-to-br from-soccer-green/20 to-soccer-blue/20 flex flex-col items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="flex flex-col items-center max-w-md px-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 bg-soccer-green rounded-full flex items-center justify-center shadow-lg">
            <MapPin size={24} className="text-white" />
          </div>
          <h1 className="text-3xl font-bold">
            Effortless<span className="text-soccer-green">Soccer</span>
          </h1>
        </div>

        <motion.div 
          className="flex justify-between w-full mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-soccer-blue/20 flex items-center justify-center mb-2">
              <MapPin className="h-5 w-5 text-soccer-blue" />
            </div>
            <span className="text-sm font-medium">Find Games</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-soccer-green/20 flex items-center justify-center mb-2">
              <Users className="h-5 w-5 text-soccer-green" />
            </div>
            <span className="text-sm font-medium">Join Teams</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-soccer-orange/20 flex items-center justify-center mb-2">
              <Calendar className="h-5 w-5 text-soccer-orange" />
            </div>
            <span className="text-sm font-medium">Play Soccer</span>
          </div>
        </motion.div>

        <motion.div 
          className="w-full space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Progress value={progress} className="h-2 w-full bg-gray-200" />
          <p className="text-sm text-right text-gray-500">
            {progress === 100 ? 'Ready!' : 'Loading...'}
          </p>
        </motion.div>
        
        <motion.p 
          className="mt-8 text-center text-sm text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: progress > 50 ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          Connecting you to local soccer games near you
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;
