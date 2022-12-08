import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { SlideInScreenText } from '../SlideInScreenText';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/SlideInScreenText',
  component: SlideInScreenText,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof SlideInScreenText>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SlideInScreenText> = (args) => <SlideInScreenText {...args} />;

export const Left = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Left.args = {
  delay: 1500,
  duration: 500,
  children: 'Fading in'
};


export const Right = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Right.args = {
  delay: 1500,
  duration: 500,
  fromLeft: false,
  children: 'Fading in'
};

