import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Illustration } from './Illustration';

export default {
  title: '02 Molecules/Illustration',
  component: Illustration,
} as ComponentMeta<typeof Illustration>;

const Template: ComponentStory<typeof Illustration> = () => (
  <div className="w-screen h-screen max-w-full max-h-full">
    <Illustration />
  </div>
);

export const illustration = Template.bind({});
