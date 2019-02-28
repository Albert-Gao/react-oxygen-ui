// @ts-ignore
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { BoxStory } from './ComponentsStories/Box.story';
import { ButtonStory } from './ComponentsStories/Button.story';
import { FlatButtonStory } from './ComponentsStories/FlatButton.story';
import { HeadingStory } from './ComponentsStories/Heading.story';
import { ImageStory } from './ComponentsStories/Image.story';
import { InputStory } from './ComponentsStories/Input.story';
import { LoadingButtonStory } from './ComponentsStories/LoadingButton.story';
import { ParagraphStory } from './ComponentsStories/Paragraph.story';
import { TextStory } from './ComponentsStories/Text.story';
import { TextareaStory } from './ComponentsStories/Textarea.story';

storiesOf('Components', module)
  .addDecorator(withKnobs)
  .addWithJSX('Box', BoxStory)
  .addWithJSX('Text', TextStory, {
    displayName: 'Text',
  })
  .addWithJSX('Paragraph', ParagraphStory, {
    displayName: 'Paragraph',
  })
  .addWithJSX('Heading', HeadingStory)
  .addWithJSX('Image', ImageStory, { displayName: 'Image' })
  .addWithJSX('Button', ButtonStory)
  .addWithJSX('LoadingButton', LoadingButtonStory)
  .addWithJSX('FlatButton', FlatButtonStory)
  .addWithJSX('Input', InputStory, { displayName: 'Input' })
  .addWithJSX('Textarea', TextareaStory, { displayName: 'Textarea' });
