"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fadeIn = exports.rotate = exports.loading = void 0;

var _styledComponents = require("styled-components");

var loading = /*#__PURE__*/(0, _styledComponents.keyframes)(["from{left:-10%;;}25%{width:50%;}to{left:100%;}"]);
exports.loading = loading;
var rotate = /*#__PURE__*/(0, _styledComponents.keyframes)(["from{transform:rotate(0deg);}to{transform:rotate(360deg);}"]);
exports.rotate = rotate;
var fadeIn = /*#__PURE__*/(0, _styledComponents.keyframes)(["from{opacity:0;}to{opacity:1;}"]);
exports.fadeIn = fadeIn;