import { theme as defaultTheme } from '@bigcommerce/big-design-theme';
import { hideVisually } from 'polished';
import styled, { css } from 'styled-components';
import { withTransition } from '../../mixins/transitions';
export var HiddenCheckbox = /*#__PURE__*/styled.input.withConfig({
  displayName: "styled__HiddenCheckbox",
  componentId: "sc-5vnqm9-0"
})(["", " ", ""], hideVisually(), function (_ref) {
  var theme = _ref.theme;
  return css(["&:focus + label::before{box-shadow:0px 0px 0px 4px ", ";"], theme.helpers.createRGBA(theme.colors.primary, 0.2));
});
export var StyledSwitchLabel = /*#__PURE__*/styled.label.withConfig({
  displayName: "styled__StyledSwitchLabel",
  componentId: "sc-5vnqm9-1"
})(["", " background:", ";border-color:", ";border-radius:", ";cursor:pointer;height:", ";position:relative;width:", ";&:hover{&::before{", "}}&:focus{&::before{box-shadow:0px 0px 0px 4px ", ";}}", " &::before{", " ", " background:", ";border-radius:", ";content:'';height:", ";left:calc(100% - ", ");position:absolute;top:-", ";width:", ";", " ", "}"], withTransition(['background, border-color']), function (_ref2) {
  var checked = _ref2.checked,
      theme = _ref2.theme;
  return checked ? theme.colors.primary30 : theme.colors.secondary30;
}, function (_ref3) {
  var checked = _ref3.checked,
      theme = _ref3.theme;
  return checked ? theme.colors.primary30 : theme.colors.secondary30;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.helpers.remCalc(8);
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.helpers.remCalc(14);
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.helpers.remCalc(38);
}, function (_ref7) {
  var checked = _ref7.checked,
      theme = _ref7.theme;
  return checked ? css(["box-shadow:0px 0px 0px 4px ", ";"], theme.helpers.createRGBA(theme.colors.primary, 0.2)) : css(["box-shadow:0px 0px 0px 4px ", ";"], theme.helpers.createRGBA(theme.colors.secondary50, 0.2));
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.helpers.createRGBA(theme.colors.primary, 0.2);
}, function (_ref9) {
  var checked = _ref9.checked,
      disabled = _ref9.disabled,
      theme = _ref9.theme;
  return disabled && css(["background:", ";cursor:not-allowed;&:hover{&::before{", " border-radius:", ";}}"], checked ? theme.colors.primary20 : theme.colors.secondary20, function (_ref10) {
    var theme = _ref10.theme;
    return theme.shadow.raised;
  }, function (_ref11) {
    var theme = _ref11.theme;
    return theme.borderRadius.circle;
  });
}, withTransition(['background, transform']), function (_ref12) {
  var theme = _ref12.theme;
  return theme.shadow.raised;
}, function (_ref13) {
  var checked = _ref13.checked,
      theme = _ref13.theme;
  return checked ? theme.colors.primary40 : theme.colors.white;
}, function (_ref14) {
  var theme = _ref14.theme;
  return theme.borderRadius.circle;
}, function (_ref15) {
  var theme = _ref15.theme;
  return theme.spacing.xLarge;
}, function (_ref16) {
  var theme = _ref16.theme;
  return theme.spacing.large;
}, function (_ref17) {
  var theme = _ref17.theme;
  return theme.helpers.remCalc(5);
}, function (_ref18) {
  var theme = _ref18.theme;
  return theme.spacing.xLarge;
}, function (_ref19) {
  var checked = _ref19.checked,
      disabled = _ref19.disabled,
      theme = _ref19.theme;
  return disabled && css(["background:", ";cursor:not-allowed;"], checked ? theme.colors.primary30 : theme.colors.secondary10);
}, function (_ref20) {
  var checked = _ref20.checked;
  return !checked && css(["transform:translateX(-100%);"]);
});
StyledSwitchLabel.defaultProps = {
  theme: defaultTheme
};
HiddenCheckbox.defaultProps = {
  theme: defaultTheme
};