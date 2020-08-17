import { theme as defaultTheme } from '@bigcommerce/big-design-theme';
import styled, { css } from 'styled-components';
import { getBorderStyle } from '../../utils';
import { Grid } from '../Grid';
import { Link } from '../Link';
import { StyleableH4, StyleableSmall } from '../Typography/private';
export var StyledAlert = /*#__PURE__*/styled(Grid).withConfig({
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
  return onClose ? css(["grid-template-areas:'icon messages close';grid-template-columns:", ";"], function (_ref11) {
    var theme = _ref11.theme;
    return "".concat(theme.spacing.xLarge, " 1fr ").concat(theme.spacing.large);
  }) : css(["grid-template-areas:'icon messages';grid-template-columns:", ";"], function (_ref12) {
    var theme = _ref12.theme;
    return "".concat(theme.spacing.xLarge, " 1fr");
  });
}, function (_ref13) {
  var theme = _ref13.theme,
      type = _ref13.type;
  return type && getBorderStyle(type, theme);
});
export var StyledHeader = /*#__PURE__*/styled(StyleableH4).withConfig({
  displayName: "styled__StyledHeader",
  componentId: "sc-136bu5l-1"
})(["line-height:", ";margin-bottom:", ";"], function (_ref14) {
  var theme = _ref14.theme;
  return theme.spacing.medium;
}, function (_ref15) {
  var theme = _ref15.theme;
  return theme.spacing.xxSmall;
});
export var StyledMessageItem = /*#__PURE__*/styled(StyleableSmall).attrs({
  as: 'span'
}).withConfig({
  displayName: "styled__StyledMessageItem",
  componentId: "sc-136bu5l-2"
})(["color:", ";vertical-align:middle;"], function (_ref16) {
  var theme = _ref16.theme;
  return theme.colors.secondary70;
});
export var StyledLink = /*#__PURE__*/styled(Link).withConfig({
  displayName: "styled__StyledLink",
  componentId: "sc-136bu5l-3"
})(["font-size:", ";vertical-align:middle;"], function (_ref17) {
  var theme = _ref17.theme;
  return theme.typography.fontSize.small;
});
StyledAlert.defaultProps = {
  theme: defaultTheme
};
StyledHeader.defaultProps = {
  theme: defaultTheme
};
StyledMessageItem.defaultProps = {
  theme: defaultTheme
};
StyledLink.defaultProps = {
  theme: defaultTheme
};