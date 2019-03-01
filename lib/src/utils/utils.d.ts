/// <reference types="react" />
export declare const is: {
    function: (v: unknown) => v is Function;
    number: (v: unknown) => v is number;
    notExist: (v: unknown) => v is null | undefined;
};
export declare const getRefProp: (takeRef?: import("react").RefObject<any> | undefined) => {
    ref: import("react").RefObject<any>;
} | {
    ref?: undefined;
};
