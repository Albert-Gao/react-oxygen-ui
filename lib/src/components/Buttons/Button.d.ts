import React from 'react';
import { IBaseBoxWithTakeRef } from '../Box/BaseBox.type';
import { INoDefaultHoverCSS } from './shared';
export interface IButton extends IBaseBoxWithTakeRef, INoDefaultHoverCSS {
    disabled?: boolean;
}
export declare const Button: React.FC<IButton>;
