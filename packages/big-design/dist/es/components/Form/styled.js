import { theme as defaultTheme } from '@bigcommerce/big-design-theme';
import styled from 'styled-components';
import { StyledInputWrapper } from '../Input/styled';
import { StyledTextareaWrapper } from '../Textarea/styled';
export var StyledForm = /*#__PURE__*/styled.form.withConfig({
  displayName: "styled__StyledForm",
  componentId: "qzey9b-0"
})(["", "{", ",", "{max-width:", ";}}"], function (_ref) {
  var theme = _ref.theme;
  return theme.breakpoints.tablet;
}, StyledInputWrapper, StyledTextareaWrapper, function (_ref2) {
  var fullWidth = _ref2.fullWidth,
      theme = _ref2.theme;
  return fullWidth ? '100%' : theme.helpers.remCalc(416);
});
StyledForm.defaultProps = {
  theme: defaultTheme
};