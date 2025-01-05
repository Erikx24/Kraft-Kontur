import { motion } from 'framer-motion'
import React from 'react'
import Benefit from './ui/Benefit';

const BenefitsMobile = () => {

      
    return (
        <div id='vorteile' className='flex sm:w-[57%] md:w-[50%]  h-full flex-col items-center max-w-7xl mx-auto px-5 gap-16 mb-20 lg:hidden overflow-hidden'>

            <motion.div initial={{ scale: 0.7, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ delay: 0.4, duration: 1, ease: [0, 0.71, 0.2, 1.01] }} viewport={{ once: true, amount: 1 }}
                className="font-bebas-neue text-white flex flex-col items-end leading-[0.9]">
                <div className='subtitle'>Das bringe</div>
                <div className='tracking-wide font-normal text-6xl'>ich mit</div>
            </motion.div>

            <div className='flex flex-col justify-start items-center font-inter w-full sm:gap-2 md:ml-[10%]'>

                <motion.div initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
                    viewport={{
                        once: false,
                        amount: 0.5 // Trigger when 100% of the component is visible
                    }}
                    className='w-full flex justify-start'>
                    <Benefit iconSrc='icons/Ziel.svg' title='Effiziente Zielerreichung' description='Schnellere Ergebnisse dank gezielter und effektiver Methoden.' />
                </motion.div>


                    <motion.div initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
                        viewport={{
                            once: false,
                            amount: 0.5 // Trigger when 100% of the component is visible
                        }}
                        className='w-full flex justify-start'>
                        <Benefit iconSrc='icons/1-1.svg' title='Individuelles 1:1-Training' description='Maßgeschneidertes Training für deine persönlichen Ziele und deinen Körper.' />
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
                        viewport={{
                            once: false,
                            amount: 0.5 // Trigger when 100% of the component is visible
                        }}
                        className='w-full flex justify-start'>
                        <Benefit iconSrc='icons/motivation.svg' title='Motivation und Unterstützung' description='Gemeinsam dranbleiben und über dich hinauswachsen.' />
                    </motion.div>



                    <motion.div initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
                        viewport={{
                            once: false,
                            amount: 0.5 // Trigger when 100% of the component is visible
                        }}
                        className='w-full flex justify-start'>
                        <Benefit iconSrc='icons/food.svg' title='Ernährungsberatung' description='Optimale Ernährung, abgestimmt auf deinen Lebensstil und Ziele.' />
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
                        viewport={{
                            once: false,
                            amount: 0.5 // Trigger when 100% of the component is visible
                        }}
                        className='w-full flex justify-start'>
                        <Benefit iconSrc='icons/brain.svg' title='Wissen und Expertise' description='Profitiere von Erfahrung und neuesten Trainingsmethoden.' />
                    </motion.div>


            </div>
        </div>
    )
}

export default BenefitsMobile