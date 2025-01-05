import LinkButton from '@/components/linkButton'
import Navbar from '@/components/Navbar'
import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import Image from 'next/image'
import { BsQuote } from 'react-icons/bs'
import { motion } from 'framer-motion'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div id='datenschutz'
    className='flex flex-col justify-between w-full bg-gradient-to-tl from-main-900 to-main-800 text-ecs-richBlack min-h-screen overflow-hidden'>
      <Navbar />

      <div className='max-w-7xl w-full flex flex-col items-center gap-10 py-10 px-5 mx-auto overflow-hidden mb-32 mt-20 '>

      <div className='w-full flex flex-col items-start gap-5'>  
      <LinkButton text='zurück' icon={<BiArrowBack/>} href='/#bewertungen' variant='tertiary'/>
      <div className='flex flex-col items-start'>
      <h2 className='subtitle leading-tight'>Datenschutz</h2>
      <p className='overflow-hidden font-inter regular-text w-full'>

        ... <br />
 
        <span className='opacity-40'> <br />
        Quelle: <br />
        eRecht24 <br />
        </span>
        </p>
      </div>
      </div>

    



        </div>

        <Footer />
        </div>
  )
}

export default page