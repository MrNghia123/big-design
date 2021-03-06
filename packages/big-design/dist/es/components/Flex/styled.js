import { theme as defaultTheme } from '@bigcommerce/big-design-theme';
import styled from 'styled-components';
import { withDisplay } from '../../mixins';
import { Box } from '../Box';
import { withFlexedContainer } from './withFlex'; // TODO: Remove the `forwardedAs` manual prop definition when @types get updated

export var StyledFlex = /*#__PURE__*/styled(Box).withConfig({
  displayName: "styled__StyledFlex",
  componentId: "hcvk8l-0"
})(["", " display:flex;", ""], withFlexedContainer(), withDisplay());
StyledFlex.defaultProps = {
  alignContent: 'stretch',
  alignItems: 'stretch',
  flexDirection: {
    mobile: 'column',
    tablet: 'row'
  },
  flexWrap: 'nowrap',
  justifyContent: 'flex-start',
  theme: defaultTheme
};