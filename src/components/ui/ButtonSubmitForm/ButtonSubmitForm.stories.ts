import type { Meta, StoryObj } from '@storybook/react';

import  ButtonSubmitForm  from './ButtonSubmitForm';

const meta = {
  title: 'Exemple/button-submit-form',
  component: ButtonSubmitForm,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color'},
  }
} satisfies Meta<typeof ButtonSubmitForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button'
  }
}
export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};


// export const Warning: Story = {
//   args: {
//     primary: true,
//     label: 'Delete now',
//     backgroundColor: 'red',
//   }
// };