"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledListItem = void 0;

var _bigDesignTheme = require("@bigcommerce/big-design-theme");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _transitions = require("../../../mixins/transitions");

var StyledListItem = /*#__PURE__*/_styledComponents.default.li.withConfig({
  displayName: "styled__StyledListItem",
  componentId: "surxtv-0"
})(["", " align-items:center;box-sizing:border-box;cursor:pointer;display:flex;font-weight:", ";justify-content:space-between;min-height:", ";min-width:", ";outline:none;padding:", ";a{align-items:center;color:", ";display:flex;height:100%;text-decoration:none;width:100%;&:focus{outline:none;}}", " ", " label{cursor:", ";}"], (0, _transitions.withTransition)(['background-color', 'color']), function (_ref) {
  var theme = _ref.theme,
      isSelected = _ref.isSelected;
  return isSelected ? theme.typography.fontWeight.semiBold : theme.typography.fontWeight.regular;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.helpers.remCalc(36);
}, function (_ref3) {
  var autoWidth = _ref3.autoWidth,
      theme = _ref3.theme;
  return autoWidth ? 'auto' : theme.helpers.remCalc(256);
}, function (_ref4) {
  var theme = _ref4.theme;
  return "".concat(theme.spacing.xxSmall, " ").concat(theme.spacing.medium);
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.secondary70;
}, function (_ref6) {
  var actionType = _ref6.actionType,
      isAction = _ref6.isAction,
      isHighlighted = _ref6.isHighlighted,
      theme = _ref6.theme;
  return isHighlighted && (isAction ? actionType === 'normal' ? (0, _styledComponents.css)(["background-color:", ";color:", ";a{color:", ";}"], theme.colors.primary10, theme.colors.primary, theme.colors.primary) : (0, _styledComponents.css)(["background-color:", ";color:", ";a{color:", ";}"], theme.colors.danger10, theme.colors.danger50, theme.colors.danger50) : (0, _styledComponents.css)(["background-color:", ";"], theme.colors.secondary10));
}, function (_ref7) {
  var disabled = _ref7.disabled,
      theme = _ref7.theme;
  return disabled && (0, _styledComponents.css)(["color:", ";cursor:not-allowed;"], theme.colors.secondary40);
}, function (_ref8) {
  var disabled = _ref8.disabled;
  return disabled ? 'not-allowed' : 'pointer';
});

exports.StyledListItem = StyledListItem;
StyledListItem.defaultProps = {
  theme: _bigDesignTheme.theme
};