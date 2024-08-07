import React, { HTMLProps } from 'react';
import { cn } from '../lib/utils';

export interface CardProps {
  className?: HTMLProps<HTMLElement>['className'];
  isLight: boolean;
  title?: string;
  children: React.ReactElement | React.ReactElement[];
}

export default function Card({
  className,
  isLight,
  children,
  title,
}: CardProps) {

  return (
    <div
      className={cn(
        'flex flex-col gap-2 rounded-2xl py-[var(--spacing-24-duplicate)] px-[var(--spacing-24-duplicate)] shadow-md theme-card',
        className
      )}
    >
      {title && (
        <p
          className={cn(
            'font-semibold text-base',
            'text-themes-black-100 dark:text-themes-white-100',
          )}
        >
          {title}
        </p>
      )}
      {children}
    </div>
  );
}
