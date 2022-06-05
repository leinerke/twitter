import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Login } from './Login';

export default {
  title: '05 Pages/Login',
  component: Login,
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = () => <Login />;

export const login = Template.bind({});
