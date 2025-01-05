import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiMailSend } from 'react-icons/bi'

const Footer = () => {
  return (
    <footer className='w-full h-fit mt-20 px-5 bg-gradient-to-t from-main-800/60 to-main-950 text-main-50'>
        <div className='flex flex-col items-center'>
        <div className='w-full h-[1px] bg-hf-60'/>
        
<div className='w-full flex flex-col gap-16 lg:flex-row justify-center lg:justify-between mt-5 max-w-7xl mx-auto'>

<div className='flex w-full flex-col gap-5 items-center '>

<Link href='/#home'>
<Image src={'/Logo.png'} alt={'Das Logo von Hartenfeller-Fitness. Es zeigt einen Kopf, welcher für Gesundheit steht. Alles im grünen Stil'} width={120} height={120} className='bg-hf-90 rounded-full p-2'/>
</Link>


<div className='flex flex-col gap-2 items-center lg:items-start footnote text-hf-80'>

        <a href='mailto:ben@kraftundkontur.de' className='flex flex-row gap-2 items-center '>
          <BiMailSend />
          <p className='line-clamp-1 font-inter'>ben@kraft&kontur.de</p>
        </a>


      </div>
</div>


<div className='w-full justify-center lg:justify-end flex flex-row gap-10 footnote text-hf-350 font-inter'>

<div className='flex flex-col'>
<p className='font-semibold text-hf-80'>Startseite</p>
<Link className='font-light' href="/#bewertungen">Erfahrungen</Link>
<Link className='font-light' href="/#vorteile">Vorteile</Link>
<Link className='font-light' href="/#about">Über mich</Link>
<Link className='font-light' href="/#termin">Probetraining</Link>
<Link className='font-light' href="/#contact">Kontakt</Link>
</div>

<div className='flex flex-col'>
<p className='font-semibold text-hf-80'>weitere Seiten</p>
<Link className='font-light' href="/erfahrungen">Erfahrungen</Link>
</div>


<div className='flex flex-col'>
<p className='font-semibold text-hf-80'>Rechtliches</p>
<Link className='font-light' href="/impressum">Impressum</Link>
<Link className='font-light' href="/datenschutz">Datenschutz</Link>
</div>

</div>
</div>
<p className='regular-text mt-5 text-hf-70 font-inter'>©2024 Kraft & Kontur</p>
        </div>
        </footer>
  )
}

export default Footer