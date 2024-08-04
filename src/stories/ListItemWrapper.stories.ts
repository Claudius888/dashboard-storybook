import type { Meta, StoryObj } from '@storybook/react';

import { ListItemWrapper } from './ListItemWrapper';
import { Bug } from '../ui/Bug';
import { Broadcast } from '../ui/Broadcast';

const data = [
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

const contactData = [
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

const meta = {
  title: 'Example/ListItemWrapper',
  component: ListItemWrapper,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  args: {},
} satisfies Meta<typeof ListItemWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  args: {
    SectionTitle: 'Notification',
    backgroundColor: 'dark',
    data: data,
  },
};

export const Light: Story = {
  args: {
    SectionTitle: 'Notification',
    backgroundColor: 'light',
    data: data,
  },
};

export const Contacts: Story = {
    args: {
      SectionTitle: 'Contacts',
      backgroundColor: 'dark',
      data: contactData,
    },
  };
