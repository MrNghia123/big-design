"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.warning = void 0;

var _env = require("../env");

// Ported from tiny-warning:
// https://github.com/alexreardon/tiny-warning/blob/master/src/index.js
// --------------------------------------------
// Since we don't care about whether or not there is a condition passed
// we modified the original to account for that.
var warning = function warning(message) {
  // don't do anything in production
  // wrapping in production check for better dead code elimination
  if (!_env.isProduction) {
    // Condition not passed
    var text = "Warning: ".concat(message); // check console for IE9 support which provides console
    // only with open devtools

    if (typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn(text);
    } // Throwing an error and catching it immediately
    // to improve debugging
    // A consumer can use 'pause on caught exceptions'
    // https://github.com/facebook/react/issues/4216


    try {
      throw Error(text); // eslint-disable-next-line no-empty
    } catch (x) {}
  }
};

exports.warning = warning;