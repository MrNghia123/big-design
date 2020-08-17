"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledText = exports.StyledCircleFiller = exports.StyledCircle = exports.StyledProgressCircle = void 0;

var _bigDesignTheme = require("@bigcommerce/big-design-theme");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _constants = require("./constants");

var StyledProgressCircle = /*#__PURE__*/_styledComponents.default.svg.withConfig({
  displayName: "styled__StyledProgressCircle",
  componentId: "n3drku-0"
})(["", ""], function (_ref) {
  var size = _ref.size,
      theme = _ref.theme;
  return (0, _styledComponents.css)(["height:", ";width:", ";"], theme.helpers.remCalc(getDimensions(size)), theme.helpers.remCalc(getDimensions(size)));
});

exports.StyledProgressCircle = StyledProgressCircle;

var StyledCircle = /*#__PURE__*/_styledComponents.default.circle.attrs(function (_ref2) {
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

exports.StyledCircle = StyledCircle;
var StyledCircleFiller = /*#__PURE__*/(0, _styledComponents.default)(StyledCircle).withConfig({
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
  return typeof percent === 'number' ? (0, _styledComponents.css)(["stroke-dashoffset:", ";transform:rotate(-90deg);transition:stroke-dashoffset 0.35s;"], typeof percent === 'number' ? "".concat(fillLength(percent, size)) : 0) : (0, _styledComponents.css)(["animation:", " 1s ease-out infinite;stroke-dashoffset:", ";transform:rotate(-90deg);transition:stroke-dashoffset 0.35s;"], spin(size), fillLength(0, size));
});
exports.StyledCircleFiller = StyledCircleFiller;

var StyledText = /*#__PURE__*/_styledComponents.default.text.attrs(function () {
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

exports.StyledText = StyledText;

var spin = function spin(size) {
  return (0, _styledComponents.keyframes)(["0%{stroke-dashoffset:", ";transform:rotate(-90deg);}50%{stroke-dashoffset:", ";}100%{stroke-dashoffset:", ";transform:rotate(270deg);}"], fillLength(0, size) * -1, fillLength(37.5, size) * -1, fillLength(0, size) * -1);
};

function getDimensions() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'medium';
  return _constants.CIRCLE_DIMENSIONS[size];
}

function getStrokeDashArray() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'medium';
  return "".concat(_constants.CIRCLE_CIRCUMFERENCES[size], " ").concat(_constants.CIRCLE_CIRCUMFERENCES[size]);
}

function getStrokeWidth() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'medium';
  return _constants.CIRCLE_STROKE_WIDTHS[size];
}

function fillLength(percent) {
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'medium';
  return _constants.CIRCLE_CIRCUMFERENCES[size] - percent / 100 * _constants.CIRCLE_CIRCUMFERENCES[size];
}

StyledProgressCircle.defaultProps = {
  theme: _bigDesignTheme.theme
};
StyledCircle.defaultProps = {
  theme: _bigDesignTheme.theme
};
StyledCircleFiller.defaultProps = {
  theme: _bigDesignTheme.theme
};
StyledText.defaultProps = {
  theme: _bigDesignTheme.theme
};