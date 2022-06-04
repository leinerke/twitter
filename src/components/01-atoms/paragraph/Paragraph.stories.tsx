import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Paragraph, ParagraphSize } from './Paragraph';

export default {
  title: '01 Atoms/Paragraph',
  component: Paragraph,
} as ComponentMeta<typeof Paragraph>;

const Template: ComponentStory<typeof Paragraph> = args => (
  <Paragraph {...args}>
    Paragraph {args.size}
  </Paragraph>
);

export const paragraph = Template.bind({});
paragraph.args = { size: ParagraphSize.base };
