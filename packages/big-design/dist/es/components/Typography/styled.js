import { theme as defaultTheme } from '@bigcommerce/big-design-theme';
import { ellipsis } from 'polished';
import styled, { css } from 'styled-components';
import { withMargins } from '../../mixins';

var commonTextStyles = function commonTextStyles(props) {
  return css(["color:", ";margin:0 0 ", ";", ";"], function (_ref) {
    var theme = _ref.theme;
    return props.color ? theme.colors[props.color] : theme.colors.secondary70;
  }, function (_ref2) {
    var theme = _ref2.theme;
    return theme.spacing.medium;
  }, props.ellipsis && ellipsis());
};

var textModifiers = function textModifiers(props) {
  return css(["", " ", " ", " ", " ", " ", " ", ""], function (_ref3) {
    var theme = _ref3.theme;
    return props.bold && css(["font-weight:", ";"], theme.typography.fontWeight.semiBold);
  }, function () {
    return props.italic && css(["font-style:italic;"]);
  }, function () {
    return props.underline && css(["text-decoration:underline;"]);
  }, function () {
    return props.strikethrough && css(["text-decoration:line-through;"]);
  }, function () {
    return props.capitalize && css(["text-transform:capitalize;"]);
  }, function () {
    return props.lowercase && css(["text-transform:lowercase;"]);
  }, function () {
    return props.uppercase && css(["text-transform:uppercase;"]);
  });
};

export var StyledH0 = /*#__PURE__*/styled.h1.withConfig({
  displayName: "styled__StyledH0",
  componentId: "tqnj75-0"
})(["", ";font-size:", ";font-weight:", ";line-height:", ";margin:0 0 ", ";", ";"], function (props) {
  return commonTextStyles(props);
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.typography.fontSize.xxxLarge;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.typography.fontWeight.extraLight;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.lineHeight.xxxLarge;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.spacing.xLarge;
}, withMargins());
export var StyledH1 = /*#__PURE__*/styled.h1.withConfig({
  displayName: "styled__StyledH1",
  componentId: "tqnj75-1"
})(["", ";font-size:", ";font-weight:", ";line-height:", ";margin:0 0 ", ";", ";"], function (props) {
  return commonTextStyles(props);
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.typography.fontSize.xxLarge;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.typography.fontWeight.light;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.lineHeight.xxLarge;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.spacing.xLarge;
}, withMargins());
export var StyledH2 = /*#__PURE__*/styled.h2.withConfig({
  displayName: "styled__StyledH2",
  componentId: "tqnj75-2"
})(["", ";font-size:", ";font-weight:", ";line-height:", ";", ";"], function (props) {
  return commonTextStyles(props);
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.typography.fontSize.xLarge;
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.typography.fontWeight.regular;
}, function (_ref14) {
  var theme = _ref14.theme;
  return theme.lineHeight.xLarge;
}, withMargins());
export var StyledH3 = /*#__PURE__*/styled.h3.withConfig({
  displayName: "styled__StyledH3",
  componentId: "tqnj75-3"
})(["", ";font-size:", ";font-weight:", ";line-height:", ";margin:0 0 ", ";", ";"], function (props) {
  return commonTextStyles(props);
}, function (_ref15) {
  var theme = _ref15.theme;
  return theme.typography.fontSize.large;
}, function (_ref16) {
  var theme = _ref16.theme;
  return theme.typography.fontWeight.semiBold;
}, function (_ref17) {
  var theme = _ref17.theme;
  return theme.lineHeight.large;
}, function (_ref18) {
  var theme = _ref18.theme;
  return theme.spacing.small;
}, withMargins());
export var StyledH4 = /*#__PURE__*/styled.h4.withConfig({
  displayName: "styled__StyledH4",
  componentId: "tqnj75-4"
})(["", ";font-size:", ";font-weight:", ";line-height:", ";margin:0 0 ", ";", ";"], function (props) {
  return commonTextStyles(props);
}, function (_ref19) {
  var theme = _ref19.theme;
  return theme.typography.fontSize.medium;
}, function (_ref20) {
  var theme = _ref20.theme;
  return theme.typography.fontWeight.semiBold;
}, function (_ref21) {
  var theme = _ref21.theme;
  return theme.lineHeight.medium;
}, function (_ref22) {
  var theme = _ref22.theme;
  return theme.spacing.xSmall;
}, withMargins());
export var StyledText = /*#__PURE__*/styled.p.withConfig({
  displayName: "styled__StyledText",
  componentId: "tqnj75-5"
})(["", " font-size:", ";font-weight:", ";line-height:", ";", " &:last-child{margin-bottom:0;}", ";"], function (props) {
  return commonTextStyles(props);
}, function (_ref23) {
  var theme = _ref23.theme;
  return theme.typography.fontSize.medium;
}, function (_ref24) {
  var theme = _ref24.theme;
  return theme.typography.fontWeight.regular;
}, function (_ref25) {
  var theme = _ref25.theme;
  return theme.lineHeight.medium;
}, function (props) {
  return textModifiers(props);
}, withMargins());
export var StyledSmall = /*#__PURE__*/styled.p.withConfig({
  displayName: "styled__StyledSmall",
  componentId: "tqnj75-6"
})(["", ";color:", ";font-size:", ";font-weight:", ";line-height:", ";margin:0 0 ", ";", " &:last-child{margin-bottom:0;}", ";"], function (props) {
  return commonTextStyles(props);
}, function (_ref26) {
  var color = _ref26.color,
      theme = _ref26.theme;
  return color ? theme.colors[color] : theme.colors.secondary60;
}, function (_ref27) {
  var theme = _ref27.theme;
  return theme.typography.fontSize.small;
}, function (_ref28) {
  var theme = _ref28.theme;
  return theme.typography.fontWeight.regular;
}, function (_ref29) {
  var theme = _ref29.theme;
  return theme.lineHeight.small;
}, function (_ref30) {
  var theme = _ref30.theme;
  return theme.spacing.small;
}, function (props) {
  return textModifiers(props);
}, withMargins());
StyledH0.defaultProps = {
  theme: defaultTheme
};
StyledH1.defaultProps = {
  theme: defaultTheme
};
StyledH2.defaultProps = {
  theme: defaultTheme
};
StyledH3.defaultProps = {
  theme: defaultTheme
};
StyledH4.defaultProps = {
  theme: defaultTheme
};
StyledText.defaultProps = {
  theme: defaultTheme
};
StyledSmall.defaultProps = {
  theme: defaultTheme
};