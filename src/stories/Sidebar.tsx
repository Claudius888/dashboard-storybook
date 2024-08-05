import React, { useState } from 'react';
import { ListItem } from './ListItem';
import PointSVG from './PointSVG';
import { cn } from '../lib/utils';
import { Accordion } from './Accordion';

export interface SidebarProps {
  backgroundColor: 'light' | 'dark';
}

type filter = 'Favourites' | 'Recently' | string;

const userblockAccordion = [
  {
    title: 'ECommerce',
    Icon: 'ShoppingBagOpen',
    children: ['Overview', 'Projects', 'Campaign', 'Documents', 'Followers'],
  },
  {
    title: 'Projects',
    Icon: 'FolderNotch',
    children: ['Overview', 'Projects', 'Campaign', 'Documents', 'Followers'],
  },
  {
    title: 'Online Courses',
    Icon: 'BookOpen',
    children: ['Overview', 'Projects', 'Campaign', 'Documents', 'Followers'],
  },
];

const pagesBlockAccordion = [
  {
    title: 'User Profile',
    Icon: 'IdentificationBadge',
    children: ['Overview', 'Projects', 'Campaign', 'Documents', 'Followers'],
  },
  {
    title: 'Account',
    Icon: 'IdentificationCard-horizontal',
    children: ['Overview', 'Projects', 'Campaign', 'Documents', 'Followers'],
  },
  {
    title: 'Corporate',
    Icon: 'BookOpen',
    children: ['Overview', 'Projects', 'Campaign', 'Documents', 'Followers'],
  },
  {
    title: 'Blog',
    Icon: 'Notebook',
    children: ['Overview', 'Projects', 'Campaign', 'Documents', 'Followers'],
  },
  {
    title: 'Social',
    Icon: 'ChatsTeardrop',
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
        {['Overview', 'Projects'].map((item) => {
          return (
            <span className='flex flex-row items-center gap-5'>
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
  return (
    <div className='relative gap-1 pb-[var(--spacing-12)]'>
      <p>Dashboard</p>
      <span className='flex flex-row gap-1 justify-center bg-themes-black-40 rounded-xl mt-2 p-1'>
        <img
          src={`/src/stories/assets/ui-icons/ChartPieSlice.svg`}
          className='h-6 w-6 bg-transparent rounded-full arrow'
        />
        Overview
      </span>
      {userblockAccordion.map((item, index) => {
        return (
          <Accordion
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

function PagesBlock(){
  const [expanded, setExpanded] = useState<number | false>(false);

  return(
    <div className='flex flex-col'>
      <p>Pages</p>
      {pagesBlockAccordion.map((item, index) => {
        return (
          <Accordion
            i={index}
            expanded={expanded}
            setExpanded={setExpanded}
            item={item}
          />
        );
      })}
    </div>
  )
}

export function Sidebar({ backgroundColor }: SidebarProps) {
  const isLight = backgroundColor == 'light';
  return (
    <div className='w-[13.25rem] px-[var(--spacing-16)] bg-black'>
      <Userblock isLight={isLight} />
      <OverviewBlock />
      <PagesBlock />
    </div>
  );
}
