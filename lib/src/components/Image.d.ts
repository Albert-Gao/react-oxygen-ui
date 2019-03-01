import React from 'react';
import { IBaseBoxWithTakeRef } from './Box/BaseBox.type';
export interface IImage extends IBaseBoxWithTakeRef {
    src: string;
    alt?: string;
}
export declare const Image: React.FC<IImage>;
