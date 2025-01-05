"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';

const Background = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsLoaded(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <motion.div
    className='absolute inset-0 z-0 translate-y-[100px]'
    initial="hidden"
    animate={isLoaded ? "visible" : "hidden"}
    variants={variants}
    transition={{ duration: 0.5 }}
  >
          {isLoaded &&
            <><Image src="/Vector.svg" alt="Background" fill className='w-full opacity-40 xl:hidden pointer-events-none' />
            <Image src="/Vector2.svg" alt="Background" fill className='w-full opacity-40 hidden xl:block pointer-events-none' /></>
          }
        </motion.div>


  
    
  );
}

export default Background