"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledTableBody = void 0;

var _bigDesignTheme = require("@bigcommerce/big-design-theme");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var StyledTableBody = /*#__PURE__*/_styledComponents.default.tbody.withConfig({
  displayName: "styled__StyledTableBody",
  componentId: "sc-1bwe2hn-0"
})(["", ""], function (_ref) {
  var theme = _ref.theme,
      withFirstRowBorder = _ref.withFirstRowBorder;
  return withFirstRowBorder && (0, _styledComponents.css)(["tr:first-of-type > td{border-top:", ";}"], theme.border.box);
});

exports.StyledTableBody = StyledTableBody;
StyledTableBody.defaultProps = {
  theme: _bigDesignTheme.theme
};