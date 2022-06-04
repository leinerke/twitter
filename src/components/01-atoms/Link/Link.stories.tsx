import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Link, LinkColor } from './Link';

export default {
  title: '01 Atoms/Link',
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = args => (
  <Link {...args}>
    Link
  </Link>
);

export const link = Template.bind({});
link.args = { href: 'https://www.google.com', color: LinkColor.primary };
