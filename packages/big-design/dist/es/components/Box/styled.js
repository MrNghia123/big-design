import { theme as defaultTheme } from '@bigcommerce/big-design-theme';
import { clearFix } from 'polished';
import styled, { css } from 'styled-components';
import { withDisplay, withMargins, withPaddings } from '../../mixins';
export var StyledBox = /*#__PURE__*/styled.div.withConfig({
  displayName: "styled__StyledBox",
  componentId: "sj5f1m-0"
})(["", " ", " ", " box-sizing:border-box;", ";", ";", ";", ";", ";", ";", ";", ";", ";"], withDisplay(), withMargins(), withPaddings(), function (_ref) {
  var clearfix = _ref.clearfix;
  return clearfix && clearFix();
}, function (_ref2) {
  var backgroundColor = _ref2.backgroundColor,
      theme = _ref2.theme;
  return backgroundColor && css(["background-color:", ";"], theme.colors[backgroundColor]);
}, function (_ref3) {
  var shadow = _ref3.shadow,
      theme = _ref3.theme;
  return shadow && theme.shadow[shadow];
}, function (_ref4) {
  var border = _ref4.border,
      theme = _ref4.theme;
  return border && css(["border:", ";"], theme.border[border]);
}, function (_ref5) {
  var borderTop = _ref5.borderTop,
      theme = _ref5.theme;
  return borderTop && css(["border-top:", ";"], theme.border[borderTop]);
}, function (_ref6) {
  var borderRight = _ref6.borderRight,
      theme = _ref6.theme;
  return borderRight && css(["border-right:", ";"], theme.border[borderRight]);
}, function (_ref7) {
  var borderBottom = _ref7.borderBottom,
      theme = _ref7.theme;
  return borderBottom && css(["border-bottom:", ";"], theme.border[borderBottom]);
}, function (_ref8) {
  var borderLeft = _ref8.borderLeft,
      theme = _ref8.theme;
  return borderLeft && css(["border-left:", ";"], theme.border[borderLeft]);
}, function (_ref9) {
  var borderRadius = _ref9.borderRadius,
      theme = _ref9.theme;
  return borderRadius && css(["border-radius:", ";"], theme.borderRadius[borderRadius]);
});
StyledBox.defaultProps = {
  theme: defaultTheme
};