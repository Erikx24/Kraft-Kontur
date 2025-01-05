import Link from 'next/link'
import React from 'react'
import "./css/text.css"
import { RiArrowRightUpLine } from 'react-icons/ri'

interface LinkButtonProps {
  href: string;
  text: string;
  icon?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary';
}

const LinkButton: React.FC<LinkButtonProps> = ({ href, text, icon = <RiArrowRightUpLine />, variant = 'primary' }) => {
  const variantClasses = {
    primary: 'flex-row from-main-800/60 to-main-400/60 text-main-10 border border-main-100/60',
    secondary: 'flex-row from-main-800/60 to-secondary-900/40 text-main-10/60 border border-main-100/60',
    tertiary: 'flex-row-reverse from-transparent to-transparent text-main-10/60',
  };

  return (
    <Link href={href} 
    className={`relative flex gap-4  items-center w-fit rounded-2xl bg-gradient-to-tr z-20
    ${variantClasses[variant]} px-5 py-2 overflow-hidden hover:opacity-70
    transition buttons-text font-inter no-underline backdrop-blur-md`}>
      
      <span className='z-10'>{text}</span>
      {icon && <span className=' relative z-10 text-xl'>{icon}</span>}
      <div className='absolute inset-0 bg-gradient-to-tr opacity-50'></div>
      <div className='absolute inset-0 rounded-2xl'></div>
    </Link>
  )
}

export default LinkButton