"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledLink = exports.StyledMessageItem = exports.StyledHeader = exports.StyledAlert = void 0;

var _bigDesignTheme = require("@bigcommerce/big-design-theme");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _utils = require("../../utils");

var _Grid = require("../Grid");

var _Link = require("../Link");

var _private = require("../Typography/private");

var StyledAlert = /*#__PURE__*/(0, _styledComponents.default)(_Grid.Grid).withConfig({
  displayName: "styled__StyledAlert",
  componentId: "sc-136bu5l-0"
})(["", " animation:", " .5s ease-in-out;background-color:", ";grid-gap:", ";max-width:", ";padding:", ";position:fixed;right:", ";top:", ";z-index:", ";", " ", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.shadow.floating;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.keyframes.fadeIn;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.white;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.spacing.small;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.helpers.remCalc(456);
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.spacing.small;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.spacing.medium;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.spacing.medium;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.zIndex.fixed;
}, function (_ref10) {
  var onClose = _ref10.onClose;
  return onClose ? (0, _styledComponents.css)(["grid-template-areas:'icon messages close';grid-template-columns:", ";"], function (_ref11) {
    var theme = _ref11.theme;
    return "".concat(theme.spacing.xLarge, " 1fr ").concat(theme.spacing.large);
  }) : (0, _styledComponents.css)(["grid-template-areas:'icon messages';grid-template-columns:", ";"], function (_ref12) {
    var theme = _ref12.theme;
    return "".concat(theme.spacing.xLarge, " 1fr");
  });
}, function (_ref13) {
  var theme = _ref13.theme,
      type = _ref13.type;
  return type && (0, _utils.getBorderStyle)(type, theme);
});
exports.StyledAlert = StyledAlert;
var StyledHeader = /*#__PURE__*/(0, _styledComponents.default)(_private.StyleableH4).withConfig({
  displayName: "styled__StyledHeader",
  componentId: "sc-136bu5l-1"
})(["line-height:", ";margin-bottom:", ";"], function (_ref14) {
  var theme = _ref14.theme;
  return theme.spacing.medium;
}, function (_ref15) {
  var theme = _ref15.theme;
  return theme.spacing.xxSmall;
});
exports.StyledHeader = StyledHeader;
var StyledMessageItem = /*#__PURE__*/(0, _styledComponents.default)(_private.StyleableSmall).attrs({
  as: 'span'
}).withConfig({
  displayName: "styled__StyledMessageItem",
  componentId: "sc-136bu5l-2"
})(["color:", ";vertical-align:middle;"], function (_ref16) {
  var theme = _ref16.theme;
  return theme.colors.secondary70;
});
exports.StyledMessageItem = StyledMessageItem;
var StyledLink = /*#__PURE__*/(0, _styledComponents.default)(_Link.Link).withConfig({
  displayName: "styled__StyledLink",
  componentId: "sc-136bu5l-3"
})(["font-size:", ";vertical-align:middle;"], function (_ref17) {
  var theme = _ref17.theme;
  return theme.typography.fontSize.small;
});
exports.StyledLink = StyledLink;
StyledAlert.defaultProps = {
  theme: _bigDesignTheme.theme
};
StyledHeader.defaultProps = {
  theme: _bigDesignTheme.theme
};
StyledMessageItem.defaultProps = {
  theme: _bigDesignTheme.theme
};
StyledLink.defaultProps = {
  theme: _bigDesignTheme.theme
};