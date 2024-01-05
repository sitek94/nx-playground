import type { Meta, StoryObj } from '@storybook/react';
import { Button as ButtonComponent } from './button';

const meta: Meta<typeof ButtonComponent> = {
  component: ButtonComponent,
  title: 'Button',
};
export default meta;
type Story = StoryObj<typeof ButtonComponent>;

export const Button: Story = {
  args: {
    children: 'Default',
  },
};
