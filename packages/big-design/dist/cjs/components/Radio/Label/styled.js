"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledLabel = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _private = require("../../Typography/private");

var StyledLabel = /*#__PURE__*/(0, _styledComponents.default)(_private.StyleableText).attrs({
  as: 'label'
}).withConfig({
  displayName: "styled__StyledLabel",
  componentId: "sc-8ooy7n-0"
})(["cursor:pointer;", ""], function (_ref) {
  var disabled = _ref.disabled;
  return disabled && (0, _styledComponents.css)(["cursor:not-allowed;"]);
});
exports.StyledLabel = StyledLabel;