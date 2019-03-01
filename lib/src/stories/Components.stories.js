"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const addon_knobs_1 = require("@storybook/addon-knobs");
const react_1 = require("@storybook/react");
const Box_story_1 = require("./ComponentsStories/Box.story");
const Button_story_1 = require("./ComponentsStories/Button.story");
const FlatButton_story_1 = require("./ComponentsStories/FlatButton.story");
const Heading_story_1 = require("./ComponentsStories/Heading.story");
const Image_story_1 = require("./ComponentsStories/Image.story");
const Input_story_1 = require("./ComponentsStories/Input.story");
const LoadingButton_story_1 = require("./ComponentsStories/LoadingButton.story");
const Paragraph_story_1 = require("./ComponentsStories/Paragraph.story");
const Text_story_1 = require("./ComponentsStories/Text.story");
const Textarea_story_1 = require("./ComponentsStories/Textarea.story");
react_1.storiesOf('Components', module)
    .addDecorator(addon_knobs_1.withKnobs)
    .addWithJSX('Box', Box_story_1.BoxStory)
    .addWithJSX('Text', Text_story_1.TextStory, {
    displayName: 'Text',
})
    .addWithJSX('Paragraph', Paragraph_story_1.ParagraphStory, {
    displayName: 'Paragraph',
})
    .addWithJSX('Heading', Heading_story_1.HeadingStory)
    .addWithJSX('Image', Image_story_1.ImageStory, { displayName: 'Image' })
    .addWithJSX('Button', Button_story_1.ButtonStory)
    .addWithJSX('LoadingButton', LoadingButton_story_1.LoadingButtonStory)
    .addWithJSX('FlatButton', FlatButton_story_1.FlatButtonStory)
    .addWithJSX('Input', Input_story_1.InputStory, { displayName: 'Input' })
    .addWithJSX('Textarea', Textarea_story_1.TextareaStory, { displayName: 'Textarea' });
