import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { FadeInScreenText } from '../FadeInScreenText';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/FadeInScreen',
  component: FadeInScreenText,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof FadeInScreenText>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FadeInScreenText> = (args) => <FadeInScreenText {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  delay: 1500,
  duration: 500,
  children: 'Fading in'
};

