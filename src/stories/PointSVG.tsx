import { HTMLProps } from 'react';
import { cn } from '../lib/utils';

type FillProps =
  | 'secondary-green'
  | 'primary-blue'
  | 'primary-brand'
  | 'secondary-cyan'
  | 'secondary-blue'
  | string;

export type classNameProp = HTMLProps<HTMLElement>['className'];
export default function PointSVG({
  fill,
  className,
}: {
  fill?: FillProps;
  className?: classNameProp;
}) {
  return (
    <svg
      width='6'
      height='6'
      viewBox='0 0 6 6'
      // fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn(`fill-themes-${fill}`, className)}
    >
      <path d='M6 3C6 4.65685 4.65685 6 3 6C1.34315 6 0 4.65685 0 3C0 1.34315 1.34315 0 3 0C4.65685 0 6 1.34315 6 3Z' />
    </svg>
  );
}
