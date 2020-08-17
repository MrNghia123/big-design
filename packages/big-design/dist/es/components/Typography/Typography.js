import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { memo } from 'react';
import { StyledH0, StyledH1, StyledH2, StyledH3, StyledH4, StyledSmall, StyledText } from './styled';
var validHeadingTags = new Set(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']); // Private

export var StyleableText = StyledText;
export var StyleableSmall = StyledSmall;
export var StyleableH0 = StyledH0;
export var StyleableH1 = StyledH1;
export var StyleableH2 = StyledH2;
export var StyleableH3 = StyledH3;
export var StyleableH4 = StyledH4; // Public

export var Text = memo(function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, ["className", "style"]);

  return /*#__PURE__*/React.createElement(StyleableText, props);
});
export var Small = memo(function (_ref2) {
  var className = _ref2.className,
      style = _ref2.style,
      props = _objectWithoutProperties(_ref2, ["className", "style"]);

  return /*#__PURE__*/React.createElement(StyleableSmall, props);
});
export var H0 = memo(function (_ref3) {
  var className = _ref3.className,
      style = _ref3.style,
      as = _ref3.as,
      props = _objectWithoutProperties(_ref3, ["className", "style", "as"]);

  return /*#__PURE__*/React.createElement(StyleableH0, _extends({
    as: getHeadingTag('h1', as)
  }, props));
});
export var H1 = memo(function (_ref4) {
  var className = _ref4.className,
      style = _ref4.style,
      as = _ref4.as,
      props = _objectWithoutProperties(_ref4, ["className", "style", "as"]);

  return /*#__PURE__*/React.createElement(StyleableH1, _extends({
    as: getHeadingTag('h1', as)
  }, props));
});
export var H2 = memo(function (_ref5) {
  var className = _ref5.className,
      style = _ref5.style,
      as = _ref5.as,
      props = _objectWithoutProperties(_ref5, ["className", "style", "as"]);

  return /*#__PURE__*/React.createElement(StyleableH2, _extends({
    as: getHeadingTag('h2', as)
  }, props));
});
export var H3 = memo(function (_ref6) {
  var className = _ref6.className,
      style = _ref6.style,
      as = _ref6.as,
      props = _objectWithoutProperties(_ref6, ["className", "style", "as"]);

  return /*#__PURE__*/React.createElement(StyleableH3, _extends({
    as: getHeadingTag('h3', as)
  }, props));
});
export var H4 = memo(function (_ref7) {
  var className = _ref7.className,
      style = _ref7.style,
      as = _ref7.as,
      props = _objectWithoutProperties(_ref7, ["className", "style", "as"]);

  return /*#__PURE__*/React.createElement(StyleableH4, _extends({
    as: getHeadingTag('h4', as)
  }, props));
});

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