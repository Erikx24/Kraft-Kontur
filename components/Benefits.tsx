import { motion } from 'framer-motion'
import React, { useState } from 'react'
import Image from 'next/image'
import Benefit from './ui/Benefit';

const Benefits = () => {

      
    return (
        <div id='vorteile' className=' w-full h-full flex-col justify-between items-start md:pt-32 max-w-7xl mx-auto px-5 gap-16 mb-32 hidden lg:flex overflow-hidden'>

            <motion.div initial={{ scale: 0.7, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ delay: 0.4, duration: 1, ease: [0, 0.71, 0.2, 1.01] }} viewport={{ once: true, amount: 1 }}
                className="font-bebas-neue text-white flex flex-col items-end leading-[0.9]">
                <div className='subtitle'>Das bringe</div>
                <div className='tracking-wide font-normal subtitle translate-x-24'>ich mit</div>
            </motion.div>

            <div className='flex flex-col justify-center items-center font-inter w-full gap-20 ml-[5%]'>

                <motion.div initial={{ opacity: 0, y: 50, x: 0 }} whileInView={{ opacity: 1, y: 0, x: 0 }} transition={{ delay: 0.3, duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
                    viewport={{
                        once: false,
                        amount: 0.5 // Trigger when 100% of the component is visible
                    }}
                    className='w-full flex justify-center'>
                    <Benefit iconSrc='icons/Ziel.svg' title='Effiziente Zielerreichung' description='Schnellere Ergebnisse dank gezielter und effektiver Methoden.' />
                </motion.div>

                <div className='flex flex-row w-full items-center justify-between'>

                    <motion.div initial={{ opacity: 0, y: 10, x: 50 }} whileInView={{ opacity: 1, y: 0, x: 0 }} transition={{ delay: 0.2, duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
                        viewport={{
                            once: false,
                            amount: 0.5 // Trigger when 100% of the component is visible
                        }}
                        className='w-full flex justify-center'>
                        <Benefit iconSrc='icons/1-1.svg' title='Individuelles 1:1-Training' description='Maßgeschneidertes Training für deine persönlichen Ziele und deinen Körper.' />
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 10, x: -50 }} whileInView={{ opacity: 1, y: 0, x: 0 }} transition={{ delay: 0.5, duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
                        viewport={{
                            once: false,
                            amount: 0.5 // Trigger when 100% of the component is visible
                        }}
                        className='w-full flex justify-center'>
                        <Benefit iconSrc='icons/motivation.svg' title='Motivation und Unterstützung' description='Gemeinsam dranbleiben und über dich hinauswachsen.' />
                    </motion.div>

                </div>

                <div className='flex flex-row w-full justify-between gap-20'>

                    <motion.div initial={{ opacity: 0, y: -20, x: 50 }} whileInView={{ opacity: 1, y: 0, x: 0 }} transition={{ delay: 0.1, duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
                        viewport={{
                            once: false,
                            amount: 0.5 // Trigger when 100% of the component is visible
                        }}
                        className='w-full flex justify-center'>
                        <Benefit iconSrc='icons/food.svg' title='Ernährungsberatung' description='Optimale Ernährung, abgestimmt auf deinen Lebensstil und Ziele.' />
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: -20, x: -50 }} whileInView={{ opacity: 1, y: 0, x: 0 }} transition={{ delay: 0.6, duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
                        viewport={{
                            once: false,
                            amount: 0.5 // Trigger when 100% of the component is visible
                        }}
                        className='w-full flex justify-center'>
                        <Benefit iconSrc='icons/brain.svg' title='Wissen und Expertise' description='Profitiere von Erfahrung und neuesten Trainingsmethoden.' />
                    </motion.div>

                </div>

            </div>
        </div>
    )
}

export default Benefits
