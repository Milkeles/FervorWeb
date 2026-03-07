import type { Meta, StoryObj } from '@storybook/react'
import { Footer } from '../components/Footer'
import '../index.css'

const meta: Meta<typeof Footer> = {
  title: 'Footer',
  component: Footer,
}

export default meta
type Story = StoryObj<typeof Footer>

export const Default: Story = {
  render: () => {
    
    return (
      <div className="bg-background min-h-24">
        <Footer />
      </div>
    )
  },
}