"use client"
import Image from 'next/image'
import { useState } from "react";
import { FaXmark } from 'react-icons/fa6';
import { RiMenu3Line } from 'react-icons/ri'
import { AnimatePresence, motion } from "framer-motion"
import Link from 'next/link';


const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);
  
    const handleButtonClick = () => {
      setShowNavbar((prev) => !prev); // Bild anzeigen, wenn der Button gedrückt wird
    };

    const handleCloseNavbar = () => {
      setShowNavbar(false); // Navbar schließen, wenn ein Link geklickt wird
    };
  
  return (
      
    <nav className='fixed w-screen h-fit bg-main-900/40 backdrop-blur-xl lg:backdrop-blur-none lg:bg-transparent z-50 px-6 lg:px-5 py-4 
    lg:py-4 border-b border-main-10/10 lg:border-0 rounded-b-3xl lg:rounded-none'>
    <div className='w-full max-w-7xl mx-auto flex flex-row items-center justify-between'>
    <Link href='/#home'><Image src = "/Logo.png" width = {60} height={60} alt={''} className='block lg:hidden'/></Link>
    <div className="hidden lg:flex flex-row z-50 w-full justify-between items-center  max-w-7xl mx-auto ">
            <Image src = "/Logo.png" width = {60} height={60} alt='Logo'/>
            <div className="flex flex-row lg:gap-5 xl:gap-14 items-center justify-center absolute left-1/2 transform 
            -translate-x-1/2 bg-black/30 backdrop-blur-md py-2 px-1 rounded-full">

            <Link href="/#home" className="mx-1  text-main-10 no-underline px-4 py-2 hover:bg-white/5 rounded-full transition-colors buttons-text font-inter">Home</Link>
            <Link href="/erfahrungen" className="mx-2 text-main-10 no-underline px-4 py-2 hover:bg-white/5 rounded-full transition-colors buttons-text font-inter">Erfahrungen</Link>
            <Link href="/#about" className="mx-2 text-main-10 no-underline px-4 py-2 hover:bg-white/5 rounded-full transition-colors buttons-text font-inter whitespace-nowrap">Über mich</Link>
            <Link href="/#contact" className="mx-2 text-main-10 no-underline px-4 py-2 hover:bg-white/5 rounded-full transition-colors buttons-text font-inter">Kontakt</Link>

            </div>
            <Link href="/#termin" className="px-4 py-2 bg-main-10 text-main-900 hover:bg-main-50 transition-colors rounded-xl buttons-text font-inter whitespace-nowrap">Termin buchen</Link>
        </div>

      
      <button className='text-main-10 text-2xl' onClick={handleButtonClick}>
      <AnimatePresence mode="wait">
          <motion.div
            key={showNavbar ? "close" : "menu"}
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            {showNavbar ? (
              <FaXmark className="block lg:hidden" />
            ) : (
              <RiMenu3Line className="block lg:hidden" />
            )}
          </motion.div>
        </AnimatePresence>
    </button>
    </div>
    <AnimatePresence>
        {showNavbar && (
          <motion.div
            className="w-full bg-hf-90"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "21rem", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.2, ease: "easeInOut" },
              opacity: { duration: 0.3, ease: "easeInOut" },
            }}
          >
              <div className='w-full flex flex-col justify-start gap-6 pt-5 items-center text-main-10 font-inter buttons-text'>
              <Link href="/#home" className='w-full flex items-center justify-center py-2 max-w-sm hover:opacity-70 transition' onClick={handleCloseNavbar}>Home</Link>
              <Link href="/erfahrungen" className='w-full flex items-center justify-center py-2 max-w-sm hover:opacity-70 transition' onClick={handleCloseNavbar}>Erfahrungen</Link>
              <Link href="/#about" className='w-full flex items-center justify-center py-2 max-w-sm hover:opacity-70 transition' onClick={handleCloseNavbar}>Über mich</Link>
               <Link href="/#contact" className='w-full flex items-center justify-center py-2 max-w-sm hover:opacity-70 transition' onClick={handleCloseNavbar}>Kontakt</Link>
               <Link href='/#termin' onClick={handleCloseNavbar} className="px-4 py-2 w-full flex justify-center max-w-sm bg-main-10 text-main-900 hover:bg-main-50 transition rounded-xl buttons-text font-inter whitespace-nowrap">Termin buchen</Link>


              </div>
            </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar