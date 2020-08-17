"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.H4 = exports.H3 = exports.H2 = exports.H1 = exports.H0 = exports.Small = exports.Text = exports.StyleableH4 = exports.StyleableH3 = exports.StyleableH2 = exports.StyleableH1 = exports.StyleableH0 = exports.StyleableSmall = exports.StyleableText = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _styled = require("./styled");

var validHeadingTags = new Set(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']); // Private

var StyleableText = _styled.StyledText;
exports.StyleableText = StyleableText;
var StyleableSmall = _styled.StyledSmall;
exports.StyleableSmall = StyleableSmall;
var StyleableH0 = _styled.StyledH0;
exports.StyleableH0 = StyleableH0;
var StyleableH1 = _styled.StyledH1;
exports.StyleableH1 = StyleableH1;
var StyleableH2 = _styled.StyledH2;
exports.StyleableH2 = StyleableH2;
var StyleableH3 = _styled.StyledH3;
exports.StyleableH3 = StyleableH3;
var StyleableH4 = _styled.StyledH4; // Public

exports.StyleableH4 = StyleableH4;
var Text = (0, _react.memo)(function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      props = (0, _objectWithoutProperties2.default)(_ref, ["className", "style"]);
  return /*#__PURE__*/_react.default.createElement(StyleableText, props);
});
exports.Text = Text;
var Small = (0, _react.memo)(function (_ref2) {
  var className = _ref2.className,
      style = _ref2.style,
      props = (0, _objectWithoutProperties2.default)(_ref2, ["className", "style"]);
  return /*#__PURE__*/_react.default.createElement(StyleableSmall, props);
});
exports.Small = Small;
var H0 = (0, _react.memo)(function (_ref3) {
  var className = _ref3.className,
      style = _ref3.style,
      as = _ref3.as,
      props = (0, _objectWithoutProperties2.default)(_ref3, ["className", "style", "as"]);
  return /*#__PURE__*/_react.default.createElement(StyleableH0, (0, _extends2.default)({
    as: getHeadingTag('h1', as)
  }, props));
});
exports.H0 = H0;
var H1 = (0, _react.memo)(function (_ref4) {
  var className = _ref4.className,
      style = _ref4.style,
      as = _ref4.as,
      props = (0, _objectWithoutProperties2.default)(_ref4, ["className", "style", "as"]);
  return /*#__PURE__*/_react.default.createElement(StyleableH1, (0, _extends2.default)({
    as: getHeadingTag('h1', as)
  }, props));
});
exports.H1 = H1;
var H2 = (0, _react.memo)(function (_ref5) {
  var className = _ref5.className,
      style = _ref5.style,
      as = _ref5.as,
      props = (0, _objectWithoutProperties2.default)(_ref5, ["className", "style", "as"]);
  return /*#__PURE__*/_react.default.createElement(StyleableH2, (0, _extends2.default)({
    as: getHeadingTag('h2', as)
  }, props));
});
exports.H2 = H2;
var H3 = (0, _react.memo)(function (_ref6) {
  var className = _ref6.className,
      style = _ref6.style,
      as = _ref6.as,
      props = (0, _objectWithoutProperties2.default)(_ref6, ["className", "style", "as"]);
  return /*#__PURE__*/_react.default.createElement(StyleableH3, (0, _extends2.default)({
    as: getHeadingTag('h3', as)
  }, props));
});
exports.H3 = H3;
var H4 = (0, _react.memo)(function (_ref7) {
  var className = _ref7.className,
      style = _ref7.style,
      as = _ref7.as,
      props = (0, _objectWithoutProperties2.default)(_ref7, ["className", "style", "as"]);
  return /*#__PURE__*/_react.default.createElement(StyleableH4, (0, _extends2.default)({
    as: getHeadingTag('h4', as)
  }, props));
});
exports.H4 = H4;

var getHeadingTag = function getHeadingTag(defaultTag, tag) {
  return tag && validHeadingTags.has(tag) ? tag : defaultTag;
};

Text.displayName = 'Text';
Small.displayName = 'Small';
H0.displayName = 'H0';
H1.displayName = 'H1';
H2.displayName = 'H2';
H3.displayName = 'H3';
H4.displayName = 'H4';