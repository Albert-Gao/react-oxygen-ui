import React from 'react';
import { IBaseBoxWithTakeRef } from '../Box/BaseBox.type';
import { IButton } from './Button';
import { INoDefaultHoverCSS } from './shared';
export interface IFlatButton extends IBaseBoxWithTakeRef, INoDefaultHoverCSS, IButton {
}
export declare const FlatButton: React.FC<IFlatButton>;
