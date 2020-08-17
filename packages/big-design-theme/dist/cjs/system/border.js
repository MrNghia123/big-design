"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createBorderRadius = exports.createBorder = void 0;

var _styledComponents = require("styled-components");

var _helpers = require("../helpers");

var createBorder = function createBorder() {
  return {
    box: (0, _styledComponents.css)(["", ";"], function (_ref) {
      var theme = _ref.theme;
      return "1px solid ".concat(theme.colors.secondary30);
    }),
    boxError: (0, _styledComponents.css)(["", ";"], function (_ref2) {
      var theme = _ref2.theme;
      return "1px solid ".concat(theme.colors.danger40);
    }),
    none: 'none'
  };
};

exports.createBorder = createBorder;

var createBorderRadius = function createBorderRadius() {
  return {
    circle: '50%',
    none: 0,
    normal: (0, _helpers.remCalc)(4)
  };
};

exports.createBorderRadius = createBorderRadius;