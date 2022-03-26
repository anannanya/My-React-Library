import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../styles/index.scss'
import Icon from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Icon',
  component: Icon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

} as ComponentMeta<typeof Icon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  icon: "check",
  size: "3x",
  theme: "success"
};

export const 更多行为的Icon = Template.bind({});
更多行为的Icon.args = {
  icon: "spinner",
  size: "3x",
  theme: "primary",
  spin: true
};



