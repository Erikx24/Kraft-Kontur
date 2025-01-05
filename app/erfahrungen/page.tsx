"use client";
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import "@/components/css/text.css"
import { BsQuote } from 'react-icons/bs'
import Image from 'next/image'
import LinkButton from '@/components/linkButton'
import { BiArrowBack } from 'react-icons/bi'
import { motion } from 'framer-motion'
import { REVIEWS } from '@/data/reviews'



const page = () => {
  return (
    <div id='erfahrungen'
    className='flex flex-col justify-between w-full bg-gradient-to-tl from-main-900 to-main-800 text-ecs-richBlack min-h-screen overflow-hidden'>
      <Navbar />

      <div className='max-w-7xl flex flex-col items-center gap-10 py-10 px-5 mx-auto overflow-hidden mb-32 mt-20 '>

      <div className='flex flex-col items-start gap-5'>  
      <LinkButton text='zurück' icon={<BiArrowBack/>} href='/#bewertungen' variant='tertiary'/>
      <div className='flex flex-col items-start'>
      <h2 className='subtitle leading-tight'>Erfahrungen</h2>
      <p className='regular-text font-inter opacity-80'>Hier findest du echte Erfahrungen und Bewertungen von Menschen, die mit meinem Training ihre Ziele erreicht haben. Vom ersten Schritt bis zur langfristigen Veränderung – lass dich inspirieren und sieh, was mit der richtigen Unterstützung möglich ist. Deine Erfolgsgeschichte könnte die nächste sein!</p>
      </div>
      </div>

    
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
  {REVIEWS.map((item, index) => (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.5 }} 
      animate={{ opacity: 1, y: 0, scale: 1 }} 
      transition={{ delay: index * 0.1, duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
      className="min-w-[300px] w-full max-w-[500px] rounded-2xl border-2 border-main-10/10 px-4 pt-2 pb-5 bg-black shadow-md"
      key={item.name}
    >
      <BsQuote className="text-4xl font-medium -mb-4" />
      <div className="relative regular-text z-20 text-base leading-[1.6] text-[#DDDDDD] font-inter mt-4 mb-4">
        {item.content}
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          {item.imagePath && (
            <Image
              src={item.imagePath as string}
              alt="Profile"
              className="w-10 h-10 rounded-full mr-4 object-cover"
              width={100}
              height={100}
              quality={10}
              loading="lazy"
              priority={false}
            />
          )}
          <span className="text-sm leading-[1.6] caption font-inter text-white font-normal">
            {item.name}
          </span>
        </div>
        {item.name !== "Jerome" && <div className="mt-4"></div>}
      </div>
    </motion.div>
  ))}
</div>

        <LinkButton href={'/#termin'} text={'Jetzt starten'} variant='primary'/>

        </div>

        <Footer />
        </div>
  )
}

export default page