"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createStyledIcon = createStyledIcon;

var _bigDesignTheme = require("@bigcommerce/big-design-theme");

var _styledComponents = _interopRequireDefault(require("styled-components"));

function createStyledIcon(Icon) {
  var StyledIcon = /*#__PURE__*/(0, _styledComponents.default)(Icon).withConfig({
    displayName: "base__StyledIcon",
    componentId: "a9u0e1-0"
  })(["vertical-align:middle;", " ", ""], function (_ref) {
    var color = _ref.color,
        theme = _ref.theme;
    return color && {
      color: theme.colors[color]
    };
  }, function (_ref2) {
    var size = _ref2.size,
        theme = _ref2.theme;
    return size && {
      height: typeof size === 'number' ? theme.helpers.remCalc(size) : theme.spacing[size],
      width: typeof size === 'number' ? theme.helpers.remCalc(size) : theme.spacing[size]
    };
  });
  StyledIcon.defaultProps = {
    theme: _bigDesignTheme.theme,
    size: 'xLarge'
  };
  return StyledIcon;
}