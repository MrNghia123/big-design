import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { forwardRef, memo } from 'react';
import { ProgressCircle } from '../ProgressCircle';
import { ContentWrapper, LoadingSpinnerWrapper, StyledButton } from './styled';
var RawButton = memo(function (_ref) {
  var forwardedRef = _ref.forwardedRef,
      props = _objectWithoutProperties(_ref, ["forwardedRef"]);

  var handleClick = function handleClick(event) {
    var disabled = props.disabled,
        isLoading = props.isLoading,
        onClick = props.onClick;

    if (onClick && !disabled && !isLoading) {
      onClick(event);
    }
  };

  var renderLoadingSpinner = function renderLoadingSpinner() {
    return /*#__PURE__*/React.createElement(LoadingSpinnerWrapper, {
      alignItems: "center"
    }, /*#__PURE__*/React.createElement(ProgressCircle, {
      size: "xxSmall"
    }));
  };

  return /*#__PURE__*/React.createElement(StyledButton, _extends({
    className: "bd-button",
    role: "button",
    tabIndex: 0
  }, props, {
    onClick: handleClick,
    ref: forwardedRef
  }), props.isLoading ? renderLoadingSpinner() : null, /*#__PURE__*/React.createElement(ContentWrapper, {
    isLoading: props.isLoading
  }, !props.iconOnly && props.iconLeft, props.iconOnly, !props.iconOnly && props.children, !props.iconOnly && props.iconRight));
});
export var StyleableButton = forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(RawButton, _extends({}, props, {
    forwardedRef: ref
  }));
});
export var Button = forwardRef(function (_ref2, ref) {
  var className = _ref2.className,
      style = _ref2.style,
      props = _objectWithoutProperties(_ref2, ["className", "style"]);

  return /*#__PURE__*/React.createElement(RawButton, _extends({}, props, {
    forwardedRef: ref
  }));
});
var defaultProps = {
  actionType: 'normal',
  isLoading: false,
  variant: 'primary'
};
Button.displayName = 'Button';
Button.defaultProps = _objectSpread({}, defaultProps);
StyleableButton.displayName = 'StyleableButton';
StyleableButton.defaultProps = _objectSpread({}, defaultProps);