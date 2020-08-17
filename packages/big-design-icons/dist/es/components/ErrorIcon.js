import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
// **********************************
// Auto-generated file, do NOT modify
// **********************************
import React, { forwardRef, memo } from 'react';
import { createStyledIcon } from '../base';
import { useUniqueId } from '../utils';

var Icon = function Icon(_ref) {
  var svgRef = _ref.svgRef,
      title = _ref.title,
      theme = _ref.theme,
      props = _objectWithoutProperties(_ref, ["svgRef", "title", "theme"]);

  var uniqueTitleId = useUniqueId('icon');
  var titleId = title ? props.titleId || uniqueTitleId : undefined;
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z"
  }));
};

var IconWithForwardedRef = forwardRef(function (iconProps, ref) {
  return /*#__PURE__*/React.createElement(Icon, _extends({}, iconProps, {
    svgRef: ref
  }));
});
export var ErrorIcon = memo(createStyledIcon(IconWithForwardedRef));
ErrorIcon.displayName = 'ErrorIcon';