import styled, { css } from 'styled-components';
import { StyleableText } from '../../Typography/private';
export var StyledLabel = /*#__PURE__*/styled(StyleableText).attrs({
  as: 'label'
}).withConfig({
  displayName: "styled__StyledLabel",
  componentId: "sc-8ooy7n-0"
})(["cursor:pointer;", ""], function (_ref) {
  var disabled = _ref.disabled;
  return disabled && css(["cursor:not-allowed;"]);
});