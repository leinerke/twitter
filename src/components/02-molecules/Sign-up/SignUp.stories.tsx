import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SignUp } from './SignUp';

export default {
  title: '02 Molecules/SignUp',
  component: SignUp,
} as ComponentMeta<typeof SignUp>;

const Template: ComponentStory<typeof SignUp> = () => <SignUp />;

export const signUp = Template.bind({});
