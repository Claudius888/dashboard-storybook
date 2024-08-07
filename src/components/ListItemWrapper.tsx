import { ListItem } from './ListItem';
import { ListItemWrapperdataProps } from '../lib/types';
import { cn } from '../lib/utils';

export interface ListItemWrapperProps {
  data: ListItemWrapperdataProps;
  backgroundColor: 'light' | 'dark';
  SectionTitle: 'Notification' | 'Activities' | 'Contacts';
}

export function ListItemWrapper({
  data,
  backgroundColor,
  SectionTitle,
}: ListItemWrapperProps) {
  const isLight = backgroundColor == 'light';
  return (
    <div
      className={cn(
        'flex flex-col bg-themes-black-100 gap-2 w-[17.5rem] h-auto py-[var(--spacing-24-duplicate)] pl-[var(--spacing-24-duplicate)] theme-bg'
      )}
    >
      <p
        className={cn(
          'font-semibold text-base theme-text',
        )}
      >
        {SectionTitle}
      </p>
      {data.map((item) => (
        <ListItem item={item} isLight={isLight} />
      ))}
    </div>
  );
}
