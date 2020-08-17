import { theme as defaultTheme } from '@bigcommerce/big-design-theme';
import styled, { css } from 'styled-components';
import { Flex, FlexItem } from '../../Flex';
import { StyleableText } from '../../Typography/private';
export var StyledLi = /*#__PURE__*/styled.li.withConfig({
  displayName: "styled__StyledLi",
  componentId: "sc-1073t7q-0"
})(["outline:0;"]);
export var StyledArrowWrapper = /*#__PURE__*/styled(FlexItem).withConfig({
  displayName: "styled__StyledArrowWrapper",
  componentId: "sc-1073t7q-1"
})(["z-index:1;", ";"], function (_ref) {
  var expanded = _ref.expanded;
  return expanded && css(["transform:rotate(90deg);"]);
});
export var StyledSelectableWrapper = /*#__PURE__*/styled(FlexItem).withConfig({
  displayName: "styled__StyledSelectableWrapper",
  componentId: "sc-1073t7q-2"
})(["padding:1px;z-index:1;"]);
var sharedAfterStyles = /*#__PURE__*/css(["bottom:0;content:'';left:-1000px;right:0;position:absolute;top:0;z-index:0;"]);
export var StyledFlex = /*#__PURE__*/styled(Flex).withConfig({
  displayName: "styled__StyledFlex",
  componentId: "sc-1073t7q-3"
})(["cursor:pointer;min-height:", ";position:relative;li:focus > &,&:hover{&::after{", " background-color:", ";}}label,svg{vertical-align:middle;}", ""], function (_ref2) {
  var theme = _ref2.theme;
  return theme.helpers.addValues(theme.spacing.xxLarge, theme.spacing.xSmall);
}, sharedAfterStyles, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.secondary10;
}, function (_ref4) {
  var theme = _ref4.theme,
      selected = _ref4.selected;
  return selected && css(["&::after{", " background-color:", ";}"], sharedAfterStyles, theme.colors.primary10);
});
export var StyledFlexItem = /*#__PURE__*/styled(FlexItem).withConfig({
  displayName: "styled__StyledFlexItem",
  componentId: "sc-1073t7q-4"
})(["z-index:1;"]);
export var StyledGap = /*#__PURE__*/styled.div.withConfig({
  displayName: "styled__StyledGap",
  componentId: "sc-1073t7q-5"
})(["flex-shrink:0;height:", ";width:", ";"], function (_ref5) {
  var theme = _ref5.theme;
  return theme.spacing.xLarge;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.spacing.xLarge;
});
export var StyledText = /*#__PURE__*/styled(StyleableText).withConfig({
  displayName: "styled__StyledText",
  componentId: "sc-1073t7q-6"
})(["z-index:1;"]);
StyledArrowWrapper.defaultProps = {
  theme: defaultTheme
};
StyledFlex.defaultProps = {
  theme: defaultTheme
};
StyledGap.defaultProps = {
  theme: defaultTheme
};