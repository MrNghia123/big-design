import { theme as defaultTheme } from '@bigcommerce/big-design-theme';
import styled, { css } from 'styled-components';
import { withTransition } from '../../mixins/transitions';
export var StyledProgressBar = /*#__PURE__*/styled.div.withConfig({
  displayName: "styled__StyledProgressBar",
  componentId: "sc-1b2lkfu-0"
})(["background-color:", ";height:", ";overflow:hidden;width:100%;"], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.secondary20;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing.xxSmall;
});
export var StyledProgressBarFiller = /*#__PURE__*/styled.div.withConfig({
  displayName: "styled__StyledProgressBarFiller",
  componentId: "sc-1b2lkfu-1"
})(["background-color:", ";height:100%;overflow:hidden;", ";"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.primary;
}, function (_ref4) {
  var percent = _ref4.percent,
      theme = _ref4.theme;
  return typeof percent === 'number' ? css(["", " width:", "%;"], withTransition(['width', 'background-color', 'height']), percent) : css(["animation:", " 2s ease-in-out infinite;position:relative;width:6.25%;"], theme.keyframes.loading);
});
StyledProgressBar.defaultProps = {
  theme: defaultTheme
};
StyledProgressBarFiller.defaultProps = {
  theme: defaultTheme
};