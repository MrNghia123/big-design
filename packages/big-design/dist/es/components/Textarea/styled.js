import { theme as defaultTheme } from '@bigcommerce/big-design-theme';
import styled, { css } from 'styled-components';
import { withTransition } from '../../mixins/transitions';
export var StyledTextareaWrapper = /*#__PURE__*/styled.span.withConfig({
  displayName: "styled__StyledTextareaWrapper",
  componentId: "c1uos0-0"
})(["align-items:center;display:flex;position:relative;"]);
export var StyledTextarea = /*#__PURE__*/styled.textarea.withConfig({
  displayName: "styled__StyledTextarea",
  componentId: "c1uos0-1"
})(["", " background-color:", ";border-radius:", ";box-sizing:border-box;color:", ";line-height:", ";max-height:", ";padding:", ";width:100%;", ";", ";&:hover:not([disabled]){", "}&:focus{outline:none;box-shadow:0 0 0 4px ", ";}&[disabled]{background-color:", ";}&::placeholder{color:", ";line-height:", ";font-size:", ";}"], withTransition(['border', 'box-shadow']), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.white;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.borderRadius.normal;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.secondary70;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.lineHeight.medium;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.helpers.remCalc(224);
}, function (_ref6) {
  var theme = _ref6.theme;
  return "".concat(theme.spacing.xxSmall, " ").concat(theme.spacing.small);
}, function (_ref7) {
  var resize = _ref7.resize;
  return resize ? css(["resize:vertical;"]) : css(["resize:none;"]);
}, function (_ref8) {
  var error = _ref8.error,
      theme = _ref8.theme;
  return css(["border:", ";"], error ? theme.border.boxError : theme.border.box);
}, function (_ref9) {
  var error = _ref9.error,
      theme = _ref9.theme;
  return error ? css(["border:", ";"], theme.border.boxError) : css(["border:1px solid ", ";"], theme.colors.secondary40);
}, function (props) {
  return props.error ? props.theme.colors.danger20 : props.theme.colors.primary20;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.colors.secondary20;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.colors.secondary40;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.lineHeight.medium;
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.typography.fontSize.medium;
});
StyledTextarea.defaultProps = {
  theme: defaultTheme
};
StyledTextareaWrapper.defaultProps = {
  theme: defaultTheme
};