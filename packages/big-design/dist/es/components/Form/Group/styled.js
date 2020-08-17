import { theme as defaultTheme } from '@bigcommerce/big-design-theme';
import styled, { css } from 'styled-components';
import { Flex } from '../../Flex';
var SharedGroupStyles = /*#__PURE__*/css(["display:grid;grid-gap:", ";margin-bottom:", ";&:last-child{margin-bottom:", ";}"], function (_ref) {
  var theme = _ref.theme;
  return "".concat(theme.spacing.xSmall, " ").concat(theme.spacing.medium);
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing.medium;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.spacing.none;
});
export var StyledError = /*#__PURE__*/styled(Flex).withConfig({
  displayName: "styled__StyledError",
  componentId: "sc-1a6yr6l-0"
})(["flex-direction:row;"]);
export var StyledGroup = /*#__PURE__*/styled.div.withConfig({
  displayName: "styled__StyledGroup",
  componentId: "sc-1a6yr6l-1"
})(["", ";"], SharedGroupStyles);
export var StyledInlineGroup = /*#__PURE__*/styled.div.withConfig({
  displayName: "styled__StyledInlineGroup",
  componentId: "sc-1a6yr6l-2"
})(["", ";", "{", " ", "}"], SharedGroupStyles, function (_ref4) {
  var theme = _ref4.theme;
  return theme.breakpoints.tablet;
}, function (_ref5) {
  var childrenCount = _ref5.childrenCount,
      theme = _ref5.theme;
  return childrenCount === 2 && css(["grid-template-columns:repeat(2,", ");", "{grid-column:1 / 3;}"], theme.helpers.remCalc(200), StyledError);
}, function (_ref6) {
  var childrenCount = _ref6.childrenCount,
      theme = _ref6.theme;
  return childrenCount === 3 && css(["grid-template-columns:repeat(3,", ");", "{grid-column:1 / 4;}"], theme.helpers.remCalc(128), StyledError);
});
StyledError.defaultProps = {
  theme: defaultTheme
};
StyledGroup.defaultProps = {
  theme: defaultTheme
};
StyledInlineGroup.defaultProps = {
  theme: defaultTheme
};