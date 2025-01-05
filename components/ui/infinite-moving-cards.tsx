"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import "../css/text.css";
import { BsQuote } from "react-icons/bs";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    id: number;
    name: string;
    imagePath?: string;
    content: React.ReactNode;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "100s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
      "scroller relative z-20 overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
      className
      )}
    >
      <ul
      ref={scrollerRef}
      className={cn(
      " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
      start && "animate-scroll ",
      pauseOnHover && "hover:[animation-play-state:paused]"
      )}
      >
      {items.map((item) => (
        <li
        className="w-[350px] max-w-full relative rounded-2xl border-2 flex-shrink-0 border-main-10/10 px-4 pt-2 pb-5 md:w-[450px] bg-black shadow-md"
        key={item.name}
        >
        <blockquote>
        <div
        aria-hidden="true"
        className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
        ></div>
        <BsQuote className="text-4xl font-medium -mb-4" />
        <span className="relative regular-text z-20 text-base leading-[1.6] text-[#DDDDDD] font-inter line-clamp-5 mt-4 mb-4">
        {item.content}
        </span>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
        {item.imagePath && (
        <Image
        src={item.imagePath as string}
        alt="Profile"
        className="w-10 h-10 rounded-full mr-4 object-cover pointer-events-none"
        width={100}
        height={100}
        quality={10}
        loading="lazy"
        priority={false}
        />
        )}
        <span className="text-sm leading-[1.6] caption font-inter text-white font-normal">
        {item.name}
        </span>
        </div>
        {item.name !== "Jerome" && (
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
        </blockquote>
        </li>
      ))}
      </ul>
    </div>
  );
};
