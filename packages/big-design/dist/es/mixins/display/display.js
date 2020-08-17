import _typeof from "@babel/runtime/helpers/esm/typeof";
import { breakpointsOrder } from '@bigcommerce/big-design-theme';
import { css } from 'styled-components';
export var withDisplay = function withDisplay() {
  return css(["", ";"], function (_ref) {
    var display = _ref.display,
        theme = _ref.theme;
    return display && getDisplayStyles(display, theme, 'display');
  });
};

var getDisplayStyles = function getDisplayStyles(displayProp, theme, cssKey) {
  if (_typeof(displayProp) === 'object') {
    return getResponsiveDisplay(displayProp, theme, cssKey);
  }

  if (typeof displayProp === 'string' || typeof displayProp === 'number') {
    return getSimpleDisplay(displayProp, cssKey);
  }

  return [];
};

var getSimpleDisplay = function getSimpleDisplay(displayProp, cssKey) {
  return css(["", ":", ""], cssKey, displayProp);
};

var getResponsiveDisplay = function getResponsiveDisplay(displayProp, theme, cssKey) {
  var breakpointKeys = Object.keys(displayProp).sort(function (firstBreakpoint, secondBreakpoint) {
    return breakpointsOrder.indexOf(firstBreakpoint) - breakpointsOrder.indexOf(secondBreakpoint);
  });
  return breakpointKeys.map(function (breakpointKey) {
    return css(["", "{", "}"], theme.breakpoints[breakpointKey], getSimpleDisplay(displayProp[breakpointKey], cssKey));
  });
};