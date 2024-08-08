import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, expect, queryByText, queryByTestId } from '@storybook/test';

import { OverviewPage } from '../components/OverviewPage';

const meta = {
  title: 'Minimal/OverviewPage',
  component: OverviewPage,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof OverviewPage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const LoggedIn: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const sidebarBtn = canvas.getByLabelText('sidebar-btn');
    await expect(sidebarBtn).toBeInTheDocument();
    await userEvent.click(sidebarBtn);
    await expect(canvas.getByText('ECommerce')?.textContent).toContain('ECommerce');
  },
};
