import { remCalc } from '../helpers';
export var createTypography = function createTypography() {
  return {
    fontFamily: '"Source Sans Pro", "Helvetica Neue", Arial, sans-serif',
    fontSize: {
      small: remCalc(14),
      medium: remCalc(16),
      large: remCalc(20),
      xLarge: remCalc(24),
      xxLarge: remCalc(32),
      xxxLarge: remCalc(48)
    },
    fontWeight: {
      extraLight: 200,
      light: 300,
      regular: 400,
      semiBold: 600
    }
  };
};