import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, ButtonModifier } from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

export default {
  title: '01 Atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => (
  <Button {...args}>
    <FontAwesomeIcon icon={faTwitter} className="pr-2" />
    Button
  </Button>
);

export const button = Template.bind({});
button.args = { modifier: ButtonModifier.primary };
