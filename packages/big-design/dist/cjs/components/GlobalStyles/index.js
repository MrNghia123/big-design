"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GlobalStyles = require("./GlobalStyles");

Object.keys(_GlobalStyles).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _GlobalStyles[key];
    }
  });
});