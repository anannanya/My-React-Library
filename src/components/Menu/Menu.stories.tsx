import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../styles/index.scss'
import Menu from './index';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Menu',
  component: Menu,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

} as ComponentMeta<typeof Menu>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Menu> = (args) => (
  <Menu {...args}>
    <Menu.Item >
      Link1
    </Menu.Item>

    <Menu.SubMenu title='hh'>
      <Menu.Item >
        link1
      </Menu.Item>
      <Menu.Item >
        link2
      </Menu.Item>
      <Menu.Item >
        link3
      </Menu.Item>
    </Menu.SubMenu>

    <Menu.Item >
      Link2
    </Menu.Item>
    <Menu.Item >
      Link3
    </Menu.Item>
  </Menu>
)

export const 横向menu = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
横向menu.args = {
  style: { width: "300px" }
};

export const 纵向menu = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
纵向menu.args = {
  mode: 'vertical',
};
export const 纵向默认展开menu = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
纵向默认展开menu.args = {
  mode: 'vertical',
  defaultOpenSubMenus: ['1']
};





