import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../styles/index.scss'
import Button from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  btnType: "primary",
  children: 'primary',
  size: "lg"
};

export const Danger = Template.bind({});
Danger.args = {
  btnType: "danger",
  children: 'danger',
  size: "sm"
};

export const Link = Template.bind({});
Link.args = {
  btnType: "link",
  children: 'link',
};

export const LinkDisable = Template.bind({});
LinkDisable.args = {
  btnType: "link",
  children: 'LinkDisable',
  disabled: true,
};


