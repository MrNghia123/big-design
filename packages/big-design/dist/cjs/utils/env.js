"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isProduction = exports.isClient = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var isClient = (typeof window === "undefined" ? "undefined" : (0, _typeof2.default)(window)) === 'object';
exports.isClient = isClient;
var isProduction = process.env.NODE_ENV === 'production';
exports.isProduction = isProduction;