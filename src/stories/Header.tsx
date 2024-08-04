import React from 'react';

import './header.css';
import Sidebar from './assets/ui-icons/Sidebar.svg';
import Star from './assets/ui-icons/Star.svg';
import SearchIcon from './assets/ui-icons/Search.svg';
import CommandIcon from './assets/ui-icons/Command.svg';
import ThemeIcon from './assets/ui-icons/Sun.svg';
import NotificationIcon from './assets/ui-icons/Bell.svg';
import ActivityIcon from './assets/ui-icons/ClockCounterClockwise.svg';

type User = {
  name: string;
};

export interface HeaderProps {}

function BreadCrumbs() {
  return <span>Dashboards / Default</span>;
}

function Searchbar() {
  return (
    <div className='relative w-[10rem] overflow-hidden'>
      <img src={SearchIcon} className='absolute left-[0.25rem] top-1/4' />
      <input
        placeholder='Search'
        className='pl-6 rounded-lg w-[10rem] h-7 text-sm text-themes-black-40 placeholder-themes-black-40'
      />
      <img src={CommandIcon} className='absolute right-[0.5rem] top-1/4' />
    </div>
  );
}

export const Header = () => (
  <header className=''>
    <div
      className='flex flex-row items-center justify-between 
    w-[59.25rem] h-[4.25rem] border border-themes-black-40 px-8 '
    >
      <div className='flex flex-row gap-5'>
        <img src={Sidebar} />
        <img src={Star} />
        <BreadCrumbs />
      </div>
      <div className='flex flex-row gap-[1rem]'>
        <Searchbar />
        <img src={ThemeIcon} />
        <img src={ActivityIcon} />
        <img src={NotificationIcon} />
        <img src={Sidebar} />
      </div>
    </div>
  </header>
);
