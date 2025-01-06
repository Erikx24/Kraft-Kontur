"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { BiMailSend, BiMapPin, BiPhone } from 'react-icons/bi'
import "./css/text.css"

const Contact = () => {

    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5, // Dauer der Animation
            staggerChildren: 0.1, // Verzögert die Animation von Kinderelementen
          },
        },
      }
    
      const item = {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 },
        },
      }

  return (
    <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ 
      once: false, 
      amount: 0.2 // Trigger when 20% of the component is visible
    }}
    variants={variants}
    id='contact'
    className='flex flex-col items-center lg:items-start gap-20 w-full z-10 md:pt-32 mt-20'>

      <motion.div initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.8, duration: 1, ease: [0, 0.71, 0.2, 1.01] }} 
       className="font-bebas-neue text-white flex flex-col items-end leading-[0.9]">
          <div className='subtitle'>Kontakt</div>
         </motion.div>

      <motion.div
        className='flex flex-col space-y-12 items-start'
        variants={item}
      >

        <motion.span
          className='font-inter text-justify lg:text-left regular-text max-w-[500px]'
          variants={item}
        >
         <div className='flex flex-row justify-start items-start gap-10'>

            <a href="tel:+491602377404" className='rounded-md p-1 h-fit bg-gradient-to-tr from-main-800/60 to-main-400/60 text-main-50 border border-main-100/60'>
             <BiPhone className='text-2xl'/>
            </a>

            <div className='flex flex-col gap-4'>
            <div className='text-white info'>Telefon</div>
            <div className='text-white regular-text opacity-70'>Es soll schnell gehen? Erreiche mich zwischen 8-22 unter folgenden Nummer.</div>
            <a href="tel:+491602377404" className='text-white underline underline-offset-4 caption'>+49 160 2377404</a>


            </div>
         </div>

        </motion.span>

        <motion.span
          className='font-inter text-justify lg:text-left regular-text max-w-[500px]'
          variants={item}
        >
         <div className='flex flex-row justify-start items-start gap-10'>

            <a href='mailto:ben@kraftundkontur.de' className='rounded-md p-1 h-fit bg-gradient-to-tr from-main-800/60 to-main-400/60 text-main-50 border border-main-100/60'>
             <BiMailSend className='text-2xl'/>
            </a>

            <div className='flex flex-col gap-4'>
            <div className='text-white info'>Mail</div>
            <div className='text-white regular-text opacity-70'>Gerne kannst du mich auch 24/7 unter meiner Mail erreichen.</div>
            <a href='mailto:ben@kraft-kontur.de' className='text-white underline underline-offset-4 caption'>ben@kraft-kontur.de</a>


            </div>
         </div>

        </motion.span>

        <motion.span
          className='font-inter text-justify lg:text-left regular-text max-w-[500px]'
          variants={item}
        >
         <div className='flex flex-row justify-start items-start gap-10'>

            <a href='https://maps.app.goo.gl/D8YFMEd6ZoQwVTMF6' className='rounded-md p-1 h-fit bg-gradient-to-tr from-main-800/60 to-main-400/60 text-main-50 border border-main-100/60'>
             <BiMapPin className='text-2xl'/>
            </a>

            <div className='flex flex-col gap-4'>
            <div className='text-white info'>Standort</div>
            <div className='text-white regular-text opacity-70'>Lieber persönlich? Du findest mich im Colosseum Fitness in Frankfurt-Höchst.</div>
            <a href='https://maps.app.goo.gl/D8YFMEd6ZoQwVTMF6' target="_blank" rel="noopener noreferrer" className='text-white underline underline-offset-4 caption'>Silostraße 19, 65929 Frankfurt am Main</a>


            </div>
         </div>

        </motion.span>

      </motion.div>

    </motion.div>


  )
}

export default Contact