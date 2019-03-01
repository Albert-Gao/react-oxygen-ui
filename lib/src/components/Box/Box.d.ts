import React from 'react';
import { IBaseBoxWithTakeRef, Responsive } from './BaseBox.type';
interface IA11Y {
    a11yTitle?: string;
}
export interface IBox extends IBaseBoxWithTakeRef, IA11Y {
    fill?: 'horizontal' | 'vertical' | true | false;
    gap?: Responsive;
}
export declare const Box: React.FC<IBox>;
export {};
