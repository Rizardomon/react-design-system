import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { Signin } from './Signin';

export default {
  title: 'Pages/Signin',
  component: Signin,
  args: {},
} as Meta;

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    userEvent.type(
      canvas.getByPlaceholderText('email@example.com'),
      'richard@email.com'
    );
    userEvent.type(canvas.getByPlaceholderText('********'), 'senha1234');

    userEvent.click(canvas.getByRole('button'));

    await waitFor(() => {
      return expect(canvas.getByText('Login realizado!')).toBeInTheDocument();
    });
  },
};
