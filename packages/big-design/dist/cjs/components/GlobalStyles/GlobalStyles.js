"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GlobalStyles = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _bigDesignTheme = require("@bigcommerce/big-design-theme");

var _polished = require("polished");

var _styledComponents = require("styled-components");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", "\n\n  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600');\n\n  body {\n    font-family: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var GlobalStyles = /*#__PURE__*/(0, _styledComponents.createGlobalStyle)(_templateObject(), (0, _polished.normalize)(), function (_ref) {
  var theme = _ref.theme;
  return theme.typography.fontFamily;
});
exports.GlobalStyles = GlobalStyles;
GlobalStyles.defaultProps = {
  theme: _bigDesignTheme.theme
};