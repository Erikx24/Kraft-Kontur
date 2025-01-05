"use client";
import React from 'react';
import { motion} from "framer-motion";
import Image from 'next/image'
import LinkButton from './linkButton';


const HeroMobile = () => {
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
      className='w-full min-h-screen overflow-hidden md:hidden static'
      >
        <div className='absolute w-full h-screen flex justify-center items-center bg-main-900'>
        <Image 
        src="/BG-Bild(Mobile).png" 
        alt="" 
        quality={70} 
        loading="eager" 
        fill
        className="object-cover w-full h-full brightness-75"  
        priority={true}
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
          playsInline
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



        



          <div className="flex flex-col items-center justify-start text-center h-full max-w-7xl mx-auto bg-ecs pt-[25vh]">

<div className="flex flex-col justify-end items-center gap-5 z-10">
<motion.div initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 1, duration: 1, ease: [0, 0.71, 0.2, 1.01] }} 
className="info text-stone-200/80 font-inter">Forme, was dich ausmacht
</motion.div>

<motion.div initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.8, duration: 1, ease: [0, 0.71, 0.2, 1.01] }} 
className="title font-bebas-neue text-white flex flex-col leading-[0.9]">
  <div className='mr-20'>Kraft &</div>
  <div className='ml-20'>Kontur</div>
  </motion.div>

</div>

<motion.div
className="items-center z-20 mt-5  ml-48 sm:ml-64 shadow-xl transform transition-shadow rounded-2xl shadow-main-300/35 hover:shadow-main-300/50"
initial={{ opacity: 0, scale: 0.5 }}
animate={{ opacity: 1, scale: 1 }}
transition={{
  duration: 1,
  delay: 1.3,
  ease: [0, 0.71, 0.2, 1.01]
}}
>
<LinkButton href={'/#termin'} text={'Starten'} />
</motion.div>

</div>

        


    </div>
    );
  };

export default HeroMobile