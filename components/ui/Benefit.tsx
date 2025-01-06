"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface BenefitProps {
    iconSrc: string;
    title: string;
    description: string;
}

const Benefit: React.FC<BenefitProps> = ({ iconSrc, title, description }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div 
            className='flex flex-row justify-center items-start gap-5 w-fit'
            whileHover={{ y: -20 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Image src={iconSrc} width={35} height={35} alt={title} className='shadow-2xl shadow-black'/>
            <div className='flex flex-col justify-start items-start lg:gap-2  lg:w-1/2'>
                <h3 className='info'>{title}</h3>
                <motion.p 
                    className='regular-text text-justify' 
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: isHovered ? 0.8 : 0, y: isHovered ? 0 : -50 }}
                    transition={{ duration: 0.2 }}
                >
                    {description}
                </motion.p>
            </div>
        </motion.div>
    )
}

export default Benefit