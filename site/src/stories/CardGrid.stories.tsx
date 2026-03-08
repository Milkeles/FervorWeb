import type { Meta, StoryObj } from '@storybook/react'
import { CardGrid } from '../components/CardGrid'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card'
import '../index.css'

const meta: Meta<typeof CardGrid> = {
  title: 'CardGrid',
  component: CardGrid,
  parameters: {
    docs: {
      description: {
        component: 'A layout component that arranges cards in a responsive grid or a horizontal carousel.',
      },
    },
  },
  argTypes: {
    columns: {
      control: 'select',
      options: [1, 2, 3, 4],
      description: 'Number of columns in the grid, and number of visible cards in the carousel at once.',
    },
    carousel: {
      control: 'boolean',
      description: 'When true, displays cards in a horizontally scrollable single-row carousel instead of a grid.',
    },
    children: {
      table: { disable: true },
    },
  },
}
export default meta
type Story = StoryObj<typeof CardGrid>

const SampleCard = ({ title }: { title: string }) => (
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>This is a sample card description.</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground">Some content goes here.</p>
    </CardContent>
  </Card>
)

export const Default: Story = {
  args: {
    columns: 3,
    carousel: false,
  },
  render: ({ columns, carousel }) => (
    <div className={carousel ? 'px-12' : ''}>
      <CardGrid columns={columns} carousel={carousel}>
        <SampleCard title="Card One" />
        <SampleCard title="Card Two" />
        <SampleCard title="Card Three" />
        <SampleCard title="Card Four" />
        <SampleCard title="Card Five" />
        <SampleCard title="Card Six" />
        <SampleCard title="Card Seven" />
      </CardGrid>
    </div>
  )
}