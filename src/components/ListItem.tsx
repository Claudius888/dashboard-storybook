import React, { HTMLProps, useEffect } from 'react';
import { cn } from '../lib/utils';
import { ListItemdataProps } from '../lib/types';
import {
  motion,
  stagger,
  useAnimate,
} from 'framer-motion';

type classNameProp = HTMLProps<HTMLElement>['className'];

export interface ListItemProps {
  item: ListItemdataProps;
  themed?: boolean;
  className?: classNameProp;
  selected?: boolean;
  onClick?: () => void;
  expanded?: boolean;
}

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

export function ListItem({
  item,
  themed,
  className,
  onClick,
  selected,
  expanded = true,
}: ListItemProps) {
  const { title, subtitle, Icon } = item;
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      '.animate-title-outer',
      {
        width: expanded ? '13.6rem' : '0px',
      },
      {
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }
    );

    animate(
      '.animate-title',
      expanded
        ? { opacity: 1, scale: 1, filter: 'blur(0px)' }
        : { opacity: 0, scale: 0.3, filter: 'blur(40px)' },
      {
        duration: 0.3,
        delay: expanded ? staggerMenuItems : 0,
      }
    );
  }, [expanded]);

  return (
    <motion.div
      layout
      ref={scope}
      className={cn(
        'flex flex-row w-full bg-transparent',
        'text-themes-black-100 dark:text-themes-white-100 justify-center',
        !subtitle ? 'h-9 items-center' : 'h-11',
        expanded ? 'gap-2' : 'gap-0', 
        className
      )}
      onClick={onClick}
      whileHover={themed ? !expanded ? {scale: 1.2} : {scale: 1.1} : {}}
    >
      {typeof Icon == 'string' ? (
        <img
          src={`/profile/${Icon}.jpg`}
          className='h-6 w-6 bg-transparent rounded-full'
        />
      ) : (
        <Icon
          className={cn(
            'h-6 w-6',
            selected ? 'fill-themes-black-100' : themed && 'theme-svg' 
          )}
        />
      )}
      <motion.span
        className='flex flex-col gap-1 animate-title-outer'
      >
        <motion.span
          className={cn(
            'text-sm font-medium animate-title',
            selected && 'text-themes-black-100'
          )}
        >
          {title}
        </motion.span>
        {subtitle && (
          <span className='text-xs font-normal text-themes-black-40'>
            {subtitle}
          </span>
        )}
      </motion.span>
    </motion.div>
  );
}
