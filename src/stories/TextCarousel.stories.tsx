import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextCarousel } from '../TextCarousel';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/TextCarousel',
  component: TextCarousel,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof TextCarousel>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TextCarousel> = (args) => <TextCarousel {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  options: [
    'first',
    'second',
    'third',
    'fourth'
  ],
  optionDuration: 2500
};

