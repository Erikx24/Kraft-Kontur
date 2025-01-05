import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards';
import { i, image } from 'framer-motion/client';
import { CardStack } from './ui/card-stack';
import { cn } from '@/lib/utils';
import LinkButton from './linkButton';
import { GiBubbleField, GiBubbles } from 'react-icons/gi';
import { ImBubble } from 'react-icons/im';
import Image from 'next/image';
import { REVIEWS } from '../data/reviews'




const Bewertungen = () => {
  return (
    <div id='bewertungen' className='px-5 -translate-y-20 w-full max-w-[1500px] mx-auto flex flex-col justify-center items-center gap-10'>
<InfiniteMovingCards items={REVIEWS} speed='slow' pauseOnHover={true} className='hidden md:block'/>
<CardStack items={REVIEWS}/>

<LinkButton href={'/erfahrungen'} text={'mehr Erfahrungen'} icon={<ImBubble />} variant='secondary'/>
</div>

  )
}
export default Bewertungen