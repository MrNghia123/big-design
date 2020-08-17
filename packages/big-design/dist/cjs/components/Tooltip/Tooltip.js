"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tooltip = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

var _reactPopper = require("react-popper");

var _Typography = require("../Typography");

var _styled = require("./styled");

var Tooltip = (0, _react.memo)(function (_ref) {
  var children = _ref.children,
      _ref$inline = _ref.inline,
      inline = _ref$inline === void 0 ? true : _ref$inline,
      modifiers = _ref.modifiers,
      trigger = _ref.trigger,
      props = (0, _objectWithoutProperties2.default)(_ref, ["children", "inline", "modifiers", "trigger"]);

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isVisible = _useState2[0],
      setIsVisible = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      tooltipContainer = _useState4[0],
      setTooltipContainer = _useState4[1];

  var tooltipModifiers = (0, _react.useMemo)(function () {
    var mods = modifiers ? modifiers : [];
    return [{
      name: 'eventListeners',
      options: {
        scroll: isVisible,
        resize: isVisible
      }
    }, {
      name: 'offset',
      options: {
        offset: [0, 8]
      }
    }].concat((0, _toConsumableArray2.default)(mods));
  }, [isVisible, modifiers]);
  (0, _react.useEffect)(function () {
    var container = document.createElement('div');
    document.body.appendChild(container);
    setTooltipContainer(container);
  }, []);
  (0, _react.useEffect)(function () {
    return function () {
      if (tooltipContainer) {
        document.body.removeChild(tooltipContainer);
      }
    };
  }, [tooltipContainer]);

  var renderContent = function renderContent() {
    return typeof children === 'string' ? /*#__PURE__*/_react.default.createElement(_Typography.Small, {
      color: "white"
    }, children) : children;
  };

  var hideTooltip = function hideTooltip() {
    setIsVisible(false);
  };

  var showTooltip = function showTooltip() {
    setIsVisible(true);
  };

  var onKeyDown = function onKeyDown(event) {
    if (event.key === 'Escape') {
      setIsVisible(false);
    }
  };

  return /*#__PURE__*/_react.default.createElement(_reactPopper.Manager, null, /*#__PURE__*/_react.default.createElement(_reactPopper.Reference, null, function (_ref2) {
    var ref = _ref2.ref;
    return /*#__PURE__*/_react.default.createElement(_styled.StyledTooltipTrigger, {
      inline: inline,
      onBlur: hideTooltip,
      onFocus: showTooltip,
      onKeyDown: onKeyDown,
      onMouseEnter: showTooltip,
      onMouseLeave: hideTooltip,
      ref: ref
    }, trigger);
  }), tooltipContainer ? (0, _reactDom.createPortal)( /*#__PURE__*/_react.default.createElement(_reactPopper.Popper, {
    placement: props.placement || 'top',
    modifiers: tooltipModifiers
  }, function (_ref3) {
    var placement = _ref3.placement,
        ref = _ref3.ref,
        style = _ref3.style;
    return isVisible && /*#__PURE__*/_react.default.createElement(_styled.StyledTooltip, {
      ref: ref,
      style: style,
      "data-placement": placement
    }, renderContent());
  }), tooltipContainer) : null);
});
exports.Tooltip = Tooltip;