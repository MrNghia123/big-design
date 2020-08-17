"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _useUniqueId = require("./useUniqueId");

Object.keys(_useUniqueId).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _useUniqueId[key];
    }
  });
});