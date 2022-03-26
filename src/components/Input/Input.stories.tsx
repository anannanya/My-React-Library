import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../styles/index.scss'
import Input from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Input',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const input = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
input.args = {
  placeholder: '朴实无华input',
  style: { width: "300px" }
};

export const 带图标的Input = Template.bind({});
带图标的Input.args = {
  icon: "search",
  style: { width: "300px" }
};

export const 带前后缀的Input = Template.bind({});
带前后缀的Input.args = {
  prepend: "http://",
  append: '.com',
  style: { width: "300px" }
};




