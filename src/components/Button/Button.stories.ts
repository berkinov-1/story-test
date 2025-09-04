import type {Meta, StoryObj} from "@storybook/vue3-vite"
import { within, expect, fn } from "storybook/test";
import Button from "./Button.vue"

const meta: Meta<typeof Button> = {
  title: 'Base/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      codePanel: true
    }
  },
  args: {
    onClick: fn()
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
  },
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

export const Disabled: Story = {
  args: {
    label: "Disabled Button",
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.findByRole("button", { name: "Disabled Button" });

    // Проверяем, что кнопка отключена
    expect(button).toBeDisabled();
    expect(button).toHaveStyle("cursor: not-allowed;");
  },
};