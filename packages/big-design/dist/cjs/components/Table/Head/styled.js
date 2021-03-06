"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledTableHead = void 0;

var _bigDesignTheme = require("@bigcommerce/big-design-theme");

var _polished = require("polished");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var StyledTableHead = /*#__PURE__*/_styledComponents.default.thead.withConfig({
  displayName: "styled__StyledTableHead",
  componentId: "sc-1p8j1x-0"
})(["", ""], function (_ref) {
  var hidden = _ref.hidden;
  return hidden && (0, _polished.hideVisually)();
});

exports.StyledTableHead = StyledTableHead;
StyledTableHead.defaultProps = {
  theme: _bigDesignTheme.theme
};