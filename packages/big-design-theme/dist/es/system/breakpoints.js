export var breakpointValues = {
  mobile: "0px",
  tablet: "720px",
  desktop: "1025px"
};
export var breakpoints = {
  mobile: "@media (min-width: ".concat(breakpointValues.mobile, ")"),
  tablet: "@media (min-width: ".concat(breakpointValues.tablet, ")"),
  desktop: "@media (min-width: ".concat(breakpointValues.desktop, ")")
};
export var breakpointsOrder = ['mobile', 'tablet', 'desktop'];