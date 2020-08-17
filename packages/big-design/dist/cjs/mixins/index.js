"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _display = require("./display");

Object.keys(_display).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _display[key];
    }
  });
});

var _margins = require("./margins");

Object.keys(_margins).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _margins[key];
    }
  });
});

var _paddings = require("./paddings");

Object.keys(_paddings).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _paddings[key];
    }
  });
});