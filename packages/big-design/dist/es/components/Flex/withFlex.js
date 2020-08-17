import _typeof from "@babel/runtime/helpers/esm/typeof";
import { breakpointsOrder } from '@bigcommerce/big-design-theme';
import { css } from 'styled-components';
export var withFlexedContainer = function withFlexedContainer() {
  return css(["", ";", ";", ";", ";", ";"], function (_ref) {
    var alignContent = _ref.alignContent,
        theme = _ref.theme;
    return alignContent && getFlexedStyles(alignContent, theme, 'align-content');
  }, function (_ref2) {
    var alignItems = _ref2.alignItems,
        theme = _ref2.theme;
    return alignItems && getFlexedStyles(alignItems, theme, 'align-items');
  }, function (_ref3) {
    var flexDirection = _ref3.flexDirection,
        theme = _ref3.theme;
    return flexDirection && getFlexedStyles(flexDirection, theme, 'flex-direction');
  }, function (_ref4) {
    var flexWrap = _ref4.flexWrap,
        theme = _ref4.theme;
    return flexWrap && getFlexedStyles(flexWrap, theme, 'flex-wrap');
  }, function (_ref5) {
    var justifyContent = _ref5.justifyContent,
        theme = _ref5.theme;
    return justifyContent && getFlexedStyles(justifyContent, theme, 'justify-content');
  });
};
export var withFlexedItems = function withFlexedItems() {
  return css(["", ";", ";", ";", ";", ";"], function (_ref6) {
    var alignSelf = _ref6.alignSelf,
        theme = _ref6.theme;
    return alignSelf && getFlexedStyles(alignSelf, theme, 'align-self');
  }, function (_ref7) {
    var flexBasis = _ref7.flexBasis,
        theme = _ref7.theme;
    return flexBasis && getFlexedStyles(flexBasis, theme, 'flex-basis');
  }, function (_ref8) {
    var flexGrow = _ref8.flexGrow,
        theme = _ref8.theme;
    return typeof flexGrow !== 'undefined' && getFlexedStyles(flexGrow, theme, 'flex-grow');
  }, function (_ref9) {
    var flexOrder = _ref9.flexOrder,
        theme = _ref9.theme;
    return typeof flexOrder !== 'undefined' && getFlexedStyles(flexOrder, theme, 'order');
  }, function (_ref10) {
    var flexShrink = _ref10.flexShrink,
        theme = _ref10.theme;
    return typeof flexShrink !== 'undefined' && getFlexedStyles(flexShrink, theme, 'flex-shrink');
  });
};

var getFlexedStyles = function getFlexedStyles(flexedProp, theme, cssKey) {
  if (_typeof(flexedProp) === 'object') {
    return getResponsiveFlex(flexedProp, theme, cssKey);
  }

  if (typeof flexedProp === 'string' || typeof flexedProp === 'number') {
    return getSimpleFlex(flexedProp, cssKey);
  }

  return [];
};

var getSimpleFlex = function getSimpleFlex(flexedProp, cssKey) {
  return css(["", ":", ""], cssKey, flexedProp);
};

var getResponsiveFlex = function getResponsiveFlex(flexedProp, theme, cssKey) {
  var breakpointKeys = Object.keys(flexedProp).sort(function (firstBreakpoint, secondBreakpoint) {
    return breakpointsOrder.indexOf(firstBreakpoint) - breakpointsOrder.indexOf(secondBreakpoint);
  });
  return breakpointKeys.map(function (breakpointKey) {
    return css(["", "{", "}"], theme.breakpoints[breakpointKey], getSimpleFlex(flexedProp[breakpointKey], cssKey));
  });
};