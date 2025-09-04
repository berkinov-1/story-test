import type {Meta, StoryObj} from "@storybook/vue3-vite"
import Button from "./Button.vue"

const meta: Meta<typeof Button> = {
  title: 'Base/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      codePanel: true
    }
  }
}

export default meta

type Story = StoryObj<typeof Button>

export const PrimaryButton: Story = {
  args: {
    label: 'PrimaryButton',
    size: "medium"
  },
  argTypes: {
    size: {
      control: {
        type: "radio",
      },
      options: ["small", "large", "medium"],
    }
  }
}

export const RedButton: Story = {
  parameters: {

  },
  args: {
    label: 'RedButton',
    size: "medium",
    color: "red"
  },
  argTypes: {
    size: {
      control: {
        type: "radio",
      },
      options: ["small", "large", "medium"],
    }
  }
}