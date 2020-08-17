"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withTransition = void 0;

var _styledComponents = require("styled-components");

// todo: timings and easings should be moved into big-design-theme
var Timings = {
  short: '150ms'
};
var Easings = {
  hover: 'ease-out'
};

var withTransition = function withTransition(properties) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Timings.short;
  var ease = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Easings.hover;
  return (0, _styledComponents.css)(["transition:all ", " ", ";transition-property:", ";"], duration, ease, properties.join(', '));
};

exports.withTransition = withTransition;