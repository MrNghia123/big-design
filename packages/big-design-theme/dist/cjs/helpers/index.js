"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  createHelpers: true
};
exports.createHelpers = void 0;

var _helpers = require("./helpers");

Object.keys(_helpers).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _helpers[key];
    }
  });
});

var createHelpers = function createHelpers() {
  return {
    addValues: _helpers.addValues,
    createRGBA: _helpers.createRGBA,
    remCalc: _helpers.remCalc
  };
};

exports.createHelpers = createHelpers;