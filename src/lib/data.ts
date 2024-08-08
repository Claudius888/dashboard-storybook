import { statItem } from '../components/StatCard';
import { dataProps } from '../components/UserChart';
import { Broadcast } from '../ui/Broadcast';
import { Bug } from '../ui/Bug';
import { ListItemWrapperdataProps } from './types';

export const statcardData: statItem[] = [
  {
    title: 'Visits',
    icon: 'down',
    primaryStat: '3,655',
    secondaryStat: '-0.03%',
    backgroundColor: 'green',
  },
  {
    title: 'Views',
    icon: 'up',
    primaryStat: '7,554',
    secondaryStat: '+11.02%',
    backgroundColor: 'blue',
  },
  {
    title: 'New Users',
    icon: 'up',
    primaryStat: '156',
    secondaryStat: '+15.03%',
    backgroundColor: 'green',
  },
  {
    title: 'Active Users',
    icon: 'up',
    primaryStat: '2,318',
    secondaryStat: '+6.08%',
    backgroundColor: 'blue',
  },
];

export const userChartData: dataProps = [
  {
    name: 'Jan',
    current_year: 40000,
    prev_year: 24000,
    amt: 2400,
  },
  {
    name: 'Feb',
    current_year: 30000,
    prev_year: 13980,
    amt: 2210,
  },
  {
    name: 'Mar',
    current_year: 20000,
    prev_year: 30000,
    amt: 2290,
  },
  {
    name: 'Apr',
    current_year: 27800,
    prev_year: 39080,
    amt: 2000,
  },
  {
    name: 'May',
    current_year: 18900,
    prev_year: 48000,
    amt: 2181,
  },
  {
    name: 'Jun',
    current_year: 23900,
    prev_year: 38000,
    amt: 2500,
  },
  {
    name: 'Jul',
    current_year: 34900,
    prev_year: 43000,
    amt: 2100,
  },
];

export const deviceStatData: dataProps = [
  {
    name: 'iOS',
    current_year: 40000,
    prev_year: 24000,
    amt: 2400,
    color: 'rgba(168, 197, 218, 1)',
  },
  {
    name: 'Linux',
    current_year: 30000,
    prev_year: 13980,
    amt: 2210,
    color: 'rgba(161, 227, 203, 1)',
  },
  {
    name: 'Mac',
    current_year: 20000,
    prev_year: 30000,
    amt: 2290,
    color: 'rgba(186, 237, 189, 1)',
  },
  {
    name: 'Windows',
    current_year: 27800,
    prev_year: 39080,
    amt: 2000,
    color: 'rgba(227, 245, 255, 1)',
  },
  {
    name: 'Android',
    current_year: 18900,
    prev_year: 48000,
    amt: 2181,
    color: 'rgba(149, 164, 252, 1)',
  },
  {
    name: 'Other',
    current_year: 23900,
    prev_year: 38000,
    amt: 2500,
    color: 'rgba(177, 227, 255, 1)',
  },
];

export const locationStatData: dataProps = [
  { name: 'United States', value: 38.6 },
  { name: 'Canada', value: 22.5 },
  { name: 'Mexico', value: 30.8 },
  { name: 'Other', value: 8.1 },
];

export const notificationData:ListItemWrapperdataProps = [
    {
      title: 'You fixed a bug',
      subtitle: '59 minutes ago',
      Icon: Bug,
    },
    {
      title: 'You fixed a bug',
      subtitle: '2 hours ago',
      Icon: Bug,
    },
    {
      title: 'Andi Lane subscribed to you',
      subtitle: '3 hours ago',
      Icon: Broadcast,
    },
    {
      title: 'Andi Murray subscribed to you',
      subtitle: '4 hours ago',
      Icon: Broadcast,
    },
  ];
  
export const contactData:ListItemWrapperdataProps = [
    {
      title: 'Natalie Craine',
      Icon: 'Female03',
    },
    {
      title: 'Kate Morino',
      Icon: '3D03',
    },
    {
      title: 'Andi Lane',
      Icon: 'Female04',
    },
    {
      title: 'Melody Macy',
      Icon: 'Female05',
    },
    {
      title: 'Andi Murray',
      Icon: 'Male02',
    },
    {
      title: 'Drew Cono',
      Icon: 'Male04', 
    },
  ];

  export const activitiesData:ListItemWrapperdataProps = [
    {
      title: 'Changed the style',
      Icon: 'Female03',
      subtitle: '59 minutes ago',
    },
    {
      title: 'Released a new version',
      Icon: '3D03',
      subtitle: '2 hours ago',
    },
    {
      title: 'Submitted a bug',
      Icon: 'Female04',
      subtitle: '3 hours ago',
    },
    {
      title: 'Modified a data in Page X',
      Icon: 'Female05',
      subtitle: '4 hours ago',
    },
  ];