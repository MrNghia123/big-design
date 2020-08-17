import _typeof from "@babel/runtime/helpers/esm/typeof";
export var isClient = (typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object';
export var isProduction = process.env.NODE_ENV === 'production';