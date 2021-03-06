import { theme as defaultTheme } from '@bigcommerce/big-design-theme';
import styled from 'styled-components';
import { Box } from '../../Box';
import { withFlexedItems } from '../withFlex';
// TODO: Remove the `forwardedAs` manual prop definition when @types get updated
export var StyledFlexItem = /*#__PURE__*/styled(Box).withConfig({
  displayName: "styled__StyledFlexItem",
  componentId: "smjqtt-0"
})(["", ""], withFlexedItems());
StyledFlexItem.defaultProps = {
  alignSelf: 'auto',
  flexBasis: 'auto',
  flexGrow: 0,
  flexOrder: 0,
  flexShrink: 1,
  theme: defaultTheme
};