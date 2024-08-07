import React from 'react';
import { cn } from '../lib/utils';
import { Icons } from './Icons';


export interface StatCardProps {
  /**
   * Is this the principal call to action on the page?
   */
  // primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: 'blue' | 'green';
  /**
   * How large should the button be?
   */
  title: string;
  /**
   * Button contents
   */
  primaryStat: string;

  secondaryStat: string;

  icon: 'up' | 'down';
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export function StatCard({
  backgroundColor,
  title,
  primaryStat,
  secondaryStat,
  icon,
}: StatCardProps) {
  const bg_color =
    backgroundColor == 'blue'
      ? 'bg-themes-primary-blue'
      : 'bg-themes-secondary-green';
    
    const Icon = icon == 'up' ? Icons.ArrowRise : Icons.ArrowFall; 
  return (
    <div
      className={cn(
        'grid grid-rows-2 gap-2 rounded-2xl py-[var(--spacing-24-duplicate)] px-[var(--spacing-24-duplicate)] text-black-100',
        bg_color,
        'min-w-52'
      )}
    >
      <p className='text-sm font-medium'>{title}</p>
      <span className='flex flex-row justify-between'>
        <p className='text-2xl font-semibold tracking-wider'>{primaryStat}</p>
        <p className='flex flex-row text-sm items-center'>
          {secondaryStat}
          {/* <img src={iconSet} className='h-5' alt='React logo' /> */}
          <Icon className='h-5'/>
        </p>
      </span>
    </div>
  );
}
