"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledPaginationContainer = void 0;

var _bigDesignTheme = require("@bigcommerce/big-design-theme");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Flex = require("../../Flex");

var StyledPaginationContainer = /*#__PURE__*/(0, _styledComponents.default)(_Flex.FlexItem).withConfig({
  displayName: "styled__StyledPaginationContainer",
  componentId: "sc-1w0s9nk-0"
})(["margin-left:auto;"]);
exports.StyledPaginationContainer = StyledPaginationContainer;
StyledPaginationContainer.defaultProps = {
  theme: _bigDesignTheme.theme
};