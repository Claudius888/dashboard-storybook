import React from 'react'
import { Sidebar } from './Sidebar'
import { Header } from './Header'
import { activitiesData, contactData, deviceStatData, locationStatData, notificationData, statcardData, userChartData } from '../lib/data'
import { StatCard } from './StatCard'
import { UserChart } from './UserChart'
import { DevicesStatChart } from './DevicesStatChart'
import { LocationStatChart } from './LocationStatChart'
import { ListItemWrapper } from './ListItemWrapper'


function MainSection() {
    return(
        <div className='p-8 flex flex-col gap-2'>
            <p className='section-title theme-text mb-3'>Overview</p>
            <div className='flex flex-row gap-7 justify-between'>
                {
                    statcardData.map((item) => (
                        <StatCard item={item}/>
                    ))
                }
            </div>
            <div className='flex flex-row gap-7 pt-5 '>
                <UserChart data={userChartData}/>
            </div>
            <div className='flex flex-row gap-7 pt-5 justify-between'>
                <DevicesStatChart data={deviceStatData}/>
                <LocationStatChart data={locationStatData}/>
            </div>
        </div>
    )
}

function NotificationSection() {
    return(
        <div className='max-h-full flex flex-col min-w-fit border-l border-themes-black-40'>
            <ListItemWrapper data={notificationData} SectionTitle='Notification'/>
            <ListItemWrapper data={activitiesData} SectionTitle='Activities' />
            <ListItemWrapper data={contactData} SectionTitle='Contacts' />
        </div>
    )
}

export function Page() {
  return (
    <div className='w-full h-full theme-bg'>
        <div className='flex flex-row'>
            <Sidebar />
            <div className='h-full flex flex-col w-[70vw]'>
                <Header />
                <MainSection />
            </div>
                <NotificationSection />
        </div>
    </div>
  )
}
