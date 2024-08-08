import type { Meta, StoryObj } from '@storybook/react';

import { Sidebar } from '../components/Sidebar';

const meta = {
  title: 'Components/Sidebar',
  component: Sidebar,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  args: {},
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AccordionSidebar: Story = {
  args: {
    backgroundColor: 'dark'
  },
};

// export const Light: Story = {
//   args: {
//     backgroundColor: 'light'
//   },
// };
