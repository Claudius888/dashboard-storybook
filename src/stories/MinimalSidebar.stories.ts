import type { Meta, StoryObj } from '@storybook/react';
import { MinimalSidebar } from '../components/MinimalSidebar';
import { fn } from '@storybook/test';

const meta = {
  title: 'Minimal/MinimalSidebar',
  component: MinimalSidebar,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    cycleOpen: fn()
  },
} satisfies Meta<typeof MinimalSidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Close: Story = {
  args: {
    backgroundColor: 'dark',
    open: false,
  },
};

export const Open: Story = {
  args: {
    backgroundColor: 'light',
    open: true,
  },
};
