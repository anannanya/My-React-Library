import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../styles/index.scss'
import Upload from './index';
import Button from '../Button';
import Icon from '../Icon';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Upload',
  component: Upload,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

} as ComponentMeta<typeof Upload>;

const Template: ComponentStory<typeof Upload> = (args) => (
  <div style={{
    padding: '20px 40px',
    width: '500px'
  }}>
    <Upload {...args} >
      <Button btnType="primary" disabled={false} size="lg">
        点击上传
      </Button>
    </Upload>
  </div>
)
export const upload = Template.bind({});
upload.args = {
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  name: "file",
  drag: false,
};


const Template1: ComponentStory<typeof Upload> = (args) => (
  <div style={{
    padding: '20px 40px',
    width: '500px'
  }}>
    <Upload {...args} >
      <Button btnType="primary" disabled={false} size="lg">
        文件需小于50kb
      </Button>
    </Upload>
  </div>
)
export const 上传前检查 = Template1.bind({});
上传前检查.args = {
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  beforeUpload: (file: File) => {
    if (Math.round(file.size / 1024) > 50) {
      alert('file too big')
      return false;
    }
    return true;
  }
};


const Template2: ComponentStory<typeof Upload> = (args) => (
  <div style={{
    padding: '20px 40px',
    width: '500px'
  }}>
    <Upload {...args} >
      <Icon icon="upload" size="5x" theme="secondary" />
      <br />
      <p>Drag file over to upload</p>
    </Upload>
  </div>
)
export const 拖动上传 = Template2.bind({});
拖动上传.args = {
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  drag: true,
  multiple: true,
  data: { 'key': 'value' },
};



