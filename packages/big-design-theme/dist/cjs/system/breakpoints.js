"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.breakpointsOrder = exports.breakpoints = exports.breakpointValues = void 0;
var breakpointValues = {
  mobile: "0px",
  tablet: "720px",
  desktop: "1025px"
};
exports.breakpointValues = breakpointValues;
var breakpoints = {
  mobile: "@media (min-width: ".concat(breakpointValues.mobile, ")"),
  tablet: "@media (min-width: ".concat(breakpointValues.tablet, ")"),
  desktop: "@media (min-width: ".concat(breakpointValues.desktop, ")")
};
exports.breakpoints = breakpoints;
var breakpointsOrder = ['mobile', 'tablet', 'desktop'];
exports.breakpointsOrder = breakpointsOrder;