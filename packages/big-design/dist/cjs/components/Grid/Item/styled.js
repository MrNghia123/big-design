"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledGridItem = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Box = require("../../Box");

var _withGrid = require("../withGrid");

// TODO: Remove the `forwardedAs` manual prop definition when @types get updated
var StyledGridItem = /*#__PURE__*/(0, _styledComponents.default)(_Box.Box).withConfig({
  displayName: "styled__StyledGridItem",
  componentId: "sc-9gcq2s-0"
})(["", ""], (0, _withGrid.withGridedItems)());
exports.StyledGridItem = StyledGridItem;