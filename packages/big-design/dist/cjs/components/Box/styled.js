"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledBox = void 0;

var _bigDesignTheme = require("@bigcommerce/big-design-theme");

var _polished = require("polished");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _mixins = require("../../mixins");

var StyledBox = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "styled__StyledBox",
  componentId: "sj5f1m-0"
})(["", " ", " ", " box-sizing:border-box;", ";", ";", ";", ";", ";", ";", ";", ";", ";"], (0, _mixins.withDisplay)(), (0, _mixins.withMargins)(), (0, _mixins.withPaddings)(), function (_ref) {
  var clearfix = _ref.clearfix;
  return clearfix && (0, _polished.clearFix)();
}, function (_ref2) {
  var backgroundColor = _ref2.backgroundColor,
      theme = _ref2.theme;
  return backgroundColor && (0, _styledComponents.css)(["background-color:", ";"], theme.colors[backgroundColor]);
}, function (_ref3) {
  var shadow = _ref3.shadow,
      theme = _ref3.theme;
  return shadow && theme.shadow[shadow];
}, function (_ref4) {
  var border = _ref4.border,
      theme = _ref4.theme;
  return border && (0, _styledComponents.css)(["border:", ";"], theme.border[border]);
}, function (_ref5) {
  var borderTop = _ref5.borderTop,
      theme = _ref5.theme;
  return borderTop && (0, _styledComponents.css)(["border-top:", ";"], theme.border[borderTop]);
}, function (_ref6) {
  var borderRight = _ref6.borderRight,
      theme = _ref6.theme;
  return borderRight && (0, _styledComponents.css)(["border-right:", ";"], theme.border[borderRight]);
}, function (_ref7) {
  var borderBottom = _ref7.borderBottom,
      theme = _ref7.theme;
  return borderBottom && (0, _styledComponents.css)(["border-bottom:", ";"], theme.border[borderBottom]);
}, function (_ref8) {
  var borderLeft = _ref8.borderLeft,
      theme = _ref8.theme;
  return borderLeft && (0, _styledComponents.css)(["border-left:", ";"], theme.border[borderLeft]);
}, function (_ref9) {
  var borderRadius = _ref9.borderRadius,
      theme = _ref9.theme;
  return borderRadius && (0, _styledComponents.css)(["border-radius:", ";"], theme.borderRadius[borderRadius]);
});

exports.StyledBox = StyledBox;
StyledBox.defaultProps = {
  theme: _bigDesignTheme.theme
};