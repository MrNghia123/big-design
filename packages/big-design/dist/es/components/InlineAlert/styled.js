import { theme as defaultTheme } from '@bigcommerce/big-design-theme';
import styled, { css } from 'styled-components';
import { getBorderStyle } from '../../utils';
import { Grid } from '../Grid';
import { Link } from '../Link';
import { StyleableH4, StyleableSmall } from '../Typography/private';
export var StyledInlineAlert = /*#__PURE__*/styled(Grid).withConfig({
  displayName: "styled__StyledInlineAlert",
  componentId: "sc-1o8douk-0"
})(["border:", ";border-radius:", ";grid-gap:", ";grid-template-columns:", ";padding:", ";", " ", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.border.box;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.borderRadius.normal;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.spacing.xSmall;
}, function (_ref4) {
  var theme = _ref4.theme;
  return "".concat(theme.spacing.large, " 1fr ").concat(theme.spacing.large);
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.spacing.xSmall;
}, function (_ref6) {
  var onClose = _ref6.onClose;
  return onClose ? css(["grid-template-areas:'icon messages close';grid-template-columns:", ";"], function (_ref7) {
    var theme = _ref7.theme;
    return "".concat(theme.spacing.large, " 1fr ").concat(theme.spacing.medium);
  }) : css(["grid-template-areas:'icon messages';grid-template-columns:", ";"], function (_ref8) {
    var theme = _ref8.theme;
    return "".concat(theme.spacing.large, " 1fr");
  });
}, function (_ref9) {
  var theme = _ref9.theme,
      type = _ref9.type;
  return type && getBorderStyle(type, theme);
});
export var StyledHeader = /*#__PURE__*/styled(StyleableH4).withConfig({
  displayName: "styled__StyledHeader",
  componentId: "sc-1o8douk-1"
})(["font-size:", ";line-height:", ";margin-bottom:", ";"], function (_ref10) {
  var theme = _ref10.theme;
  return theme.typography.fontSize.small;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.spacing.large;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.spacing.none;
});
export var StyledMessageItem = /*#__PURE__*/styled(StyleableSmall).attrs({
  as: 'span'
}).withConfig({
  displayName: "styled__StyledMessageItem",
  componentId: "sc-1o8douk-2"
})(["color:", ";vertical-align:middle;"], function (_ref13) {
  var theme = _ref13.theme;
  return theme.colors.secondary70;
});
export var StyledLink = /*#__PURE__*/styled(Link).withConfig({
  displayName: "styled__StyledLink",
  componentId: "sc-1o8douk-3"
})(["font-size:", ";vertical-align:middle;"], function (_ref14) {
  var theme = _ref14.theme;
  return theme.typography.fontSize.small;
});
StyledInlineAlert.defaultProps = {
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