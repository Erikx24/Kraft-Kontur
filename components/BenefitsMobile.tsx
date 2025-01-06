import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'
import "./css/text.css"

import {
    Accordion,
    AccordionHeader,
    AccordionBody
  } from "@material-tailwind/react";
import { BiChevronDown } from 'react-icons/bi';

const BenefitsMobile = () => {
    const [open, setOpen] = React.useState(0);
    
    const handleOpen = (value: number) => setOpen(open === value ? 0 : value);
    
    
    return (
        <div id='vorteile' className='flex h-full flex-col items-center max-w-7xl mx-auto px-5 gap-16 mb-20 lg:hidden overflow-hidden'>

            <motion.div initial={{ scale: 0.7, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ delay: 0.4, duration: 1, ease: [0, 0.71, 0.2, 1.01] }} viewport={{ once: true, amount: 1 }}
                className="font-bebas-neue text-white flex flex-col items-end leading-[0.9]">
                <div className='subtitle'>Das bringe</div>
                <div className='tracking-wide  font-normal text-6xl'>ich mit</div>
            </motion.div>

            <div className='flex flex-col justify-start items-center font-inter w-full max-w-2xl'>
            <Accordion open={open === 2} icon={<BiChevronDown />} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <AccordionHeader onClick={() => handleOpen(2)} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <div className='w-full flex flex-row items-center gap-4 sm:gap-5 sm:px-5 text-base sm:text-lg'>
            <Image src='icons/1-1.svg' width={30} height={30} quality={80} alt={'Individuelles 1:1-Training'} className='shadow-2xl shadow-black'/>Persönliche Betreuung
            </div>
            </AccordionHeader>
        <AccordionBody>
        <div className='w-full px-5 opacity-70 regular-text'>
        Maßgeschneidertes Training für deine persönlichen Ziele und deinen Körper.
        </div>
        </AccordionBody>
      </Accordion>
            
      
      <Accordion open={open === 3}  icon={<BiChevronDown />} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <AccordionHeader onClick={() => handleOpen(3)} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <div className='w-full flex flex-row items-center gap-4 sm:gap-5 sm:px-5 text-base sm:text-lg text-start'>
            <Image src='icons/food.svg' width={30} height={30} quality={80} alt={'Ernährungsberatung'} className='shadow-2xl shadow-black'/>Zielgerechte Ernährungsberatung 
            </div>
            </AccordionHeader>
        <AccordionBody>
            <div className='w-full px-5 opacity-70 regular-text'>
        Optimale Ernährung, abgestimmt auf deinen Lebensstil und Ziele.
        </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 1}  icon={<BiChevronDown />}  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <AccordionHeader onClick={() => handleOpen(1)} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <div className='w-full flex flex-row items-center gap-4 sm:gap-5 sm:px-5 text-base sm:text-lg'>
            <Image src='icons/Ziel.svg' width={30} height={30} quality={80} alt={'Effiziente Zielerreichung'} className='shadow-2xl shadow-black'/>Zielgerichtete Beratung
            </div>
            </AccordionHeader>
        <AccordionBody>
        <div className='w-full px-5 opacity-70 regular-text'>
        Schnellere Ergebnisse dank gezielter und effektiver Methoden.
        </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4}  icon={<BiChevronDown />} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <AccordionHeader onClick={() => handleOpen(4)} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <div className='w-full flex flex-row items-center gap-4 sm:gap-5 sm:px-5 text-base sm:text-lg text-start'>
            <Image src='icons/brain.svg' width={30} height={30} quality={80} alt={'Wissen und Expertise'} className='shadow-2xl shadow-black'/>Ausgebildetes & aktuelles Fachwissen
            </div>
            </AccordionHeader>
        <AccordionBody>
        <div className='w-full px-5 opacity-70 regular-text'>
        Profitiere von Erfahrung und neuesten Trainingsmethoden.
        </div>
        </AccordionBody>
      </Accordion>


            </div>
        </div>
    )
}

export default BenefitsMobile