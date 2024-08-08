import React from 'react';

import { Icons } from './Icons';
import { cn } from '../lib/utils';


export interface HeaderProps {}

function BreadCrumbs() {
  return <span>Dashboards / Default</span>;
}

function Searchbar() {
  const dark_classname = 'fill-themes-black-100 dark:fill-themes-white-100'

  return (
    <div className='relative w-[10rem] overflow-hidden'>
      <Icons.Search className={cn('absolute left-[0.25rem] top-1/4', dark_classname)} />
      <input
        placeholder='Search'
        className='pl-6 rounded-lg w-[10rem] h-7 text-sm text-themes-black-40 placeholder-themes-black-40 bg-themes-black-5'
      />
      <Icons.Command  className={cn('absolute right-[0.5rem] top-1/4', dark_classname)}/>
    </div>
  );
}

export const Header = ({cycleOpen, minimal=false, setDark}: {cycleOpen?: () => void, minimal?: boolean, setDark: () => void}) => {
  const dark_classname = 'theme-svg'
  return (
  <header className=''>
    {/* w-[63.9rem]  */}
    <div
      className={cn('flex flex-row items-center justify-between w-full h-[4.25rem] max-w-full px-8 theme-text theme-bg',
        !minimal && 'border-b border-themes-black-40'
      )}
    >
      <div className='flex flex-row gap-5'>
        <Icons.Sidebar className={dark_classname} onClick={cycleOpen}/>
        <Icons.Star className={dark_classname}/>
        <BreadCrumbs />
      </div>
      <div className='flex flex-row gap-[1rem]'>
        <Searchbar />
        <Icons.Sun className={dark_classname} onClick={() => setDark()}/>
        <Icons.ClockCounterClockwise className={dark_classname}/>
        <Icons.Bell className={dark_classname}/>
        {!minimal && <Icons.Sidebar className={dark_classname}/>}
      </div>
    </div>
  </header>
)};
