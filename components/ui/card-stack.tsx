"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { BsQuote } from "react-icons/bs";

let interval: ReturnType<typeof setInterval>;

type Card = {
  id: number;
  name: string;
  imagePath?: string;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative h-60 w-full md:hidden flex items-center justify-center z-40">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute w-full max-w-[500px] rounded-2xl border-2 border-main-10/10 px-4 pt-2 pb-5 md:w-[450px] bg-black shadow-md"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
            <BsQuote className="text-4xl font-medium -mb-4" />
            <div className="relative regular-text z-20 text-base leading-[1.6] text-[#DDDDDD] font-inter line-clamp-6 mt-4 mb-4">
              {card.content}
            </div>
            <div className="flex justify-between items-center">
          <div className="flex items-center">
            
        {card.imagePath && (
        <Image
        src={card.imagePath as string}
        alt="Profile"
        className="w-10 h-10 rounded-full mr-4 object-cover pointer-events-none"
        width={100}
        height={100}
        quality={10}
        loading="eager"
        priority={true}
        />
        )}
        <span className="text-sm leading-[1.6] caption font-inter text-white font-normal">
        {card.name}
        </span>
        </div>
        {card.name !== "Jerome" && (
        <div className="mt-4">
        
        <Link
        href="/erfahrungen"
        className="text-hf-200 bg-neutral-900 hover:bg-neutral-950 hover:text-neutral-500 transition-colors px-4 py-[5px] rounded-full font-inter text-neutral-400 text-sm"
        >
        mehr anzeigen
        </Link>
       
        </div>
         )}
         </div>
          </motion.div>
        );
      })}
    </div>
  );
};
