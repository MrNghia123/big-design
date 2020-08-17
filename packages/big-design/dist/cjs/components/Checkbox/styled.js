"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledCheckbox = exports.HiddenCheckbox = exports.CheckboxContainer = exports.CheckboxLabelContainer = void 0;

var _bigDesignTheme = require("@bigcommerce/big-design-theme");

var _polished = require("polished");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _transitions = require("../../mixins/transitions");

var CheckboxLabelContainer = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "styled__CheckboxLabelContainer",
  componentId: "s1u0st-0"
})(["margin-left:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.spacing.xSmall;
});

exports.CheckboxLabelContainer = CheckboxLabelContainer;

var CheckboxContainer = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "styled__CheckboxContainer",
  componentId: "s1u0st-1"
})(["align-items:flex-start;display:flex;"]);

exports.CheckboxContainer = CheckboxContainer;

var HiddenCheckbox = /*#__PURE__*/_styledComponents.default.input.withConfig({
  displayName: "styled__HiddenCheckbox",
  componentId: "s1u0st-2"
})(["", ""], (0, _polished.hideVisually)());

exports.HiddenCheckbox = HiddenCheckbox;

var StyledCheckbox = /*#__PURE__*/_styledComponents.default.label.withConfig({
  displayName: "styled__StyledCheckbox",
  componentId: "s1u0st-3"
})(["", " align-items:center;background:", ";border:", ";border-color:", ";border-radius:", ";color:", ";cursor:pointer;display:inline-flex;height:", ";justify-content:center;user-select:none;width:", ";", ";", " ", ":focus + &{box-shadow:", ";}svg{opacity:", ";}"], (0, _transitions.withTransition)(['border-color', 'background', 'box-shadow', 'color', 'opacity']), function (_ref2) {
  var checked = _ref2.checked,
      isIndeterminate = _ref2.isIndeterminate,
      theme = _ref2.theme;
  return checked || isIndeterminate ? theme.colors.primary : theme.colors.white;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.border.box;
}, function (_ref4) {
  var checked = _ref4.checked,
      isIndeterminate = _ref4.isIndeterminate,
      theme = _ref4.theme;
  return checked || isIndeterminate ? theme.colors.primary : theme.colors.secondary30;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.borderRadius.normal;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.colors.white;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.spacing.large;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.spacing.large;
}, function (_ref9) {
  var checked = _ref9.checked,
      disabled = _ref9.disabled,
      isIndeterminate = _ref9.isIndeterminate,
      theme = _ref9.theme;
  return disabled && (0, _styledComponents.css)(["background:", ";border-color:", ";cursor:not-allowed;"], checked || isIndeterminate ? theme.colors.secondary30 : theme.colors.secondary10, theme.colors.secondary30);
}, function (_ref10) {
  var checked = _ref10.checked,
      isIndeterminate = _ref10.isIndeterminate,
      disabled = _ref10.disabled,
      theme = _ref10.theme;
  return !disabled && "&:hover {\n      border-color: ".concat(checked || isIndeterminate ? theme.colors.primary : theme.colors.secondary40, ";\n    }");
}, HiddenCheckbox, function (_ref11) {
  var theme = _ref11.theme;
  return "0 0 0 ".concat(theme.spacing.xxSmall, " ").concat(theme.colors.primary20);
}, function (_ref12) {
  var checked = _ref12.checked,
      isIndeterminate = _ref12.isIndeterminate;
  return checked || isIndeterminate ? 1 : 0;
});

exports.StyledCheckbox = StyledCheckbox;
StyledCheckbox.defaultProps = {
  theme: _bigDesignTheme.theme
};
CheckboxLabelContainer.defaultProps = {
  theme: _bigDesignTheme.theme
};