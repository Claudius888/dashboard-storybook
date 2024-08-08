import React, { useState } from 'react';
import { ListItem } from './ListItem';
import { cn } from '../lib/utils';
import { Icons } from './Icons';
import { motion, AnimatePresence } from 'framer-motion';

export interface SidebarProps {
  backgroundColor?: 'light' | 'dark';
  open:boolean,
  cycleOpen: () => void,
}

const userblockAccordion = [
  {
    title: 'ECommerce',
    Icon: Icons.Bag,
    children: ['Overview', 'Projects', 'Campaign', 'Documents', 'Followers'],
  },
  {
    title: 'Projects',
    Icon: Icons.FolderNotch,
    children: ['Overview', 'Projects', 'Campaign', 'Documents', 'Followers'],
  },
  {
    title: 'Online Courses',
    Icon: Icons.BookOpen,
    children: ['Overview', 'Projects', 'Campaign', 'Documents', 'Followers'],
  },

  {
    title: 'User Profile',
    Icon: Icons.IdentificationBadge,
    children: ['Overview', 'Projects', 'Campaign', 'Documents', 'Followers'],
  },
  {
    title: 'Account',
    Icon: Icons.IdentificationCard,
    children: ['Overview', 'Projects', 'Campaign', 'Documents', 'Followers'],
  },
  {
    title: 'Corporate',
    Icon: Icons.BookOpen,
    children: ['Overview', 'Projects', 'Campaign', 'Documents', 'Followers'],
  },
  {
    title: 'Blog',
    Icon: Icons.Notebook,
    children: ['Overview', 'Projects', 'Campaign', 'Documents', 'Followers'],
  },
  {
    title: 'Social',
    Icon: Icons.Users,
    children: ['Overview', 'Projects', 'Campaign', 'Documents', 'Followers'],
  },
];

function OverviewBlock({ expanded }: { expanded: boolean }) {
  const [selectedOption, setSelectedOption] = useState<number | false>(false);

  return (
    <motion.div className={cn('relative pb-[var(--spacing-12)] max-w-fit flex flex-col',
        expanded ? 'gap-6' : 'gap-1'
    )}>
      <ListItem
        item={{
          title: 'ByeWind',
          Icon: '3D03',
        }}
        expanded={expanded}
        className={expanded ? 'pl-2': 'pl-1'}
      />

      {userblockAccordion.map((item, index) => {
        return (
          <ListItem
            className={cn(
              selectedOption == index && 'bg-sidebar-selected-bg',
              'rounded-lg justify-center',
              expanded ? 'p-3' : 'p-1'
            )}
            key={`overview-${index}-${item}`}
            item={item}
            onClick={() => setSelectedOption(index)}
            themed={true}
            selected={selectedOption == index}
            expanded={expanded}
          />
        );
      })}
    </motion.div>
  );
}

export function MinimalSidebar({ open, cycleOpen }: SidebarProps) {
  return (
    <React.Fragment>
      <AnimatePresence>
        <motion.div
          className={cn(
            'max-h-full px-[var(--spacing-16)] theme-muted-bg pt-3 relative'
          )}
          animate={open ? 'open' : 'closed'}
          variants={mainDivVariant}
          exit={{
            width: '4rem',
            transition: { delay: 0.2, duration: 0.3 },
          }}
        >
          <OverviewBlock expanded={open} />
        </motion.div>
        {/* <button
          className='absolute right-[5rem] top-[20rem]'
          onClick={cycleOpen}
        >
          toggle
        </button> */}
      </AnimatePresence>
    </React.Fragment>
  );
}

const mainDivVariant = {
  closed: {
    width: '4rem',
  },
  open: { width: '13.25rem' },
};
