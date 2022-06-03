import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Heading } from './Heading';

export default {
  title: '01 Atoms/Heading',
  component: Heading,
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = args => (
  <Heading {...args}>
    Heading {args.level}
  </Heading>
);

export const heading = Template.bind({});
heading.args = { level: 1 };
