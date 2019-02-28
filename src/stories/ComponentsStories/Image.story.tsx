import React from 'react';
import { Image } from '../../components';
import { DEFAULT_SPACE } from '../../styles';
import { Knobs } from '../utils';

export const ImageStory = () => (
  <Image
    m={DEFAULT_SPACE.xLarge}
    src="https://cdn-images-1.medium.com/max/1200/1*eXIBeNlLhz4Pe6vDrYkXLQ.png"
    height={Knobs.sizeKnob('height', 'xLarge')}
    width={Knobs.sizeKnob('width', 'xLarge')}
    alt="css3"
  />
);
