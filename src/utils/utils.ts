import { IBaseBox } from '../components';
type NullOrUndefined = null | undefined;

export const is = {
  function: (v: unknown): v is Function => typeof v === 'function',
  number: (v: unknown): v is number => typeof v === 'number',
  notExist: (v: unknown): v is NullOrUndefined =>
    v === undefined || v === null,
};

export const getRefProp = (takeRef?: IBaseBox['ref']) =>
  takeRef
    ? {
        ref: takeRef,
      }
    : {};
