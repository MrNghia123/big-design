import { remCalc } from '../helpers';
export var createLineHeight = function createLineHeight() {
  return {
    small: remCalc(20),
    medium: remCalc(24),
    large: remCalc(28),
    xLarge: remCalc(32),
    xxLarge: remCalc(40),
    xxxLarge: remCalc(48)
  };
};