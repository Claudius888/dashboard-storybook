import React, { useState } from 'react';
import './statcard.css';
import { cn } from '../lib/utils';
import PointSVG from './PointSVG';
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

type dataProps = { [key: string]: string | number }[]

export interface UserChartProps {
  /**
   * Is this the principal call to action on the page?
   */
  // primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: 'light' | 'dark';

  data: dataProps;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const filters = ['Total Users', 'Total Projects', 'Operating Status'];

function Filters({ isLight }: { isLight: boolean }) {
  const [selectedFilter, setselectedFilter] = useState<
    'Total Users' | 'Total Projects' | 'Operating Status' | string
  >('Total Users');
  const activeColors = isLight ? 'primary-brand' : 'primary-purple';
  const themeText = isLight ? 'black-100' : 'white-100';

  return (
    <span className='flex flex-row font-medium gap-2'>
      <span className='flex flex-row gap-5'>
        {filters.map((item) => {
          return (
            <p
              key={item}
              className={cn(
                'text-sm',
                selectedFilter == item
                  ? `text-themes-${activeColors}`
                  : 'text-themes-black-40'
              )}
              onClick={() => setselectedFilter(item)}
            >
              {item}
            </p>
          );
        })}
      </span>

      <div className='mx-1 w-[1px] h-5 bg-themes-black-40' />

      <span
        className={cn(
          'flex flex-row gap-5 text-xs items-end font-normal',
          `text-themes-${themeText}`
        )}
      >
        <span className='flex flex-row items-center gap-2'>
          <PointSVG fill='primary-brand' />
          This Year
        </span>
        <span className='flex flex-row items-center gap-2'>
          <PointSVG fill='secondary-cyan' />
          Last Year
        </span>
      </span>
    </span>
  );
}

function DataLineChart({ data }: { data: dataProps }) {
  return (
    <ResponsiveContainer
      width='100%'
      height={400}
      className={'mt-3 text-xs text-themes-black-40'}
    >
      <LineChart data={data} margin={{ left: 0, bottom: 0 }}>
        <Line
          type='monotone'
          dataKey='prev_year'
          dot={false}
          strokeDasharray='5 5'
        />
        <Line type='monotone' dataKey='current_year' dot={false} />
        <XAxis
          axisLine={false}
          tickLine={false}
          padding={{ left: 10 }}
          dataKey='name'
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          width={35}
          tickFormatter={(tick) => {
            if (tick === 0) return '';
            if (tick < 1000) return tick;
            return `${Math.floor(tick / 1000)}K`;
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export function UserChart({ backgroundColor, data }: UserChartProps) {
  const isLight = backgroundColor == 'light';
  const bg_color = isLight ? 'bg-themes-primary-light' : 'bg-themes-dark-card';

  return (
    <div
      className={cn(
        'flex flex-col gap-2 rounded-2xl py-[var(--spacing-24-duplicate)] px-[var(--spacing-24-duplicate)]',
        bg_color,
        'w-[41.25rem] shadow-md'
      )}
    >
      <Filters isLight={isLight} />
      <DataLineChart data={data} />
    </div>
  );
}
