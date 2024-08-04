import type { Meta, StoryObj } from '@storybook/react';

import { DevicesStatChart } from './DevicesStatChart';


const data = [
    {
      name: 'iOS',
      current_year: 40000,
      prev_year: 24000,
      amt: 2400,
      color:'rgba(168, 197, 218, 1)'
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
      color: 'rgba(177, 227, 255, 1)'
    },
  ];

const meta = {
  title: 'Example/DevicesStatChart',
  component: DevicesStatChart,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  args: {
  },
} satisfies Meta<typeof DevicesStatChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  args: {
    backgroundColor: 'dark',
    data:data
  },
};

export const Light: Story = {
  args: {
    backgroundColor: 'light',
    data:data
  },
};
