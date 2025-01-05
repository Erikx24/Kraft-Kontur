import LinkButton from '@/components/linkButton'
import Navbar from '@/components/Navbar'
import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div id='impressum'
    className='flex flex-col justify-between w-full bg-gradient-to-tl from-main-900 to-main-800 text-ecs-richBlack min-h-screen overflow-hidden'>
      <Navbar />

      <div className='max-w-7xl flex flex-col items-center gap-10 py-10 px-5 mx-auto overflow-hidden mb-32 mt-20 '>

      <div className='flex flex-col items-start gap-5'>  
      <LinkButton text='zurück' icon={<BiArrowBack/>} href='/#bewertungen' variant='tertiary'/>
      <div className='flex flex-col items-start'>
      <h2 className='subtitle leading-tight'>Impressum</h2>
      <p className='overflow-hidden font-inter regular-text text-hf-80'>

        Benjamin Leistikow <br />
        Kraft & Kontur <br />
        Staße 123<br />
        60000 Frankfurt am Main <br />
        <br /> 
        Telefon: +49 160 2377404 <br />
E-Mail: ben@kraftundkontur.de <br /> <br />
        Verbraucherstreitbeilegung/ Universalschlichtungsstelle<br />Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen. <br /> <br />
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