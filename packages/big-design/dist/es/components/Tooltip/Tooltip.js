import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { memo, useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { Manager, Popper, Reference } from 'react-popper';
import { Small } from '../Typography';
import { StyledTooltip, StyledTooltipTrigger } from './styled';
export var Tooltip = memo(function (_ref) {
  var children = _ref.children,
      _ref$inline = _ref.inline,
      inline = _ref$inline === void 0 ? true : _ref$inline,
      modifiers = _ref.modifiers,
      trigger = _ref.trigger,
      props = _objectWithoutProperties(_ref, ["children", "inline", "modifiers", "trigger"]);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isVisible = _useState2[0],
      setIsVisible = _useState2[1];

  var _useState3 = useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      tooltipContainer = _useState4[0],
      setTooltipContainer = _useState4[1];

  var tooltipModifiers = useMemo(function () {
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
    }].concat(_toConsumableArray(mods));
  }, [isVisible, modifiers]);
  useEffect(function () {
    var container = document.createElement('div');
    document.body.appendChild(container);
    setTooltipContainer(container);
  }, []);
  useEffect(function () {
    return function () {
      if (tooltipContainer) {
        document.body.removeChild(tooltipContainer);
      }
    };
  }, [tooltipContainer]);

  var renderContent = function renderContent() {
    return typeof children === 'string' ? /*#__PURE__*/React.createElement(Small, {
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

  return /*#__PURE__*/React.createElement(Manager, null, /*#__PURE__*/React.createElement(Reference, null, function (_ref2) {
    var ref = _ref2.ref;
    return /*#__PURE__*/React.createElement(StyledTooltipTrigger, {
      inline: inline,
      onBlur: hideTooltip,
      onFocus: showTooltip,
      onKeyDown: onKeyDown,
      onMouseEnter: showTooltip,
      onMouseLeave: hideTooltip,
      ref: ref
    }, trigger);
  }), tooltipContainer ? createPortal( /*#__PURE__*/React.createElement(Popper, {
    placement: props.placement || 'top',
    modifiers: tooltipModifiers
  }, function (_ref3) {
    var placement = _ref3.placement,
        ref = _ref3.ref,
        style = _ref3.style;
    return isVisible && /*#__PURE__*/React.createElement(StyledTooltip, {
      ref: ref,
      style: style,
      "data-placement": placement
    }, renderContent());
  }), tooltipContainer) : null);
});