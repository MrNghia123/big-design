"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = exports.StyleableButton = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _ProgressCircle = require("../ProgressCircle");

var _styled = require("./styled");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var RawButton = (0, _react.memo)(function (_ref) {
  var forwardedRef = _ref.forwardedRef,
      props = (0, _objectWithoutProperties2.default)(_ref, ["forwardedRef"]);

  var handleClick = function handleClick(event) {
    var disabled = props.disabled,
        isLoading = props.isLoading,
        onClick = props.onClick;

    if (onClick && !disabled && !isLoading) {
      onClick(event);
    }
  };

  var renderLoadingSpinner = function renderLoadingSpinner() {
    return /*#__PURE__*/_react.default.createElement(_styled.LoadingSpinnerWrapper, {
      alignItems: "center"
    }, /*#__PURE__*/_react.default.createElement(_ProgressCircle.ProgressCircle, {
      size: "xxSmall"
    }));
  };

  return /*#__PURE__*/_react.default.createElement(_styled.StyledButton, (0, _extends2.default)({
    className: "bd-button",
    role: "button",
    tabIndex: 0
  }, props, {
    onClick: handleClick,
    ref: forwardedRef
  }), props.isLoading ? renderLoadingSpinner() : null, /*#__PURE__*/_react.default.createElement(_styled.ContentWrapper, {
    isLoading: props.isLoading
  }, !props.iconOnly && props.iconLeft, props.iconOnly, !props.iconOnly && props.children, !props.iconOnly && props.iconRight));
});
var StyleableButton = (0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react.default.createElement(RawButton, (0, _extends2.default)({}, props, {
    forwardedRef: ref
  }));
});
exports.StyleableButton = StyleableButton;
var Button = (0, _react.forwardRef)(function (_ref2, ref) {
  var className = _ref2.className,
      style = _ref2.style,
      props = (0, _objectWithoutProperties2.default)(_ref2, ["className", "style"]);
  return /*#__PURE__*/_react.default.createElement(RawButton, (0, _extends2.default)({}, props, {
    forwardedRef: ref
  }));
});
exports.Button = Button;
var defaultProps = {
  actionType: 'normal',
  isLoading: false,
  variant: 'primary'
};
Button.displayName = 'Button';
Button.defaultProps = _objectSpread({}, defaultProps);
StyleableButton.displayName = 'StyleableButton';
StyleableButton.defaultProps = _objectSpread({}, defaultProps);