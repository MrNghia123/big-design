import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n\n  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600');\n\n  body {\n    font-family: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import { theme as defaultTheme } from '@bigcommerce/big-design-theme';
import { normalize } from 'polished';
import { createGlobalStyle } from 'styled-components';
export var GlobalStyles = /*#__PURE__*/createGlobalStyle(_templateObject(), normalize(), function (_ref) {
  var theme = _ref.theme;
  return theme.typography.fontFamily;
});
GlobalStyles.defaultProps = {
  theme: defaultTheme
};