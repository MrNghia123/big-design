import { remCalc } from '../helpers';
export var createSpacing = function createSpacing() {
  return {
    none: 0,
    xxSmall: remCalc(4),
    xSmall: remCalc(8),
    small: remCalc(12),
    medium: remCalc(16),
    large: remCalc(20),
    xLarge: remCalc(24),
    xxLarge: remCalc(32),
    xxxLarge: remCalc(48)
  };
};