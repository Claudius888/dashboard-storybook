import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { GradientStatCard, statItem } from '../components/GradientStatCard';

const meta = {
  title: 'Components/GradientStatCard',
  component: GradientStatCard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof GradientStatCard>;

export default meta;
type Story = StoryObj<typeof meta>;
const view: statItem = {
  title: 'Views',
  icon: 'up',
  primaryStat: '7,554',
  secondaryStat: '+11.02%',
  backgroundColor: 'blue',
};

const visits: statItem = {
  title: 'Visits',
  icon: 'down',
  primaryStat: '3,655',
  secondaryStat: '-0.03%',
  backgroundColor: 'green',
};
export const Primary: Story = {
  args: {
    item: view,
  },
};

export const Green: Story = {
  args: {
    item: visits,
  },
};
