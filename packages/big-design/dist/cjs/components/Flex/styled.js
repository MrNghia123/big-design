"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledFlex = void 0;

var _bigDesignTheme = require("@bigcommerce/big-design-theme");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _mixins = require("../../mixins");

var _Box = require("../Box");

var _withFlex = require("./withFlex");

// TODO: Remove the `forwardedAs` manual prop definition when @types get updated
var StyledFlex = /*#__PURE__*/(0, _styledComponents.default)(_Box.Box).withConfig({
  displayName: "styled__StyledFlex",
  componentId: "hcvk8l-0"
})(["", " display:flex;", ""], (0, _withFlex.withFlexedContainer)(), (0, _mixins.withDisplay)());
exports.StyledFlex = StyledFlex;
StyledFlex.defaultProps = {
  alignContent: 'stretch',
  alignItems: 'stretch',
  flexDirection: {
    mobile: 'column',
    tablet: 'row'
  },
  flexWrap: 'nowrap',
  justifyContent: 'flex-start',
  theme: _bigDesignTheme.theme
};