import { theme as defaultTheme } from '@bigcommerce/big-design-theme';
import styled from 'styled-components';
import { withDisplay } from '../../mixins';
import { Box } from '../Box';
import { withGridedContainer } from './withGrid'; // TODO: Remove the `forwardedAs` manual prop definition when @types get updated

export var StyledGrid = /*#__PURE__*/styled(Box).withConfig({
  displayName: "styled__StyledGrid",
  componentId: "sv7ojr-0"
})(["", " display:grid;", ""], withGridedContainer(), withDisplay());
StyledGrid.defaultProps = {
  theme: defaultTheme,
  gridGap: defaultTheme.spacing.medium
};