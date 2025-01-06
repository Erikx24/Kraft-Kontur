"use client"
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import "./css/text.css"
import CountUp  from 'react-countup'

const Facts = () => {
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null); // Referenz für das zu beobachtende Element

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true); // Wenn das Element sichtbar ist, stasrte CountUp
          observer.disconnect(); // Stoppt das Beobachten nach dem ersten Erreichen des Sichtbaren Bereichs
        }
      },
      { threshold: 0.1 } // Startet, wenn 50% des Elements sichtbar sind
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  return (
    <div ref={counterRef} className='w-full h-fit px-5 max-w-5xl mx-auto flex flex-col gap-5 md:flex-row justify-between items-center top-32'>
        <div className='relative flex justify-center items-center hover:scale-[1.03] transition-all'>
          <Image src='/facts/1.png' width={266} height={187} quality={60} priority={true} className='' alt={''}/>
          <div className='absolute text-white w-full h-full flex flex-col justify-center items-end p-4'>
            <span className='flex flex-row items-center text-end fact font-inter'>
            {isVisible && <CountUp end={600} />}+
            </span>
            <p className='text-end info font-inter text-main-200'>Trainingsstunden</p>
          </div>
        </div>

        <div className='relative flex justify-center items-center hover:scale-[1.03] transition-all'>
          <Image src='/facts/2.png' width={266} height={187} quality={60} priority={true} className='' alt={''}/>
          <div className='absolute text-white w-full h-full flex flex-col justify-center items-end p-4'>
          <span className='flex flex-row items-center text-end fact font-inter'>
            {isVisible && <CountUp end={8} />}+
            </span>
            <p className='text-end info font-inter text-main-200'>Jahre Erfahrung</p>
          </div>
        </div>

        <div className='relative flex justify-center items-center hover:scale-[1.03] transition-all'>
          <Image src='/facts/3.png' width={266} height={187} quality={60} priority={true} className='' alt={''}/>
          <div className='absolute text-white w-full h-full flex flex-col justify-center items-end p-4'>
          <span className='flex flex-row items-center text-end fact font-inter'>
            {isVisible && <CountUp end={30} />}+
            </span>
            <p className='text-end info font-inter text-main-200'>zufriedene Kunden</p>
          </div>
        </div>

    </div>
  )
}

export default Facts