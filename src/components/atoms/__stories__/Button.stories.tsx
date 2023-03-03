import { faker } from '@faker-js/faker/locale/ja';
import Button from '../Button';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'atoms/Button',
  component: Button,
};

export default meta;

export const Default: StoryObj<typeof Button> = {
  args: {
    children: faker.lorem.paragraph(),
  },
};
