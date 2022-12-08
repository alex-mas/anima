import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { OnScreenAnimation } from '../OnScreenAnimation';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/OnScreenAnimation',
  component: OnScreenAnimation,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof OnScreenAnimation>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof OnScreenAnimation> = (args) => <OnScreenAnimation {...args} />;

const children = <div>
  Content
</div>

export const Fade = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Fade.args = {
  before: { opacity: 0 },
  after: { opacity: 1 },
  duration: 1500,
  children
};

export const Color = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Color.args = {
  before: { color: 'red' },
  after: { color: 'blue' },
  duration: 1500,
  children
};


export const Size = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Size.args = {
  before: { fontSize: '1rem' },
  after: { fontSize: '5rem' },
  duration: 1500,
  children
};

