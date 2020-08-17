"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledLink = exports.StyledMessageItem = exports.StyledHeader = exports.StyledMessage = void 0;

var _bigDesignTheme = require("@bigcommerce/big-design-theme");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _utils = require("../../utils");

var _Grid = require("../Grid");

var _Link = require("../Link");

var _private = require("../Typography/private");

var StyledMessage = /*#__PURE__*/(0, _styledComponents.default)(_Grid.Grid).withConfig({
  displayName: "styled__StyledMessage",
  componentId: "sc-1fctd93-0"
})(["", " grid-gap:", ";padding:", ";", " ", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.shadow.raised;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing.small;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.spacing.small;
}, function (_ref4) {
  var onClose = _ref4.onClose;
  return onClose ? (0, _styledComponents.css)(["grid-template-areas:'icon messages close';grid-template-columns:", ";"], function (_ref5) {
    var theme = _ref5.theme;
    return "".concat(theme.spacing.xLarge, " 1fr ").concat(theme.spacing.large);
  }) : (0, _styledComponents.css)(["grid-template-areas:'icon messages';grid-template-columns:", ";"], function (_ref6) {
    var theme = _ref6.theme;
    return "".concat(theme.spacing.xLarge, " 1fr");
  });
}, function (_ref7) {
  var theme = _ref7.theme,
      type = _ref7.type;
  return type && (0, _utils.getBorderStyle)(type, theme);
});
exports.StyledMessage = StyledMessage;
var StyledHeader = /*#__PURE__*/(0, _styledComponents.default)(_private.StyleableH4).withConfig({
  displayName: "styled__StyledHeader",
  componentId: "sc-1fctd93-1"
})(["line-height:", ";margin-bottom:", ";"], function (_ref8) {
  var theme = _ref8.theme;
  return theme.spacing.large;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.spacing.none;
});
exports.StyledHeader = StyledHeader;
var StyledMessageItem = /*#__PURE__*/(0, _styledComponents.default)(_private.StyleableSmall).attrs({
  as: 'span'
}).withConfig({
  displayName: "styled__StyledMessageItem",
  componentId: "sc-1fctd93-2"
})(["color:", ";vertical-align:middle;"], function (_ref10) {
  var theme = _ref10.theme;
  return theme.colors.secondary70;
});
exports.StyledMessageItem = StyledMessageItem;
var StyledLink = /*#__PURE__*/(0, _styledComponents.default)(_Link.Link).withConfig({
  displayName: "styled__StyledLink",
  componentId: "sc-1fctd93-3"
})(["font-size:", ";vertical-align:middle;"], function (_ref11) {
  var theme = _ref11.theme;
  return theme.typography.fontSize.small;
});
exports.StyledLink = StyledLink;
StyledMessage.defaultProps = {
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