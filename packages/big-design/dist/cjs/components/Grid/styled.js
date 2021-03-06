"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledGrid = void 0;

var _bigDesignTheme = require("@bigcommerce/big-design-theme");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _mixins = require("../../mixins");

var _Box = require("../Box");

var _withGrid = require("./withGrid");

// TODO: Remove the `forwardedAs` manual prop definition when @types get updated
var StyledGrid = /*#__PURE__*/(0, _styledComponents.default)(_Box.Box).withConfig({
  displayName: "styled__StyledGrid",
  componentId: "sv7ojr-0"
})(["", " display:grid;", ""], (0, _withGrid.withGridedContainer)(), (0, _mixins.withDisplay)());
exports.StyledGrid = StyledGrid;
StyledGrid.defaultProps = {
  theme: _bigDesignTheme.theme,
  gridGap: _bigDesignTheme.theme.spacing.medium
};