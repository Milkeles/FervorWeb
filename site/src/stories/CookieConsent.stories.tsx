import type { Meta, StoryObj } from '@storybook/react'
import { CookieConsent } from '../components/CookieConsent'
import '../index.css'

const meta: Meta<typeof CookieConsent> = {
  title: 'CookieConsent',
  component: CookieConsent,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'small', 'minimal'],
    },
    mode: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof CookieConsent>

export const Default: Story = {
  args: {
    variant: 'default',
    mode: true,
  },
}