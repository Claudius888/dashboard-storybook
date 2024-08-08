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

export interface StatCardProps {
  item: statItem;

  onClick?: () => void;
}

export function StatCard({ item }: StatCardProps) {
  const { title, primaryStat, secondaryStat, icon, backgroundColor } = item;
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
        'w-[12.6rem] h-[7rem] shadow-md'
      )}
    >
      <p className='text-sm font-medium'>{title}</p>
      <span className='flex flex-row justify-between'>
        <p className='text-2xl font-semibold tracking-wider'>{primaryStat}</p>
        <p className='flex flex-row text-sm items-center'>
          {secondaryStat}
          {/* <img src={iconSet} className='h-5' alt='React logo' /> */}
          <Icon className='h-5' />
        </p>
      </span>
    </div>
  );
}
