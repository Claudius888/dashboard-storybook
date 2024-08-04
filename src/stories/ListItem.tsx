import React, { HTMLProps } from 'react';
import { cn } from '../lib/utils';
import { ListItemdataProps } from '../lib/types';

type classNameProp = HTMLProps<HTMLElement>['className'];

export interface ListItemProps {
  item: ListItemdataProps
  isLight: boolean;
  className?: classNameProp; 
}

export function ListItem({
  item,
  isLight,
  className
}: ListItemProps) {
  const {title, subtitle, Icon}  = item
  return (
    <div
      className={cn(
        'flex flex-row gap-2 w-[15.5rem] bg-transparent',
        isLight ? 'text-themes-black-100' : 'text-themes-white-100',
        !subtitle ? 'h-10 items-center' : 'h-14',
        className
      )}
    >
      {typeof Icon == 'string' ?  <img src={`/profile/${Icon}.jpg`} className='h-6 w-6 bg-transparent rounded-full' /> : <Icon />}
      <span className='flex flex-col w-[12.5rem] gap-1'>
        <span className='text-sm font-medium'>{title}</span>
        {subtitle && (
          <span className='text-xs font-normal text-themes-black-40'>
            {subtitle}
          </span>
        )}
      </span>
    </div>
  );
}
