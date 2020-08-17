"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shadow = void 0;

var _styledComponents = require("styled-components");

var _helpers = require("../helpers");

var shadow = {
  floating: (0, _styledComponents.css)(["border-radius:", ";box-shadow:", ";"], function (_ref) {
    var theme = _ref.theme;
    return theme.borderRadius.normal;
  }, function (_ref2) {
    var theme = _ref2.theme;
    return "0px 2px 12px ".concat((0, _helpers.createRGBA)(theme.colors.secondary70, 0.2));
  }),
  raised: (0, _styledComponents.css)(["border-radius:", ";box-shadow:", ";"], function (_ref3) {
    var theme = _ref3.theme;
    return theme.borderRadius.normal;
  }, function (_ref4) {
    var theme = _ref4.theme;
    return "0px 1px 6px ".concat((0, _helpers.createRGBA)(theme.colors.secondary70, 0.2));
  })
};
exports.shadow = shadow;