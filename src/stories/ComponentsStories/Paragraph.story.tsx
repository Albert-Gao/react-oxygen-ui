import React from 'react';
import { Paragraph } from '../../components';
import { DEFAULT_SPACE } from '../../styles';
import { Knobs } from '../utils';

export const ParagraphStory = () => {
  return (
    <Paragraph
      m={DEFAULT_SPACE.medium}
      fontWeight={Knobs.fontWeightKnob()}
      size={Knobs.fontSizeKnob('size')}
    >
      To date our platform has delivered over 41 million health
      reminders for medical centres and practice teams across New
      Zealand. Vensa.com is designed to seamlessly take medical
      centres on a digital transformation journey. This journey looks
      to transforms the current way of working to provide new
      efficiencies and to facilitate more access, provide more
      convenience and create more affordable health services. We are
      currently on a journey with 70% of General Practice in New
      Zealand to take them through this exciting new phase of
      medicine. We will also to be taking this journey to Australia in
      2018.
    </Paragraph>
  );
};
