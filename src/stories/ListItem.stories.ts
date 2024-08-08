import type { Meta, StoryObj } from '@storybook/react';

import { ListItem } from '../components/ListItem';
import { Bug } from '../ui/Bug';


const meta = {
  title: 'Example/ListItem',
  component: ListItem,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  args: {},
} satisfies Meta<typeof ListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

const data = {
  title: 'You fixed a bug',
  subtitle: '59 minutes ago',
  Icon: Bug,
}

export const Dark: Story = {
  args: {
    item: data,
  },
};

export const Light: Story = {
  args: {
    item: data,
  },
};
