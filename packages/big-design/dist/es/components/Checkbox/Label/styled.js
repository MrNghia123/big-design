import { theme as defaultTheme } from '@bigcommerce/big-design-theme';
import { hideVisually } from 'polished';
import styled, { css } from 'styled-components';
import { StyleableText } from '../../Typography/private';
export var StyledLabel = /*#__PURE__*/styled(StyleableText).attrs({
  as: 'label'
}).withConfig({
  displayName: "styled__StyledLabel",
  componentId: "sc-3soea9-0"
})(["cursor:pointer;", " ", ""], function (_ref) {
  var disabled = _ref.disabled;
  return disabled && css(["cursor:not-allowed;"]);
}, function (_ref2) {
  var hidden = _ref2.hidden;
  return hidden && hideVisually();
});
StyledLabel.defaultProps = {
  theme: defaultTheme
};