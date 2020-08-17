"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledFlex = exports.StyledTableHeaderCheckbox = exports.StyledTableHeaderCell = void 0;

var _bigDesignTheme = require("@bigcommerce/big-design-theme");

var _polished = require("polished");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Flex = require("../../Flex");

var StyledTableHeaderCell = /*#__PURE__*/_styledComponents.default.th.withConfig({
  displayName: "styled__StyledTableHeaderCell",
  componentId: "sc-1opnvtt-0"
})(["background-color:", ";border-bottom:", ";border-top:", ";box-sizing:border-box;color:", ";font-size:", ";padding:", ";white-space:nowrap;", ";", ";", ""], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.secondary10;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.border.box;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.border.box;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.secondary60;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.typography.fontSize.medium;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.spacing.small;
}, function (_ref7) {
  var isSortable = _ref7.isSortable;
  return isSortable && (0, _styledComponents.css)(["cursor:pointer;"]);
}, function (_ref8) {
  var width = _ref8.width;
  return width !== undefined && (0, _styledComponents.css)(["width:", ";"], typeof width === 'string' ? width : width + 'px');
}, function (_ref9) {
  var theme = _ref9.theme,
      stickyHeader = _ref9.stickyHeader,
      stickyHeight = _ref9.stickyHeight;
  return stickyHeader && stickyHeight >= 0 && (0, _styledComponents.css)(["", "{position:sticky;top:", ";z-index:", ";}"], theme.breakpoints.tablet, theme.helpers.remCalc(stickyHeight), theme.zIndex.sticky);
});

exports.StyledTableHeaderCell = StyledTableHeaderCell;
var StyledTableHeaderCheckbox = /*#__PURE__*/(0, _styledComponents.default)(StyledTableHeaderCell).withConfig({
  displayName: "styled__StyledTableHeaderCheckbox",
  componentId: "sc-1opnvtt-1"
})(["width:", ";white-space:nowrap;"], function (_ref10) {
  var theme = _ref10.theme;
  return theme.helpers.addValues(theme.spacing.xLarge, theme.spacing.small);
});
exports.StyledTableHeaderCheckbox = StyledTableHeaderCheckbox;
var StyledFlex = /*#__PURE__*/(0, _styledComponents.default)(_Flex.Flex).withConfig({
  displayName: "styled__StyledFlex",
  componentId: "sc-1opnvtt-2"
})(["", ";", ";"], function (_ref11) {
  var align = _ref11.align;

  switch (align) {
    case 'center':
      return (0, _styledComponents.css)(["justify-content:center;"]);

    case 'right':
      return (0, _styledComponents.css)(["justify-content:flex-end;"]);

    default:
      return (0, _styledComponents.css)(["justify-content:flex-start;"]);
  }
}, function (_ref12) {
  var hide = _ref12.hide;
  return hide && (0, _polished.hideVisually)();
});
exports.StyledFlex = StyledFlex;
StyledFlex.defaultProps = {
  theme: _bigDesignTheme.theme
};
StyledTableHeaderCell.defaultProps = {
  theme: _bigDesignTheme.theme
};
StyledTableHeaderCheckbox.defaultProps = {
  theme: _bigDesignTheme.theme
};