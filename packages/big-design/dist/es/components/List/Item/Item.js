import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { forwardRef, memo } from 'react';
import { StyledListItem } from './styled';

var StyleableListItem = function StyleableListItem(_ref) {
  var _ref$autoWidth = _ref.autoWidth,
      autoWidth = _ref$autoWidth === void 0 ? false : _ref$autoWidth,
      _ref$actionType = _ref.actionType,
      actionType = _ref$actionType === void 0 ? 'normal' : _ref$actionType,
      forwardedRef = _ref.forwardedRef,
      _ref$isAction = _ref.isAction,
      isAction = _ref$isAction === void 0 ? false : _ref$isAction,
      props = _objectWithoutProperties(_ref, ["autoWidth", "actionType", "forwardedRef", "isAction"]);

  return /*#__PURE__*/React.createElement(StyledListItem, _extends({}, props, {
    autoWidth: autoWidth,
    actionType: actionType,
    isAction: isAction,
    ref: forwardedRef
  }));
};

export var ListItem = memo(forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyleableListItem, _extends({}, props, {
    forwardedRef: ref
  }));
}));