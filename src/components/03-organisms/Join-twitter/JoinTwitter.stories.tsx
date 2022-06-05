import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { JoinTwitter } from './JoinTwitter';

export default {
  title: '03 Organisms/JoinTwitter',
  component: JoinTwitter,
} as ComponentMeta<typeof JoinTwitter>;

const Template: ComponentStory<typeof JoinTwitter> = () => <JoinTwitter />;

export const joinTwitter = Template.bind({});
