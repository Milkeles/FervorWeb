import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../components/ui/button'
import '../index.css'

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'radio',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link', 'icon'],
    },
    size: {
      control: 'radio',
      options: ['default', 'xs', 'sm', 'lg', 'icon', 'icon-xs', 'icon-sm', 'icon-lg'],
    },
  }
}

export default meta
type Story = StoryObj<typeof Button>

export const Buttons: Story = {
  args: {
    variant: 'default',
    size: 'default',
    children: 'Press me',
    asChild: false
  }
}