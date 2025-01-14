import React from 'react'
import Probetraining from './Probetraining'
import Contact from './Contact'
import ContactForm from './ui/contactform'
import { motion } from 'framer-motion'

const GeneralContact = () => {
  return (
    <div  className='flex flex-row items-start justify-center lg:justify-between mt-20 md:mt-32 max-w-7xl mx-auto px-5 mb-32 lg:mb-52'>
        
        <div className='flex flex-col'>
            <Probetraining />
            <div className='w-full flex justify-center mt-10 h-fit lg:hidden'>
            <ContactForm />
            </div>
            <Contact />

        </div>
        <motion.div initial={{ scale: 0.7, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 1, ease: [0, 0.71, 0.2, 1.01] }} viewport={{ once: true, amount: 0.2 }}
        className='w-fit h-fit hidden lg:block sticky top-[25vh] '>
        <ContactForm />
        </motion.div>
        </div>
  )
}

export default GeneralContact