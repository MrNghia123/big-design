import { theme as defaultTheme } from '@bigcommerce/big-design-theme';
import styled, { css, keyframes } from 'styled-components';
import { CIRCLE_CIRCUMFERENCES, CIRCLE_DIMENSIONS, CIRCLE_STROKE_WIDTHS } from './constants';
export var StyledProgressCircle = /*#__PURE__*/styled.svg.withConfig({
  displayName: "styled__StyledProgressCircle",
  componentId: "n3drku-0"
})(["", ""], function (_ref) {
  var size = _ref.size,
      theme = _ref.theme;
  return css(["height:", ";width:", ";"], theme.helpers.remCalc(getDimensions(size)), theme.helpers.remCalc(getDimensions(size)));
});
export var StyledCircle = /*#__PURE__*/styled.circle.attrs(function (_ref2) {
  var size = _ref2.size,
      theme = _ref2.theme;
  return {
    cx: theme.helpers.remCalc(getDimensions(size) / 2),
    cy: theme.helpers.remCalc(getDimensions(size) / 2),
    r: theme.helpers.remCalc(getDimensions(size) / 2 - getStrokeWidth(size) / 2)
  };
}).withConfig({
  displayName: "styled__StyledCircle",
  componentId: "n3drku-1"
})(["fill:transparent;stroke-width:", ";stroke:", ";"], function (_ref3) {
  var size = _ref3.size,
      theme = _ref3.theme;
  return theme.helpers.remCalc(getStrokeWidth(size));
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.secondary20;
});
export var StyledCircleFiller = /*#__PURE__*/styled(StyledCircle).withConfig({
  displayName: "styled__StyledCircleFiller",
  componentId: "n3drku-2"
})(["stroke-dasharray:", ";stroke:", ";transform-origin:50% 50%;", ";"], function (_ref5) {
  var size = _ref5.size;
  return getStrokeDashArray(size);
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.colors.primary;
}, function (_ref7) {
  var percent = _ref7.percent,
      size = _ref7.size;
  return typeof percent === 'number' ? css(["stroke-dashoffset:", ";transform:rotate(-90deg);transition:stroke-dashoffset 0.35s;"], typeof percent === 'number' ? "".concat(fillLength(percent, size)) : 0) : css(["animation:", " 1s ease-out infinite;stroke-dashoffset:", ";transform:rotate(-90deg);transition:stroke-dashoffset 0.35s;"], spin(size), fillLength(0, size));
});
export var StyledText = /*#__PURE__*/styled.text.attrs(function () {
  return {
    dominantBaseline: 'central',
    textAnchor: 'middle',
    x: '50%',
    y: '50%'
  };
}).withConfig({
  displayName: "styled__StyledText",
  componentId: "n3drku-3"
})(["font-size:", ";font-weight:", ";"], function (_ref8) {
  var size = _ref8.size,
      theme = _ref8.theme;
  return size === 'large' ? theme.typography.fontSize.large : theme.typography.fontSize.small;
}, function (_ref9) {
  var size = _ref9.size,
      theme = _ref9.theme;
  return size === 'large' ? theme.typography.fontWeight.semiBold : theme.typography.fontWeight.regular;
});

var spin = function spin(size) {
  return keyframes(["0%{stroke-dashoffset:", ";transform:rotate(-90deg);}50%{stroke-dashoffset:", ";}100%{stroke-dashoffset:", ";transform:rotate(270deg);}"], fillLength(0, size) * -1, fillLength(37.5, size) * -1, fillLength(0, size) * -1);
};

function getDimensions() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'medium';
  return CIRCLE_DIMENSIONS[size];
}

function getStrokeDashArray() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'medium';
  return "".concat(CIRCLE_CIRCUMFERENCES[size], " ").concat(CIRCLE_CIRCUMFERENCES[size]);
}

function getStrokeWidth() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'medium';
  return CIRCLE_STROKE_WIDTHS[size];
}

function fillLength(percent) {
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'medium';
  return CIRCLE_CIRCUMFERENCES[size] - percent / 100 * CIRCLE_CIRCUMFERENCES[size];
}

StyledProgressCircle.defaultProps = {
  theme: defaultTheme
};
StyledCircle.defaultProps = {
  theme: defaultTheme
};
StyledCircleFiller.defaultProps = {
  theme: defaultTheme
};
StyledText.defaultProps = {
  theme: defaultTheme
};