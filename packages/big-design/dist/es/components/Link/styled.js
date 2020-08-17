import { theme as defaultTheme } from '@bigcommerce/big-design-theme';
import { ellipsis } from 'polished';
import styled, { css } from 'styled-components';
import { withMargins } from '../../mixins';
import { withTransition } from '../../mixins/transitions';
export var StyledLink = /*#__PURE__*/styled.a.withConfig({
  displayName: "styled__StyledLink",
  componentId: "n9mww9-0"
})(["", ";", " ", ";color:", ";cursor:pointer;font-size:", ";font-weight:", ";text-decoration:none;&:active{color:", ";}&:hover:not(:active){color:", ";}", ""], withMargins(), withTransition(['color'], '70ms'), function (props) {
  return props.ellipsis && ellipsis();
}, function (_ref) {
  var theme = _ref.theme;
  return theme.colors.primary;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.typography.fontSize.medium;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.typography.fontWeight.regular;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.primary70;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.primary70;
}, function (_ref6) {
  var isExternal = _ref6.isExternal,
      theme = _ref6.theme;
  return isExternal && css(["display:inline-flex;align-items:center;svg{flex-shrink:0;margin-left:", ";}"], theme.spacing.xxSmall);
});
StyledLink.defaultProps = {
  theme: defaultTheme
};