"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledFlexItem = void 0;

var _bigDesignTheme = require("@bigcommerce/big-design-theme");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Box = require("../../Box");

var _withFlex = require("../withFlex");

// TODO: Remove the `forwardedAs` manual prop definition when @types get updated
var StyledFlexItem = /*#__PURE__*/(0, _styledComponents.default)(_Box.Box).withConfig({
  displayName: "styled__StyledFlexItem",
  componentId: "smjqtt-0"
})(["", ""], (0, _withFlex.withFlexedItems)());
exports.StyledFlexItem = StyledFlexItem;
StyledFlexItem.defaultProps = {
  alignSelf: 'auto',
  flexBasis: 'auto',
  flexGrow: 0,
  flexOrder: 0,
  flexShrink: 1,
  theme: _bigDesignTheme.theme
};