import { theme as defaultTheme, remCalc } from '@bigcommerce/big-design-theme';
import styled from 'styled-components';
import { StyleableButton } from '../Button/private';
import { StyledInput, StyledInputWrapper } from '../Input/private';
export var StyledCounterButton = /*#__PURE__*/styled(StyleableButton).withConfig({
  displayName: "styled__StyledCounterButton",
  componentId: "byc1zu-0"
})(["background-color:inherit;border:none;color:", ";width:auto;height:auto;padding:0;&[disabled],&:active,&:hover:not(:active){background-color:inherit;}&[disabled]{color:", ";}"], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.secondary60;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.secondary;
});
export var StyledCounterWrapper = /*#__PURE__*/styled(StyledInputWrapper).withConfig({
  displayName: "styled__StyledCounterWrapper",
  componentId: "byc1zu-1"
})(["padding:0 ", ";width:", ";"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.spacing.xxSmall;
}, remCalc(125));
export var StyledCounterInput = /*#__PURE__*/styled(StyledInput).withConfig({
  displayName: "styled__StyledCounterInput",
  componentId: "byc1zu-2"
})(["text-align:center;padding:0;overflow:hidden;"]);
StyledCounterButton.defaultProps = {
  theme: defaultTheme
};
StyledCounterInput.defaultProps = {
  theme: defaultTheme
};
StyledCounterWrapper.defaultProps = {
  theme: defaultTheme
};