import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useCallback, useState } from 'react';
import { FadeInAndOutText } from '../FadeInAndOutText';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/FadeInAndOutText',
  component: FadeInAndOutText,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof FadeInAndOutText>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FadeInAndOutText> = (args) => {
  const [showText, setShowText] = useState(false);
  const toggleText = useCallback(() => setShowText((prev) => !prev), []);
  return (
    <>
      <FadeInAndOutText {...args} display={showText} />
      <button onClick={toggleText}>Toggle text</button>
    </>
  )
}

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  duration: 500,
  text: 'Fading text'
};

