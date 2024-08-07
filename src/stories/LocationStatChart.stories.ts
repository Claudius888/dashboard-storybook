import type { Meta, StoryObj } from '@storybook/react';

import { LocationStatChart } from '../components/LocationStatChart';


const data = [
    { name: 'United States', value: 38.6 },
    { name: 'Canada', value: 22.5 },
    { name: 'Mexico', value: 30.8 },
    { name: 'Other', value: 8.1 },
  ];

const meta = {
  title: 'Example/LocationStatChart',
  component: LocationStatChart,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  args: {
  },
} satisfies Meta<typeof LocationStatChart>;

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
