"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import "./css/text.css"

const About = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5, // Dauer der Animation
        staggerChildren: 0.1, // Verzögert die Animation von Kinderelementen
        ease: [0, 0.71, 0.2, 1.01]
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
    <div id='about' className='flex flex-col-reverse lg:flex-row justify-center lg:justify-between gap-10 items-center lg:items-end md:pt-32 max-w-7xl mx-auto px-5 '>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ 
          once: false, 
          amount: 0.2 // Trigger when 20% of the component is visible
        }}
        variants={variants}
        className='flex flex-col items-center lg:items-start gap-8 w-full max-w-3xl lg:w-[45%] z-10'
      >
        <motion.div initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.8, duration: 1, ease: [0, 0.71, 0.2, 1.01] }} 
         className="subtitle font-bebas-neue text-white flex flex-col leading-[0.9]">
           <div className='tracking-wide font-normal text-[25px] md:text-[30px]'>Coach</div>
           <div className='subtitle'>Ben</div>
           </motion.div>

        <motion.div
          className='flex flex-col space-y-2 items-center lg:items-start'
          variants={item}
        >

          <motion.span
            className='font-inter text-justify lg:text-left regular-text max-w-[500px]'
            variants={item}
          >
            Mein Name ist Ben und ich bin zertifizierter Personal Trainer mit über 16 Jahren Trainingserfahrung und 8 Jahren in der Fitnessbranche. 
            Meine Leidenschaft ist es, Menschen dabei zu helfen, ihre Gesundheits- und Fitnessziele zu erreichen und ein erfüllteres Leben zu führen. 
            Mit einer individuellen und ganzheitlichen Herangehensweise unterstütze ich Dich dabei, Deine körperliche Leistungsfähigkeit zu steigern und Dein Wohlbefinden zu verbessern.
            <br />
            <br />
            <h3 className='info'>Meine Philosophie</h3>
            Jeder braucht einen Trainer! Selbst die Besten der Welt, wie Michael Jordan, hatten Trainer, die ihnen halfen, ihre Ziele zu erreichen und ihr volles Potenzial auszuschöpfen. 
            Ein Trainer bietet nicht nur Anleitung und Fachwissen, sondern auch die notwendige Motivation und Unterstützung, um kontinuierlich Fortschritte zu machen. 
            <br />
            <br />
            Ob Du Anfänger bist und erst einmal die Grundlagen lernen möchtest, oder ein erfahrener Athlet, der seine Leistung maximieren will – ein Trainer kann den entscheidenden Unterschied machen.
          </motion.span>

        </motion.div>

      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={item}
      >
        <Image
          src={'/Ben2.png'}
          alt={'Über mich Bild'}
          width={400}
          height={200}
          className='[mask-image:linear-gradient(to_bottom,white_70%,transparent)] translate-y-40 md:translate-y-0 z-0'
          quality={40}
        />
      </motion.div>

    </div>
  )
}

export default About
