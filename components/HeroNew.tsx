"use client";
import React from 'react';
import { motion} from "framer-motion";
import Image from 'next/image'
import "./css/text.css"
import LinkButton from './linkButton';


const HeroNew = () => {
  {/*
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const videoRef = useRef(null);

  // Event-Handler für Videoende
  const handleVideoEnd = () => {
    setIsVideoEnded(true);
  };
  */}
  return (
    <div
      id="home"
      className='w-full min-h-[85vh] 2xl:min-h-[95vh] overflow-hidden hidden md:block'>
      <div className='absolute w-full min-h-[85vh] 2xl:min-h-[95vh] flex justify-center items-center bg-main-900'>
      <Image 
      src="/BG-Bild.jpg" 
      alt="" 
      quality={100} 
      loading="eager" 
      priority={true}
      fill
      className="object-cover w-full h-full brightness-75 [@media(min-width:2000px)]:blur-sm" 
      />
      
      {/* Video-Overlay 
      <AnimatePresence mode="wait">
      {!isVideoEnded && (
      <motion.video
      initial={{ opacity: 1 }}
      animate={{ opacity: 1}}
      exit={{opacity: 0 }}
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop={false}
        onEnded={handleVideoEnd}
      >
        <source src="/BG-Video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>
      )}
      </AnimatePresence>
      */}
        </div>
      <div className="flex flex-col items-center justify-start text-center h-full max-w-7xl mx-auto bg-ecs pr-80 lg:pr-[400px] pt-[45vh]">

        <div className="flex flex-col justify-end items-center gap-5 z-10">
        <motion.div initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.4, duration: 1, ease: [0, 0.71, 0.2, 1.01] }} 
        className="info text-stone-200/80  font-inter">Forme, was dich ausmacht
        </motion.div>

        <motion.div initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2, duration: 1, ease: [0, 0.71, 0.2, 1.01] }} 
        className="title font-bebas-neue text-white flex flex-col leading-[0.9]">
          <div>Kraft &</div>
          <div className='ml-20'>Kontur</div>
          </motion.div>

        </div>

        <motion.div
        className="items-center z-20 ml-64 mt-5"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 0.6,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        >
        <LinkButton href={'/#termin'} text={'Starten'} />
        </motion.div>

      </div>

    </div>
    );
  };

export default HeroNew