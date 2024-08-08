import React, { useState } from 'react';
import { Header } from './Header';
import {
  activitiesData,
  contactData,
  deviceStatData,
  locationStatData,
  notificationData,
  statcardData,
  userChartData,
} from '../lib/data';
import { StatCard } from './StatCard';
import { UserChart } from './UserChart';
import { DevicesStatChart } from './DevicesStatChart';
import { LocationStatChart } from './LocationStatChart';
import { ListItemWrapper } from './ListItemWrapper';
import { MinimalSidebar } from './MinimalSidebar';
import { useCycle, motion } from 'framer-motion';
import { GradientStatCard } from './GradientStatCard';
import { cn } from '../lib/utils';

function MainSection() {
  return (
    <div className='p-8 flex flex-col gap-2'>
      <p className='section-title theme-text mb-3'>Overview</p>
      <div className='flex flex-row gap-7 justify-between'>
        {statcardData.map((item) => (
          <GradientStatCard item={item} />
        ))}
      </div>
      <div className='flex flex-row gap-7 pt-5 '>
        <UserChart data={userChartData} />
      </div>
      <div className='flex flex-row gap-7 pt-5 justify-between'>
        <DevicesStatChart data={deviceStatData} />
        <LocationStatChart data={locationStatData} />
      </div>
    </div>
  );
}

function NotificationSection() {
  return (
    <div className='max-h-full flex flex-col min-w-fit border-l border-themes-black-40'>
      <ListItemWrapper data={notificationData} SectionTitle='Notification' />
      <ListItemWrapper data={activitiesData} SectionTitle='Activities' />
      <ListItemWrapper data={contactData} SectionTitle='Contacts' />
    </div>
  );
}

export function OverviewPage() {
  const [open, cycleOpen] = useCycle(false, true);
  const [dark, setDark] = useCycle(false, true)

  function DarkModeHandler() {
        document.body.classList.toggle("dark");
  }

  return (
    <div className={cn('w-full h-full theme-bg')}>
      <div className='flex flex-row'>
        <MinimalSidebar open={open} cycleOpen={cycleOpen} />
        <motion.div
          variants={mainDivVariant}
          animate={open ? 'open' : 'closed'}
          className='h-full flex flex-col'
        >
          <Header cycleOpen={cycleOpen} minimal setDark={DarkModeHandler}/>
          <MainSection />
        </motion.div>
      </div>
    </div>
  );
}
{/* <NotificationSection /> */}

const mainDivVariant = {
  open: {
    width: '90%',
  },
  closed: {
    width: '100%',
  },
};
