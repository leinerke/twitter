import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { List, ListStyle } from './List';
import { Link, LinkColor } from '../Link/Link';
import { Paragraph, ParagraphSize } from '../paragraph/Paragraph';

export default {
  title: '01 Atoms/List',
  component: List,
} as ComponentMeta<typeof List>;

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Template: ComponentStory<typeof List> = args => (
  <List {...args}>
    {items.map((item, key) => (
      <li key={key}>
        <Paragraph size={ParagraphSize.small}>
          <Link href={'https://www.google.com'} color={LinkColor.footer}>item #{item}</Link>
        </Paragraph>
      </li>
    ))}
  </List>
);

export const list = Template.bind({});
list.args = { style: ListStyle.horizontal };
