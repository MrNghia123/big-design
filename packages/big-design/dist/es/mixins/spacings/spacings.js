import _typeof from "@babel/runtime/helpers/esm/typeof";
import { breakpointsOrder } from '@bigcommerce/big-design-theme';
import { css } from 'styled-components';
export function getSpacingStyles(spacing, theme) {
  for (var _len = arguments.length, spacingKeys = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    spacingKeys[_key - 2] = arguments[_key];
  }

  if (_typeof(spacing) === 'object') {
    return getResponsiveSpacings(spacing, theme, spacingKeys);
  }

  if (typeof spacing === 'string') {
    return getSimpleSpacings(spacing, theme, spacingKeys);
  }

  return css([""]);
}

function getSimpleSpacings(spacing, theme, spacingKeys) {
  return spacingKeys.reduce(function (acc, spacingKey) {
    acc[spacingKey] = theme.spacing[spacing];
    return acc;
  }, {});
}

function getResponsiveSpacings(responsiveSpacing, theme, spacingKeys) {
  var breakpointKeys = Object.keys(responsiveSpacing).sort(function (a, b) {
    return breakpointsOrder.indexOf(a) - breakpointsOrder.indexOf(b);
  });
  return breakpointKeys.map(function (breakpointKey) {
    return css(["", "{", "}"], theme.breakpoints[breakpointKey], getSimpleSpacings(responsiveSpacing[breakpointKey], theme, spacingKeys));
  });
}