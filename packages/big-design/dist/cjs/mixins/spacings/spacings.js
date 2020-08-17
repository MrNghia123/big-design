"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSpacingStyles = getSpacingStyles;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _bigDesignTheme = require("@bigcommerce/big-design-theme");

var _styledComponents = require("styled-components");

function getSpacingStyles(spacing, theme) {
  for (var _len = arguments.length, spacingKeys = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    spacingKeys[_key - 2] = arguments[_key];
  }

  if ((0, _typeof2.default)(spacing) === 'object') {
    return getResponsiveSpacings(spacing, theme, spacingKeys);
  }

  if (typeof spacing === 'string') {
    return getSimpleSpacings(spacing, theme, spacingKeys);
  }

  return (0, _styledComponents.css)([""]);
}

function getSimpleSpacings(spacing, theme, spacingKeys) {
  return spacingKeys.reduce(function (acc, spacingKey) {
    acc[spacingKey] = theme.spacing[spacing];
    return acc;
  }, {});
}

function getResponsiveSpacings(responsiveSpacing, theme, spacingKeys) {
  var breakpointKeys = Object.keys(responsiveSpacing).sort(function (a, b) {
    return _bigDesignTheme.breakpointsOrder.indexOf(a) - _bigDesignTheme.breakpointsOrder.indexOf(b);
  });
  return breakpointKeys.map(function (breakpointKey) {
    return (0, _styledComponents.css)(["", "{", "}"], theme.breakpoints[breakpointKey], getSimpleSpacings(responsiveSpacing[breakpointKey], theme, spacingKeys));
  });
}