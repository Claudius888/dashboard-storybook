import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { cn } from '../lib/utils';
import Card from './Card';
import { dataProps } from './UserChart';
import PointSVG from '../stories/PointSVG';

const TW_COLORS = [
  'fill-themes-secondary-cyan',
  'fill-themes-secondary-green',
  'fill-themes-primary-blue',
  'fill-themes-secondary-indigo',
];

const COLORS = [
  'rgba(168, 197, 218, 1)',
  'rgba(161, 227, 203, 1)',
  'rgba(227, 245, 255, 1)',
  'rgba(149, 164, 252, 1)',
];

export interface LocationStatChartProps {
  backgroundColor: 'light' | 'dark';
  data: dataProps;
}

function LocationPieChart({ data }: { data: dataProps }) {
  return (
    <ResponsiveContainer width={'50%'} height={200}>
      <PieChart>
        <Pie
          data={data}
          innerRadius={30}
          outerRadius={65}
          paddingAngle={5}
          dataKey='value'
          cornerRadius={3}
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              style={
                {
                  // filter: `drop-shadow(0px 0px 5px ${COLORS[index % COLORS.length]}`
                }
              }
              fill={COLORS[index % COLORS.length]}
              stroke='0'
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}

export function LocationStatChart({
  backgroundColor,
  data,
}: LocationStatChartProps) {
  const isLight = backgroundColor == 'light';

  return (
    <Card
      className='w-[27rem] h-[17.5rem]'
      isLight={isLight}
      title='Traffic by Location'
    >
      <div className='flex flex-row'>
        <LocationPieChart data={data} />
        <div
          className={cn(
            'flex flex-col text-xs min-w-[50%] self-center theme-text',
          )}
        >
          {data.map((item, index) => {
            return (
              <span
                className='flex flex-row 
              items-center justify-between gap-2 mb-4'
                key={`span-${item.name}`}
              >
                <span className='flex flex-row items-center gap-2'>
                  <PointSVG
                    // fill={TW_COLORS[index]}
                    className={TW_COLORS[index]}
                  />
                  {item.name}
                </span>
                {item.value}%
              </span>
            );
          })}
        </div>
      </div>
    </Card>
  );
}
