"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.is = {
    function: (v) => typeof v === 'function',
    number: (v) => typeof v === 'number',
    notExist: (v) => v === undefined || v === null,
};
exports.getRefProp = (takeRef) => takeRef
    ? {
        ref: takeRef,
    }
    : {};
