import _typeof from "@babel/runtime/helpers/esm/typeof";
import { breakpointsOrder } from '@bigcommerce/big-design-theme';
import { css } from 'styled-components';
export var withGridedContainer = function withGridedContainer() {
  return css(["", ";", ";", ";", ";", ";", ";", ";", ";"], function (_ref) {
    var gridAreas = _ref.gridAreas,
        theme = _ref.theme;
    return gridAreas && getGridedStyles(gridAreas, theme, 'grid-template-areas');
  }, function (_ref2) {
    var gridAutoColumns = _ref2.gridAutoColumns,
        theme = _ref2.theme;
    return gridAutoColumns && getGridedStyles(gridAutoColumns, theme, 'grid-auto-columns');
  }, function (_ref3) {
    var gridAutoFlow = _ref3.gridAutoFlow,
        theme = _ref3.theme;
    return gridAutoFlow && getGridedStyles(gridAutoFlow, theme, 'grid-auto-flow');
  }, function (_ref4) {
    var gridAutoRows = _ref4.gridAutoRows,
        theme = _ref4.theme;
    return gridAutoRows && getGridedStyles(gridAutoRows, theme, 'grid-auto-rows');
  }, function (_ref5) {
    var gridColumns = _ref5.gridColumns,
        theme = _ref5.theme;
    return gridColumns && getGridedStyles(gridColumns, theme, 'grid-template-columns');
  }, function (_ref6) {
    var gridGap = _ref6.gridGap,
        theme = _ref6.theme;
    return gridGap && getGridedStyles(gridGap, theme, 'grid-gap');
  }, function (_ref7) {
    var gridRows = _ref7.gridRows,
        theme = _ref7.theme;
    return gridRows && getGridedStyles(gridRows, theme, 'grid-template-rows');
  }, function (_ref8) {
    var gridTemplate = _ref8.gridTemplate,
        theme = _ref8.theme;
    return gridTemplate && getGridedStyles(gridTemplate, theme, 'grid-template');
  });
};
export var withGridedItems = function withGridedItems() {
  return css(["", ";", ";", ";", ";", ";", ";", ";"], function (_ref9) {
    var gridArea = _ref9.gridArea,
        theme = _ref9.theme;
    return gridArea && getGridedStyles(gridArea, theme, 'grid-area');
  }, function (_ref10) {
    var gridColumn = _ref10.gridColumn,
        theme = _ref10.theme;
    return gridColumn && getGridedStyles(gridColumn, theme, 'grid-column');
  }, function (_ref11) {
    var gridColumnEnd = _ref11.gridColumnEnd,
        theme = _ref11.theme;
    return gridColumnEnd && getGridedStyles(gridColumnEnd, theme, 'grid-column-end');
  }, function (_ref12) {
    var gridColumnStart = _ref12.gridColumnStart,
        theme = _ref12.theme;
    return gridColumnStart && getGridedStyles(gridColumnStart, theme, 'grid-column-start');
  }, function (_ref13) {
    var gridRow = _ref13.gridRow,
        theme = _ref13.theme;
    return gridRow && getGridedStyles(gridRow, theme, 'grid-row');
  }, function (_ref14) {
    var gridRowEnd = _ref14.gridRowEnd,
        theme = _ref14.theme;
    return gridRowEnd && getGridedStyles(gridRowEnd, theme, 'grid-row-end');
  }, function (_ref15) {
    var gridRowStart = _ref15.gridRowStart,
        theme = _ref15.theme;
    return gridRowStart && getGridedStyles(gridRowStart, theme, 'grid-row-start');
  });
};

var getGridedStyles = function getGridedStyles(gridedProp, theme, cssKey) {
  if (_typeof(gridedProp) === 'object') {
    return getResponsiveGrid(gridedProp, theme, cssKey);
  }

  if (typeof gridedProp === 'string' || typeof gridedProp === 'number') {
    return getSimpleGrid(gridedProp, cssKey);
  }

  return [];
};

var getSimpleGrid = function getSimpleGrid(gridedProp, cssKey) {
  return css(["", ":", ""], cssKey, gridedProp);
};

var getResponsiveGrid = function getResponsiveGrid(gridedProp, theme, cssKey) {
  var breakpointKeys = Object.keys(gridedProp).sort(function (firstBreakpoint, secondBreakpoint) {
    return breakpointsOrder.indexOf(firstBreakpoint) - breakpointsOrder.indexOf(secondBreakpoint);
  });
  return breakpointKeys.map(function (breakpointKey) {
    return css(["", "{", "}"], theme.breakpoints[breakpointKey], getSimpleGrid(gridedProp[breakpointKey], cssKey));
  });
};