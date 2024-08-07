import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { UserChart } from '../components/UserChart';

const data = [
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

const meta = {
  title: 'Example/UserChart',
  component: UserChart,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof UserChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  args: {
    backgroundColor: 'dark',
    data: data
  },
};

export const Light: Story = {
  args: {
    backgroundColor: 'light',
    data: data
  },
};
