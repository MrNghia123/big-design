"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _options = require("./options");

Object.keys(_options).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _options[key];
    }
  });
});