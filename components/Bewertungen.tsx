import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards';
import { CardStack } from './ui/card-stack';
import LinkButton from './linkButton';
import { ImBubble } from 'react-icons/im';
import { REVIEWS } from '../data/reviews'




const Bewertungen = () => {
  return (
    <div id='bewertungen' className='px-5 -translate-y-[10vh] w-full max-w-[1500px] mx-auto flex flex-col justify-center items-center gap-10'>
<InfiniteMovingCards items={REVIEWS} speed='slow' pauseOnHover={false} className='hidden md:block'/>
<CardStack items={REVIEWS} />

<LinkButton href={'/erfahrungen'} text={'mehr Erfahrungen'} icon={<ImBubble />} variant='secondary'/>
</div>

  )
}
export default Bewertungen