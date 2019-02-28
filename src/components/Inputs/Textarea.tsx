import React from 'react';
import { IInput, Input } from './Input';

export const Textarea: React.FC<IInput> = props => (
  <Input as="textarea" {...props} />
);
