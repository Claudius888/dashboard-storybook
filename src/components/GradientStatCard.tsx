import React from 'react';
import { cn } from '../lib/utils';
import { Icons } from './Icons';

export type statItem = {
  title: string;

  primaryStat: string;

  secondaryStat: string;

  icon: 'up' | 'down' | string;

  backgroundColor?: 'blue' | 'green';
};

export interface GradientStatCardProps {
  item: statItem;

  onClick?: () => void;
}

export function GradientStatCard({ item }: GradientStatCardProps) {
  const { title, primaryStat, secondaryStat, icon, backgroundColor } = item;

  const Icon = icon == 'up' ? Icons.ArrowRise : Icons.ArrowFall;
  return (
    <div
      className={cn(
        'gap-2 rounded-2xl py-4 px-[var(--spacing-24-duplicate)] text-white-100',
        backgroundColor == 'blue'
          ? 'theme-primary-gradient'
          : 'theme-black-gradient',
        'w-[15rem] h-[7rem] shadow-md relative'
      )}
    >
      <span className='flex flex-row justify-between h-full w-full'>
        <span className='flex flex-col items-start justify-between'>
          <p className='text-sm font-medium'>{title}</p>
          <p className='text-2xl font-semibold tracking-wider'>{primaryStat}</p>
        </span>
        <span className='flex flex-col text-sm items-center justify-between'>
          <Icon
            className={cn(
              'h-7 w-9 shadow-2xl rounded-xl p-1',
              backgroundColor == 'blue'
                ? 'theme-primary-gradient'
                : 'theme-black-gradient'
            )}
            fill='white'
          />
          {secondaryStat}
          {/* <img src={iconSet} className='h-5' alt='React logo' /> */}
        </span>
      </span>
    </div>
  );
}
