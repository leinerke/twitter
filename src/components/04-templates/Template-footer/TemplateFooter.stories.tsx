import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TemplateFooter } from './TemplateFooter';

export default {
  title: '04 Templates/TemplateFooter',
  component: TemplateFooter,
} as ComponentMeta<typeof TemplateFooter>;

const Template: ComponentStory<typeof TemplateFooter> = () => (
  <TemplateFooter>
    content
  </TemplateFooter>
);

export const templateFooter = Template.bind({});
