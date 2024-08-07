import React, { useState } from 'react';
import { ListItem } from './ListItem';
import PointSVG from '../stories/PointSVG';
import { cn } from '../lib/utils';
import { Accordion } from './Accordion';
import { Icons } from './Icons';

export interface SidebarProps {
  backgroundColor: 'light' | 'dark';
}

type filter = 'Favourites' | 'Recently' | string;

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
];

const pagesBlockAccordion = [
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

function Userblock({ isLight }: { isLight: boolean }) {
  const [selectedFilter, setselectedFilter] = useState<filter>('Favourites');

  return (
    <div className='flex flex-col gap-2 pb-[var(--spacing-12)]'>
      <ListItem
        item={{
          title: 'ByeWind',
          Icon: '3D03',
        }}
        isLight={isLight}
        className='pl-2'
      />
      <span className={'flex flex-row justify-around'}>
        {['Favourites', 'Recently'].map((item) => {
          return (
            <p
              className={cn(
                selectedFilter == item
                  ? 'text-themes-black-40'
                  : 'text-themes-black-20'
              )}
              onClick={() => setselectedFilter(item)}
            >
              {item}
            </p>
          );
        })}
      </span>
      <span className='flex flex-col mt-2 gap-5 pl-4'>
        {['Overview', 'Projects'].map((item, idx) => {
          return (
            <span
              key={`user-${idx}-${item}`}
              className='flex flex-row items-center gap-5 text-themes-black-100 dark:text-themes-white-100'
            >
              <PointSVG
                // fill={TW_COLORS[index]}
                className={'fill-themes-black-40'}
              />
              {item}
            </span>
          );
        })}
      </span>
    </div>
  );
}

function OverviewBlock() {
  const [expanded, setExpanded] = useState<number | false>(false);
  const dark_classname = 'fill-themes-black-100 dark:fill-themes-white-100';

  return (
    <div className='relative gap-1 pb-[var(--spacing-12)]'>
      <p>Dashboard</p>
      <span className='flex flex-row gap-1 items-center justify-center bg-themes-black-10 dark:bg-themes-black-40 
      text-themes-black-100 dark:text-themes-white-100 text-sm font-medium
       rounded-xl mt-2 p-1'>
        <Icons.ChartPieSlice className={dark_classname} />
        Overview
      </span>
      {userblockAccordion.map((item, index) => {
        return (
          <Accordion
            key={`overview-${index}-${item}`}
            i={index}
            expanded={expanded}
            setExpanded={setExpanded}
            item={item}
          />
        );
      })}
    </div>
  );
}

function PagesBlock() {
  const [expanded, setExpanded] = useState<number | false>(false);

  return (
    <div className='flex flex-col'>
      <p>Pages</p>
      {pagesBlockAccordion.map((item, index) => {
        return (
          <Accordion
            key={`user-${index}-${item}`}
            i={index}
            expanded={expanded}
            setExpanded={setExpanded}
            item={item}
          />
        );
      })}
    </div>
  );
}

export function Sidebar({ backgroundColor }: SidebarProps) {
  const isLight = backgroundColor == 'light';
  return (
    <div className='w-[13.25rem] px-[var(--spacing-16)] bg-themes-white-100 dark:bg-themes-black-100'>
      <Userblock isLight={isLight} />
      <OverviewBlock />
      <PagesBlock />
    </div>
  );
}
