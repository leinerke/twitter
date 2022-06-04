import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Divider } from './Divider';

export default {
  title: '01 Atoms/Divider',
  component: Divider,
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = args => (
  <Divider {...args}>
    Divider
  </Divider>
);

export const divider = Template.bind({});
