import { theme as defaultTheme } from '@bigcommerce/big-design-theme';
import styled, { css } from 'styled-components';
import { getBorderStyle } from '../../utils';
import { Grid } from '../Grid';
import { Link } from '../Link';
import { StyleableH4, StyleableSmall } from '../Typography/private';
export var StyledMessage = /*#__PURE__*/styled(Grid).withConfig({
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
  return onClose ? css(["grid-template-areas:'icon messages close';grid-template-columns:", ";"], function (_ref5) {
    var theme = _ref5.theme;
    return "".concat(theme.spacing.xLarge, " 1fr ").concat(theme.spacing.large);
  }) : css(["grid-template-areas:'icon messages';grid-template-columns:", ";"], function (_ref6) {
    var theme = _ref6.theme;
    return "".concat(theme.spacing.xLarge, " 1fr");
  });
}, function (_ref7) {
  var theme = _ref7.theme,
      type = _ref7.type;
  return type && getBorderStyle(type, theme);
});
export var StyledHeader = /*#__PURE__*/styled(StyleableH4).withConfig({
  displayName: "styled__StyledHeader",
  componentId: "sc-1fctd93-1"
})(["line-height:", ";margin-bottom:", ";"], function (_ref8) {
  var theme = _ref8.theme;
  return theme.spacing.large;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.spacing.none;
});
export var StyledMessageItem = /*#__PURE__*/styled(StyleableSmall).attrs({
  as: 'span'
}).withConfig({
  displayName: "styled__StyledMessageItem",
  componentId: "sc-1fctd93-2"
})(["color:", ";vertical-align:middle;"], function (_ref10) {
  var theme = _ref10.theme;
  return theme.colors.secondary70;
});
export var StyledLink = /*#__PURE__*/styled(Link).withConfig({
  displayName: "styled__StyledLink",
  componentId: "sc-1fctd93-3"
})(["font-size:", ";vertical-align:middle;"], function (_ref11) {
  var theme = _ref11.theme;
  return theme.typography.fontSize.small;
});
StyledMessage.defaultProps = {
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