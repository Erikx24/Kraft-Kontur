import { cn } from '@/lib/utils';
import React from 'react'

const Highlight = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <span
        className={cn(
          "font-semibold tracking-wide bg-main-400/[0.2] rounded-lg text-main-300 px-1 py-0.5",
          className
        )}
      >
        {children}
      </span>
    );
  };

export default Highlight