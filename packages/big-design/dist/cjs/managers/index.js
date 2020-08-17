"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alerts = require("./alerts");

Object.keys(_alerts).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _alerts[key];
    }
  });
});