import { addValues, createRGBA, remCalc } from './helpers';
export * from './helpers';
export var createHelpers = function createHelpers() {
  return {
    addValues: addValues,
    createRGBA: createRGBA,
    remCalc: remCalc
  };
};