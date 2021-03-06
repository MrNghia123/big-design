"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Radio: true
};
Object.defineProperty(exports, "Radio", {
  enumerable: true,
  get: function get() {
    return _Radio.Radio;
  }
});

var _Radio = require("./Radio");

var _Label = require("./Label");

Object.keys(_Label).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Label[key];
    }
  });
});