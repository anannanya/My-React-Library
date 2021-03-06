import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../styles/index.scss'
import AutoComplete from './index';

export default {
  title: 'AutoComplete',
  component: AutoComplete,

} as ComponentMeta<typeof AutoComplete>;

const Template: ComponentStory<typeof AutoComplete> = (args) => <AutoComplete {...args} />;

const lakers = ['bradley', 'pope', 'caruso', 'cook', 'cousins', 'james', 'AD', 'green', 'howard', 'kuzma', 'McGee', 'rando']
const lakersWithNumber = [
  { value: 'bradley', number: 11 },
  { value: 'pope', number: 1 },
  { value: 'caruso', number: 4 },
  { value: 'cook', number: 2 },
  { value: 'cousins', number: 15 },
  { value: 'james', number: 23 },
  { value: 'AD', number: 3 },
  { value: 'green', number: 14 },
  { value: 'howard', number: 39 },
  { value: 'kuzma', number: 0 },
]
const handleFetch1 = (query: string) => {
  return lakers.filter(name => name.includes(query)).map(name => ({ value: name }))
}
// const handleFetch2 = (query: string) => {
//   return lakersWithNumber.filter(player => player.value.includes(query))
// }
const handleFetch3 = (query: string) => {
  return fetch(`https://api.github.com/search/users?q=${query}`)
    .then(res => res.json())
    .then(({ items }) => {
      console.log(items)
      if (items) {
        return items.slice(0, 10).map((item: any) => ({ value: item.login, ...item }))
      } else {
        return [];
      }
    })
}

export const autoComplete = Template.bind({});
autoComplete.args = {
  fetchSuggestions: handleFetch1,
  placeholder: "输入湖人队球员英文名"
};


export const 异步请求Github用户名 = Template.bind({});
异步请求Github用户名.args = {
  fetchSuggestions: handleFetch3,
  placeholder: "请输入Github用户名"
};



