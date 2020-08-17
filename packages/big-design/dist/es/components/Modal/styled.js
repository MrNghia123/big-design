import { theme as defaultTheme } from '@bigcommerce/big-design-theme';
import { rgba } from 'polished';
import styled, { css } from 'styled-components';
import { Flex } from '../Flex';
export var StyledModal = /*#__PURE__*/styled.div.attrs({
  'aria-modal': true,
  role: 'dialog',
  tabIndex: -1
}).withConfig({
  displayName: "styled__StyledModal",
  componentId: "b0pzor-0"
})(["height:100%;left:0;position:fixed;top:0;width:100%;z-index:", ";", ""], function (_ref) {
  var theme = _ref.theme;
  return theme.zIndex.modalBackdrop;
}, function (props) {
  return props.backdrop && props.variant && css(["background:", ";"], rgba(props.theme.colors.secondary70, props.variant === 'dialog' ? 0.5 : 0.7));
});
export var StyledModalContent = /*#__PURE__*/styled(Flex).withConfig({
  displayName: "styled__StyledModalContent",
  componentId: "b0pzor-1"
})(["background:", ";box-sizing:border-box;position:fixed;z-index:", ";", " ", ""], function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.white;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.zIndex.modal;
}, function (_ref4) {
  var theme = _ref4.theme,
      variant = _ref4.variant;
  return variant === 'dialog' && css(["", ";max-width:", ";left:50%;top:50%;transform:translate(-50%,-50%);width:90%;"], theme.shadow.floating, theme.breakpointValues.tablet);
}, function (_ref5) {
  var theme = _ref5.theme,
      variant = _ref5.variant;
  return variant === 'modal' && css(["height:100%;width:100%;", "{", ";height:auto;left:50%;max-height:90vh;max-width:", ";top:50%;transform:translate(-50%,-50%);}", "{max-height:80vh;}"], theme.breakpoints.tablet, theme.shadow.floating, theme.breakpointValues.tablet, theme.breakpoints.desktop);
});
export var StyledModalActions = /*#__PURE__*/styled(Flex).withConfig({
  displayName: "styled__StyledModalActions",
  componentId: "b0pzor-2"
})(["padding:", ";", "{padding:", ";}"], function (_ref6) {
  var theme = _ref6.theme;
  return theme.spacing.medium;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.breakpoints.tablet;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.spacing.xLarge;
});
export var StyledModalHeader = /*#__PURE__*/styled.div.withConfig({
  displayName: "styled__StyledModalHeader",
  componentId: "b0pzor-3"
})(["padding:", ";", "{padding:", ";}"], function (_ref9) {
  var theme = _ref9.theme;
  return theme.spacing.medium;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.breakpoints.tablet;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.spacing.xLarge;
});
export var StyledModalClose = /*#__PURE__*/styled.div.withConfig({
  displayName: "styled__StyledModalClose",
  componentId: "b0pzor-4"
})(["position:absolute;top:", ";right:", ";", "{display:none;}"], function (_ref12) {
  var theme = _ref12.theme;
  return theme.spacing.xxSmall;
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.spacing.xxSmall;
}, function (_ref14) {
  var theme = _ref14.theme;
  return theme.breakpoints.tablet;
});
export var StyledModalBody = /*#__PURE__*/styled.div.withConfig({
  displayName: "styled__StyledModalBody",
  componentId: "b0pzor-5"
})(["flex-grow:1;padding:0 ", ";overflow-y:auto;", "{padding:0 ", ";}"], function (_ref15) {
  var theme = _ref15.theme;
  return theme.spacing.medium;
}, function (_ref16) {
  var theme = _ref16.theme;
  return theme.breakpoints.tablet;
}, function (_ref17) {
  var theme = _ref17.theme;
  return theme.spacing.xLarge;
});
StyledModal.defaultProps = {
  theme: defaultTheme
};
StyledModalActions.defaultProps = {
  theme: defaultTheme
};
StyledModalBody.defaultProps = {
  theme: defaultTheme
};
StyledModalClose.defaultProps = {
  theme: defaultTheme
};
StyledModalContent.defaultProps = {
  theme: defaultTheme
};
StyledModalHeader.defaultProps = {
  theme: defaultTheme
};