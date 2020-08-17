import { theme as defaultTheme } from '@bigcommerce/big-design-theme';
import styled from 'styled-components';
export function createStyledIcon(Icon) {
  var StyledIcon = /*#__PURE__*/styled(Icon).withConfig({
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
    theme: defaultTheme,
    size: 'xLarge'
  };
  return StyledIcon;
}