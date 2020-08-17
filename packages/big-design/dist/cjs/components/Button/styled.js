"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadingSpinnerWrapper = exports.ContentWrapper = exports.StyledButton = void 0;

var _bigDesignTheme = require("@bigcommerce/big-design-theme");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _mixins = require("../../mixins");

var _transitions = require("../../mixins/transitions");

var _Flex = require("../Flex");

var StyledButton = /*#__PURE__*/_styledComponents.default.button.withConfig({
  displayName: "styled__StyledButton",
  componentId: "sc-3yq204-0"
})(["", " &&{", ";}align-items:center;appearance:none;border:", ";border-radius:", ";color:", ";cursor:pointer;display:inline-flex;flex:none;font-size:", ";font-weight:", ";height:", ";justify-content:center;line-height:", ";outline:none;padding:", ";pointer-events:", ";position:relative;text-align:center;text-decoration:none;user-select:none;vertical-align:middle;white-space:nowrap;width:100%;&:focus{outline:none;}&[disabled]{border-color:", ";pointer-events:none;}& + .bd-button{margin-top:", ";", "{margin-top:", ";margin-left:", ";}}", "{width:auto;}", ";", ";", ";", ""], (0, _transitions.withTransition)(['background-color', 'border-color', 'box-shadow', 'color']), (0, _mixins.withMargins)(), function (_ref) {
  var theme = _ref.theme;
  return theme.border.box;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.borderRadius.normal;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.white;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.typography.fontSize.medium;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.typography.fontWeight.regular;
}, function (_ref6) {
  var theme = _ref6.theme;
  return (0, _bigDesignTheme.addValues)(theme.spacing.xxLarge, theme.spacing.xxSmall);
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.lineHeight.xLarge;
}, function (_ref8) {
  var theme = _ref8.theme;
  return "0 ".concat(theme.spacing.medium);
}, function (_ref9) {
  var isLoading = _ref9.isLoading;
  return isLoading ? 'none' : 'auto';
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.colors.secondary30;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.spacing.xSmall;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.breakpoints.tablet;
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.spacing.none;
}, function (_ref14) {
  var theme = _ref14.theme;
  return theme.spacing.xSmall;
}, function (_ref15) {
  var theme = _ref15.theme;
  return theme.breakpoints.tablet;
}, function (_ref16) {
  var icon = _ref16.iconOnly,
      theme = _ref16.theme;
  return icon && (0, _styledComponents.css)(["padding:0 ", ";"], theme.spacing.xSmall);
}, function (_ref17) {
  var iconLeft = _ref17.iconLeft,
      theme = _ref17.theme;
  return iconLeft && (0, _styledComponents.css)(["padding-left:", ";"], theme.spacing.xSmall);
}, function (_ref18) {
  var iconRight = _ref18.iconRight,
      theme = _ref18.theme;
  return iconRight && (0, _styledComponents.css)(["padding-right:", ";"], theme.spacing.xSmall);
}, function (props) {
  return getButtonStyles(props);
});

exports.StyledButton = StyledButton;

var ContentWrapper = /*#__PURE__*/_styledComponents.default.span.attrs({}).withConfig({
  displayName: "styled__ContentWrapper",
  componentId: "sc-3yq204-1"
})(["align-content:center;align-items:center;display:inline-grid;grid-auto-flow:column;grid-gap:", ";visibility:", ";"], function (_ref19) {
  var theme = _ref19.theme;
  return theme.spacing.xSmall;
}, function (_ref20) {
  var isLoading = _ref20.isLoading;
  return isLoading ? 'hidden' : 'visible';
});

exports.ContentWrapper = ContentWrapper;
var LoadingSpinnerWrapper = /*#__PURE__*/(0, _styledComponents.default)(_Flex.Flex).withConfig({
  displayName: "styled__LoadingSpinnerWrapper",
  componentId: "sc-3yq204-2"
})(["position:absolute;"]);
/**
 * These can be generated dynamically but I'm leaning towards being extra
 * explicit and being able to handle corner cases and changes from design easily
 */

exports.LoadingSpinnerWrapper = LoadingSpinnerWrapper;
var ButtonPrimary = /*#__PURE__*/(0, _styledComponents.css)(["background-color:", ";border-color:", ";font-weight:", ";&:active{background-color:", ";}&:focus{box-shadow:", ";}&:hover:not(:active){background-color:", ";}&[disabled]{background-color:", ";}"], function (_ref21) {
  var theme = _ref21.theme;
  return theme.colors.primary;
}, function (_ref22) {
  var theme = _ref22.theme;
  return theme.colors.primary;
}, function (_ref23) {
  var theme = _ref23.theme;
  return theme.typography.fontWeight.semiBold;
}, function (_ref24) {
  var theme = _ref24.theme;
  return theme.colors.primary60;
}, function (_ref25) {
  var theme = _ref25.theme;
  return "0 0 0 ".concat(theme.spacing.xxSmall, " ").concat(theme.colors.primary20);
}, function (_ref26) {
  var theme = _ref26.theme;
  return theme.colors.primary50;
}, function (_ref27) {
  var theme = _ref27.theme;
  return theme.colors.secondary30;
});
var ButtonPrimaryDestructive = /*#__PURE__*/(0, _styledComponents.css)(["background-color:", ";border-color:", ";font-weight:", ";&:active{background-color:", ";}&:focus{box-shadow:", ";}&:hover:not(:active){background-color:", ";}&[disabled]{background-color:", ";}"], function (_ref28) {
  var theme = _ref28.theme;
  return theme.colors.danger;
}, function (_ref29) {
  var theme = _ref29.theme;
  return theme.colors.danger;
}, function (_ref30) {
  var theme = _ref30.theme;
  return theme.typography.fontWeight.semiBold;
}, function (_ref31) {
  var theme = _ref31.theme;
  return theme.colors.danger60;
}, function (_ref32) {
  var theme = _ref32.theme;
  return "0 0 0 ".concat(theme.spacing.xxSmall, " ").concat(theme.colors.danger20);
}, function (_ref33) {
  var theme = _ref33.theme;
  return theme.colors.danger50;
}, function (_ref34) {
  var theme = _ref34.theme;
  return theme.colors.secondary30;
});
var ButtonSecondary = /*#__PURE__*/(0, _styledComponents.css)(["background-color:transparent;border-color:", ";color:", ";&:active{background-color:", ";}&:focus{box-shadow:", ";}&:hover:not(:active){background-color:", ";}&[disabled]{color:", ";}"], function (_ref35) {
  var theme = _ref35.theme;
  return theme.colors.primary;
}, function (_ref36) {
  var theme = _ref36.theme;
  return theme.colors.primary;
}, function (_ref37) {
  var theme = _ref37.theme;
  return theme.colors.primary20;
}, function (_ref38) {
  var theme = _ref38.theme;
  return "0 0 0 ".concat(theme.spacing.xxSmall, " ").concat(theme.colors.primary20);
}, function (_ref39) {
  var theme = _ref39.theme;
  return theme.colors.primary10;
}, function (_ref40) {
  var theme = _ref40.theme;
  return theme.colors.secondary30;
});
var ButtonSecondaryDestructive = /*#__PURE__*/(0, _styledComponents.css)(["background-color:transparent;border-color:", ";color:", ";&:active{background-color:", ";}&:focus{box-shadow:", ";}&:hover:not(:active){background-color:", ";}&[disabled]{color:", ";}"], function (_ref41) {
  var theme = _ref41.theme;
  return theme.colors.danger;
}, function (_ref42) {
  var theme = _ref42.theme;
  return theme.colors.danger;
}, function (_ref43) {
  var theme = _ref43.theme;
  return theme.colors.danger20;
}, function (_ref44) {
  var theme = _ref44.theme;
  return "0 0 0 ".concat(theme.spacing.xxSmall, " ").concat(theme.colors.danger20);
}, function (_ref45) {
  var theme = _ref45.theme;
  return theme.colors.danger10;
}, function (_ref46) {
  var theme = _ref46.theme;
  return theme.colors.secondary30;
});
var ButtonSubtle = /*#__PURE__*/(0, _styledComponents.css)(["background-color:transparent;border-color:transparent;color:", ";&:active{background-color:", ";}&:focus{box-shadow:", ";}&:hover:not(:active){background-color:", ";}&[disabled]{border-color:transparent;color:", ";}"], function (_ref47) {
  var theme = _ref47.theme;
  return theme.colors.primary;
}, function (_ref48) {
  var theme = _ref48.theme;
  return theme.colors.primary20;
}, function (_ref49) {
  var theme = _ref49.theme;
  return "0 0 0 ".concat(theme.spacing.xxSmall, " ").concat(theme.colors.primary20);
}, function (_ref50) {
  var theme = _ref50.theme;
  return theme.colors.primary10;
}, function (_ref51) {
  var theme = _ref51.theme;
  return theme.colors.secondary30;
});
var ButtonSubtleDestructive = /*#__PURE__*/(0, _styledComponents.css)(["background-color:transparent;border-color:transparent;color:", ";&:active{background-color:", ";}&:focus{box-shadow:", ";}&:hover:not(:active){background-color:", ";}&[disabled]{border-color:transparent;color:", ";}"], function (_ref52) {
  var theme = _ref52.theme;
  return theme.colors.danger;
}, function (_ref53) {
  var theme = _ref53.theme;
  return theme.colors.danger20;
}, function (_ref54) {
  var theme = _ref54.theme;
  return "0 0 0 ".concat(theme.spacing.xxSmall, " ").concat(theme.colors.danger20);
}, function (_ref55) {
  var theme = _ref55.theme;
  return theme.colors.danger10;
}, function (_ref56) {
  var theme = _ref56.theme;
  return theme.colors.secondary30;
});

function getButtonStyles(props) {
  var actionType = props.actionType,
      variant = props.variant;

  switch (variant) {
    case 'primary':
      return actionType === 'destructive' ? ButtonPrimaryDestructive : ButtonPrimary;

    case 'secondary':
      return actionType === 'destructive' ? ButtonSecondaryDestructive : ButtonSecondary;

    case 'subtle':
      return actionType === 'destructive' ? ButtonSubtleDestructive : ButtonSubtle;
  }
}

StyledButton.defaultProps = {
  theme: _bigDesignTheme.theme
};
ContentWrapper.defaultProps = {
  theme: _bigDesignTheme.theme
};
LoadingSpinnerWrapper.defaultProps = {
  theme: _bigDesignTheme.theme
};