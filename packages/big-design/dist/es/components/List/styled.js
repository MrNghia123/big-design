import { theme as defaultTheme } from '@bigcommerce/big-design-theme';
import styled from 'styled-components';
export var StyledList = /*#__PURE__*/styled.ul.withConfig({
  displayName: "styled__StyledList",
  componentId: "sc-5w3dcq-0"
})(["", ";background-color:", ";color:", ";margin:0;max-height:", ";outline:none;overflow-y:auto;padding:", " 0;z-index:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.shadow.raised;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.white;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.secondary70;
}, function (_ref4) {
  var theme = _ref4.theme,
      maxHeight = _ref4.maxHeight;
  return maxHeight ? theme.helpers.remCalc(maxHeight) : '';
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.spacing.xSmall;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.zIndex.popover;
});
StyledList.defaultProps = {
  theme: defaultTheme
};