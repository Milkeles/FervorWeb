import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent } from '../components/ui/Card'
import '../index.css'

const meta: Meta<typeof Card> = {
  title: 'Card',
  component: Card,
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
  render: () => (
    <Card className="w-96 pt-0 overflow-hidden">
        <img
        src="https://avatar.vercel.sh/shadcn1"
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      />
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardAction>Action</CardAction>
        <CardDescription>This is a card description explaining what this card is about.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the main content of the card. You can put anything here.</p>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-muted-foreground">Card footer content</p>
      </CardFooter>
    </Card>
  )
}