"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledForm = void 0;

var _bigDesignTheme = require("@bigcommerce/big-design-theme");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styled = require("../Input/styled");

var _styled2 = require("../Textarea/styled");

var StyledForm = /*#__PURE__*/_styledComponents.default.form.withConfig({
  displayName: "styled__StyledForm",
  componentId: "qzey9b-0"
})(["", "{", ",", "{max-width:", ";}}"], function (_ref) {
  var theme = _ref.theme;
  return theme.breakpoints.tablet;
}, _styled.StyledInputWrapper, _styled2.StyledTextareaWrapper, function (_ref2) {
  var fullWidth = _ref2.fullWidth,
      theme = _ref2.theme;
  return fullWidth ? '100%' : theme.helpers.remCalc(416);
});

exports.StyledForm = StyledForm;
StyledForm.defaultProps = {
  theme: _bigDesignTheme.theme
};