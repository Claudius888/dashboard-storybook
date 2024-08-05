import { motion, AnimatePresence, useAnimate, stagger } from 'framer-motion';
import { cn } from '../lib/utils';
import { useEffect } from 'react';

export interface AccordionProps {
  i: number | false;
  expanded: number | false;
  setExpanded: (isOpen: number | false) => void;
  item: ItemProps;
}

interface ItemProps {
  title: string;
  Icon: string;
  children: string[];
}

function Listitem({ item, isOpen }: { item: ItemProps; isOpen: boolean }) {
  const { title, Icon } = item;
  const isLight = false;

  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate('.arrow', { rotate: isOpen ? 90 : 0 }, { duration: 0.2 });
  }, [isOpen]);

  return (
    <div
      ref={scope}
      className={cn(
        'flex flex-row gap-2 w-[15.5rem] bg-transparent',
        isLight ? 'text-themes-black-100' : 'text-themes-white-100',
        'h-10 items-center'
      )}
    >
      <img
        src={`/src/stories/assets/ui-icons/ArrowLineRight.svg`}
        className='h-6 w-6 bg-transparent rounded-full arrow'
      />
      <img
        src={`/src/stories/assets/ui-icons/${Icon}.svg`}
        className='h-6 w-6 bg-transparent rounded-full'
      />
      <span className='flex flex-col w-[12.5rem] gap-1'>
        <span className='text-sm font-medium'>{title}</span>
      </span>
    </div>
  );
}

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

function AccordionBody({ item, isOpen }: { item: ItemProps; isOpen: boolean }) {
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
          className='flex flex-col gap-3'
          style={{
            pointerEvents: isOpen ? 'auto' : 'none',
            clipPath: 'inset(10% 50% 90% 50% round 10px)',
          }}
        >
          {item.children.map((item, index) => {
            return (
              <li className='block origin-[-20px_50%] pl-16' key={`li-${index}`}>
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
      >
        <Listitem item={item} isOpen={isOpen}/>
      </motion.header>

      <AccordionBody item={item} isOpen={isOpen} />

      {/* <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            // layout
            // key='content'
            // initial='collapsed'
            // animate='open'
            // exit='collapsed'
            // variants={{
            //   open: {  },
            //   collapsed: { },
            // }}
            // style={{ height: isOpen ? 'auto' : '0px' }}
            // transition={{
              // opacity: { duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] },
              // height: { duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] },
            //   layout: { duration: 0.8 },
            // }}
          >
          </motion.section>
        )}
      </AnimatePresence> */}
    </>
  );
};
