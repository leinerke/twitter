import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SignIn } from './SignIn';

export default {
  title: '02 Molecules/SignIn',
  component: SignIn,
} as ComponentMeta<typeof SignIn>;

const Template: ComponentStory<typeof SignIn> = () => <SignIn />;

export const signIn = Template.bind({});
