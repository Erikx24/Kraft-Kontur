"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import ContactForm from './ui/contactform'
import "./css/text.css"

const Probetraining = () => {
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
    <motion.div initial="hidden"
    whileInView="visible"
    viewport={{ 
      once: false, 
      amount: 0.2 // Trigger when 20% of the component is visible
    }}
    variants={variants}
    id='termin'
    className='flex flex-col justify-center lg:justify-between gap-8 w-full max-w-lg items-center lg:items-start'>

        <motion.div initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.8, duration: 1, ease: [0, 0.71, 0.2, 1.01] }} 
         className="font-bebas-neue text-white flex flex-col items-end leading-[0.9]">
            <div className='subtitle'>Probetraining</div>
           <div className='tracking-wide font-normal text-[25px] md:text-[30px]'>Buchen</div>
           
           </motion.div>

        <motion.div
          className='flex flex-col space-y-2 items-center lg:items-start'
          variants={item}
        >

          <motion.span
            className='font-inter text-justify lg:text-left regular-text max-w-[1000px]'
            variants={item}
          >
           Starte jetzt deine Reise zu mehr Fitness, Gesundheit und Wohlbefinden!
            Buche dein unverbindliches Probetraining und erlebe, wie individuelles Coaching dir hilft, deine Ziele schneller zu erreichen.
            Gemeinsam erstellen wir einen Plan, der perfekt zu deinen Bedürfnissen passt – egal, ob du fitter werden, Schmerzen lindern oder deine Mobilität verbessern möchtest. 
            <br />
            Jetzt Termin sichern und loslegen!

          </motion.span>

        </motion.div>

      </motion.div>


  )
}

export default Probetraining
