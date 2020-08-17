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
    opacity: 0.87,
    fill: "none",
    d: "M24 24H0V0h24v24z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.88 9.29L12 13.17 8.12 9.29a.996.996 0 10-1.41 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59a.996.996 0 000-1.41c-.39-.38-1.03-.39-1.42 0z"
  }));
};

var IconWithForwardedRef = forwardRef(function (iconProps, ref) {
  return /*#__PURE__*/React.createElement(Icon, _extends({}, iconProps, {
    svgRef: ref
  }));
});
export var ExpandMoreIcon = memo(createStyledIcon(IconWithForwardedRef));
ExpandMoreIcon.displayName = 'ExpandMoreIcon';