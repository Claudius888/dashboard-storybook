import Card from './Card';
import { dataProps } from './UserChart';
import {
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';

export interface DeviceStatChartProps {
  backgroundColor: 'light' | 'dark';
  data: dataProps;
}

export function DevicesStatChart({
  backgroundColor,
  data,
}: DeviceStatChartProps) {
  return (
    <Card
      isLight={backgroundColor == 'light'}
      title='Traffic by Device'
      className='w-[27rem]'
    >
      <ResponsiveContainer
        width={'100%'}
        height={200}
        className={'mt-3 text-xs text-themes-black-40'}
      >
        <BarChart width={200} height={40} data={data} margin={{ left: 0 }}>
          <Bar dataKey='current_year'  barSize={30} radius={10}>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                style={
                  {
                    // filter: `drop-shadow(0px 0px 5px ${COLORS[index % COLORS.length]}`
                  }
                }
                fill={entry.color}
                stroke='0'
              />
            ))}
          </Bar>
          <XAxis
            axisLine={false}
            tickLine={false}
            padding={{ left: 1 }}
            dataKey='name'
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            width={28}
            tickFormatter={(tick) => {
              if (tick === 0) return '';
              if (tick < 1000) return tick;
              return `${Math.floor(tick / 1000)}K`;
            }}
          />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}
