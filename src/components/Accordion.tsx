import { motion, AnimatePresence, useAnimate, stagger } from 'framer-motion';
import { cn } from '../lib/utils';
import { useEffect } from 'react';
import { Icons } from './Icons';
import { LucideProps } from 'lucide-react';
import { classnameProp } from '../lib/types';

export interface AccordionProps {
  i: number | false;
  expanded: number | false;
  setExpanded: (isOpen: number | false) => void;
  item: ItemProps;
  story?: boolean;
}

interface ItemProps {
  title: string;
  Icon: React.FC<LucideProps>;
  children: string[];
}

function Listitem({ item, isOpen }: { item: ItemProps; isOpen: boolean }) {
  const { title, Icon } = item;  

  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate('.arrow', { rotate: isOpen ? 90 : 0 }, { duration: 0.2 });
  }, [isOpen]);

  return (
    <div
      ref={scope}
      className={cn(
        'flex flex-row gap-2 w-full bg-transparent',
        'text-themes-black-100 dark:text-themes-white-100',
        'h-10 items-center'
      )}
    >

      <Icons.ArrowLineRight className='h-6 w-6 bg-transparent rounded-full arrow theme-svg' />

      <Icon className='h-6 w-6 bg-transparent rounded-full theme-svg' />
     
      <span className='flex flex-col w-[12.5rem] gap-1'>
        <span className='text-sm font-medium'>{title}</span>
      </span>
    </div>
  );
}

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

function AccordionBody({ item, isOpen, story }: { item: ItemProps; isOpen: boolean, story: boolean }) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      'ul',
      {
        height: isOpen ? 'auto' : '0px',
      },
      {
        type: 'spring',
        bounce: 0,
        duration: 0.5,
      }
    );

    animate(
      'ul',
      {
        clipPath: isOpen
          ? 'inset(0% 0% 0% 0% round 10px)'
          : 'inset(10% 50% 90% 50% round 10px)',
      },
      {
        type: 'spring',
        bounce: 0,
        duration: 0.5,
      }
    );

    animate(
      'li',
      isOpen
        ? { opacity: 1, scale: 1, filter: 'blur(0px)' }
        : { opacity: 0, scale: 0.3, filter: 'blur(20px)' },
      {
        duration: 0.2,
        delay: isOpen ? staggerMenuItems : 0,
      }
    );
  }, [isOpen]);

  return (
    <AnimatePresence>
      <motion.div layout ref={scope}>
        <ul
          className={cn('flex flex-col gap-3 theme-text', story ? 'theme-bg' : '')}
          style={{
            pointerEvents: isOpen ? 'auto' : 'none',
            clipPath: 'inset(10% 50% 90% 50% round 10px)',
          }}
        >
          {item.children.map((item, index) => {
            return (
              <li
                className='block origin-[-20px_50%] pl-16'
                key={`li-${index}`}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </motion.div>
    </AnimatePresence>
  );
}

export const Accordion = ({
  i,
  expanded,
  setExpanded,
  item,
  story
}: AccordionProps) => {
  const isOpen = i === expanded;

  // const scope = useMenuAnimation(isOpen);

  // By using `AnimatePresence` to mount and unmount the contents, we can animate
  // them in and out while also only rendering the contents of open accordions
  return (
    <>
      <motion.header
        layout
        initial={false}
        // animate={{ backgroundColor: isOpen ? '#FF0088' : '#0055FF' }}
        onClick={() => setExpanded(isOpen ? false : i)}
        className={story ? 'theme-bg' : ''}
      >
        <Listitem item={item} isOpen={isOpen}/>
      </motion.header>

      <AccordionBody item={item} isOpen={isOpen} story={story}/>
    </>
  );
};
