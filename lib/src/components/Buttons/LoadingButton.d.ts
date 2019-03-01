import React from 'react';
import { IBaseBoxWithTakeRef } from '../Box/BaseBox.type';
import { IButton } from './Button';
import { INoDefaultHoverCSS } from './shared';
export interface ILoadingButton extends IBaseBoxWithTakeRef, INoDefaultHoverCSS, IButton {
    isLoading?: boolean;
}
export declare const LoadingButton: React.FC<ILoadingButton>;
