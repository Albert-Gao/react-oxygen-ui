import React from 'react';
import { IBaseBoxWithTakeRef, Responsive } from '../Box/BaseBox.type';
declare type InputTypes = 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week';
export interface IInput extends IBaseBoxWithTakeRef {
    type?: InputTypes;
    disabled?: boolean;
    width?: Responsive;
    height?: Responsive;
    value?: string | number;
    placeholder?: string | number;
    name?: string;
    onChange?: React.ReactEventHandler;
    onBlur?: React.ReactEventHandler;
}
export declare const Input: React.FC<IInput>;
export {};
