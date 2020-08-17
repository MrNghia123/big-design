"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withDisplay = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _bigDesignTheme = require("@bigcommerce/big-design-theme");

var _styledComponents = require("styled-components");

var withDisplay = function withDisplay() {
  return (0, _styledComponents.css)(["", ";"], function (_ref) {
    var display = _ref.display,
        theme = _ref.theme;
    return display && getDisplayStyles(display, theme, 'display');
  });
};

exports.withDisplay = withDisplay;

var getDisplayStyles = function getDisplayStyles(displayProp, theme, cssKey) {
  if ((0, _typeof2.default)(displayProp) === 'object') {
    return getResponsiveDisplay(displayProp, theme, cssKey);
  }

  if (typeof displayProp === 'string' || typeof displayProp === 'number') {
    return getSimpleDisplay(displayProp, cssKey);
  }

  return [];
};

var getSimpleDisplay = function getSimpleDisplay(displayProp, cssKey) {
  return (0, _styledComponents.css)(["", ":", ""], cssKey, displayProp);
};

var getResponsiveDisplay = function getResponsiveDisplay(displayProp, theme, cssKey) {
  var breakpointKeys = Object.keys(displayProp).sort(function (firstBreakpoint, secondBreakpoint) {
    return _bigDesignTheme.breakpointsOrder.indexOf(firstBreakpoint) - _bigDesignTheme.breakpointsOrder.indexOf(secondBreakpoint);
  });
  return breakpointKeys.map(function (breakpointKey) {
    return (0, _styledComponents.css)(["", "{", "}"], theme.breakpoints[breakpointKey], getSimpleDisplay(displayProp[breakpointKey], cssKey));
  });
};